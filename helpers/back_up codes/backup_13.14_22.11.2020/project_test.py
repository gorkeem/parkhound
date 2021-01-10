from IPython.core.interactiveshell import InteractiveShell
import seaborn as sns
# PyTorch
from torchvision import transforms, datasets, models
import torch
from torch import optim, cuda
from torch.utils.data import DataLoader, sampler
import torch.nn as nn

import warnings
warnings.filterwarnings('ignore', category=FutureWarning)

# Data science tools
import numpy as np
import pandas as pd
import os
import matplotlib.pyplot as plt
# Image manipulations
from PIL import Image
# Useful for examining network
from torchsummary import summary
# Timing utility
from timeit import default_timer as timer
import os

os.environ["KMP_DUPLICATE_LIB_OK"]="TRUE"

def process_image(image_path):
    """Process an image path into a PyTorch tensor"""

    image = Image.open(image_path)
    # Resize
    img = image.resize((256, 256))

    # Center crop
    width = 256
    height = 256
    new_width = 224
    new_height = 224

    left = (width - new_width) / 2
    top = (height - new_height) / 2
    right = (width + new_width) / 2
    bottom = (height + new_height) / 2
    img = img.crop((left, top, right, bottom))

    # Convert to numpy, transpose color dimension and normalize
    img = np.array(img).transpose((2, 0, 1)) / 256

    # Standardization
    means = np.array([0.485, 0.456, 0.406]).reshape((3, 1, 1))
    stds = np.array([0.229, 0.224, 0.225]).reshape((3, 1, 1))

    img = img - means
    img = img / stds

    img_tensor = torch.Tensor(img)

    return img_tensor

def predict(image_path, model, topk=2):
    """Make a prediction for an image using a trained model

    Params
    --------
        image_path (str): filename of the image
        model (PyTorch model): trained model for inference
        topk (int): number of top predictions to return

    Returns

    """
    real_class = image_path.split('\\')[-2]

    # Convert to pytorch tensor
    img_tensor = process_image(image_path)

    # Resize
    if train_on_gpu:
        img_tensor = img_tensor.view(1, 3, 224, 224).cuda()
    else:
        img_tensor = img_tensor.view(1, 3, 224, 224)

    # Set to evaluation
    with torch.no_grad():
        model.eval()
        # Model outputs log probabilities
        out = model(img_tensor)
        ps = torch.exp(out)

        # Find the topk predictions
        topk, topclass = ps.topk(topk, dim=1)

        # Extract the actual classes and probabilities
        top_classes = [
            model.idx_to_class[class_] for class_ in topclass.cpu().numpy()[0]
        ]
        top_p = topk.cpu().numpy()[0]

        return img_tensor.cpu().squeeze(), top_p, top_classes, real_class




def imshow(inp, title=None):
    """Imshow for Tensor."""
    inp = inp.numpy().transpose((1, 2, 0))
    mean = np.array([0.485, 0.456, 0.406])
    std = np.array([0.229, 0.224, 0.225])
    inp = std * inp + mean
    inp = np.clip(inp, 0, 1)
    plt.imshow(inp)
    if title is not None:
        plt.title(title)
    plt.pause(0.001)  # pause a bit so that plots are updated
    
    
def load_checkpoint(path):

    model_name = 'resnet50'

    # Load in checkpoint
    checkpoint = torch.load(path)


    if model_name == 'resnet50':
        model = models.resnet50(pretrained=True)
        # Make sure to set parameters as not trainable
        for param in model.parameters():
            param.requires_grad = False
        model.fc = checkpoint['fc']

    # Load in the state dict
    model.load_state_dict(checkpoint['state_dict'])

    total_params = sum(p.numel() for p in model.parameters())
    print(f'{total_params:,} total parameters.')
    total_trainable_params = sum(
        p.numel() for p in model.parameters() if p.requires_grad)
    print(f'{total_trainable_params:,} total gradient parameters.')


    if train_on_gpu:
        model = model.to('cuda')

    # Model basics
    model.class_to_idx = checkpoint['class_to_idx']
    model.idx_to_class = checkpoint['idx_to_class']
    model.epochs = checkpoint['epochs']

    # Optimizer
    optimizer = checkpoint['optimizer']
    optimizer.load_state_dict(checkpoint['optimizer_state_dict'])

    return model, optimizer


test_path_em = "C:\\Users\\AEGEAN\\Desktop\\Projects\\parking_lot_detection_deep_learning\\dataset\\test2\\Empty"
test_path_occu = "C:\\Users\\AEGEAN\\Desktop\\Projects\\parking_lot_detection_deep_learning\\dataset\\test2\\Occupied"
checkpoint_path = 'model\\resnet50-transfer-4.pth'
train_on_gpu = cuda.is_available()  

overall_start = timer()
model, optimizer = load_checkpoint(path=checkpoint_path)

os.chdir(test_path_em)
empties = os.listdir()
os.chdir(test_path_occu)
occu = os.listdir()


print(train_on_gpu)
accuracy = 0

for i in range(len(empties)):
    img, top_p, top_classes, real_class = predict(test_path_em + "\\"  + empties[i], model)
    print("Top p is: "+ str(top_p))
    print("Top classes are: " + str(top_classes[0]))
    print("Real class: "+ str(real_class))
    if top_classes[0] == real_class:
        accuracy = accuracy + 1
    
for i in range(len(occu)):
    img, top_p, top_classes, real_class = predict(test_path_occu + "\\"  + occu[i], model)
    print("Top p is: "+ str(top_p))
    print("Top classes are: " + str(top_classes[0]))
    print("Real class: "+ str(real_class))
    if top_classes[0] == real_class:
        accuracy = accuracy + 1

total_test  = len(empties) + len(occu)
accuracy = accuracy / total_test
print("********************")
print("Result is: ")
print("Number of test cases are: " + str(total_test))
print("Accuracy is: " + str(accuracy * 100) + "%")
total_time = timer() - overall_start
print(f'{total_time:.2f} total seconds elapsed. ')


