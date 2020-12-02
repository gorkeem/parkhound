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
import xml.etree.ElementTree as ET 
import cv2

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
    real_class = image_path.split('/')[-2]

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


def predict_image(image, model, topk=2):
    
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

        return img_tensor.cpu().squeeze(), top_p, top_classes
    

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
    
    if torch.cuda.is_available():
        checkpoint = torch.load(path)
    else:
        checkpoint = torch.load(path, map_location=torch.device('cpu'))


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


def getReadLocationData(park_id):
    park_dict = {"0" : [1, 2, 3, 4]}
    if park_id == 1:
        tree = ET.parse('data/test_Moment.xml') 
        root = tree.getroot() 
      
    box_count = 0
    for child in root:
        if str(child.tag) == "object":
            box_count = box_count + 1
            for element in child:
                if str(element.tag) == "bndbox":
                    #print("Box ID:" + str(box_count))
                    xmin = element.find("xmin").text
                    ymin = element.find("ymin").text
                    xmax = element.find("xmax").text
                    ymax = element.find("ymax").text
                    park_dict[str(box_count)] = [xmin, ymin, xmax, ymax]
    
    print("Number of boxes are: " + str(box_count))
    return park_dict

def main_processor(model, park_id):
    if park_id == 1:
        img = cv2.imread("data/park_moment1.jpg")
    park_dict = getReadLocationData(park_id)
    for i in range(1, len(park_dict)):
        coordinates = park_dict[str(i)]
        image = img[int(coordinates[1]):int(coordinates[3]), int(coordinates[0]):int(coordinates[2])]
        image = Image.fromarray(image)
        image, top_p, top_classes = predict_image(image, model)
        print("Box" + str(i) + " is: " + top_classes[0])


def display_manager(park_id):
    if park_id == 1:
        cap = cv2.VideoCapture('data/test.mp4')
    elif park_id == 2:
        cap = cv2.VideoCapture('data/test2.mp4')
    elif park_id == 3:
        cap = cv2.VideoCapture('data/test3.mp4')
    elif park_id == 4:
        cap = cv2.VideoCapture('data/test4.mp4')

    while(cap.isOpened()):
        ret, frame = cap.read()
    
        if park_id == 1:
            cv2.imwrite("park_moment1.jpg", frame) 
        elif park_id == 2:
            cv2.imwrite("park_moment2.jpg", frame) 
        elif park_id == 3:
            cv2.imwrite("park_moment3.jpg", frame) 
        elif park_id == 4:
            cv2.imwrite("park_moment4.jpg", frame) 
            
        frame = main_processor(model, park_id)
        #if image is gray
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        cv2.imshow('frame', gray)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
        
        cv2.waitKey(500)
    
    cap.release()
    cv2.destroyAllWindows()

'''Main method'''

checkpoint_path = 'model/resnet50-transfer-4.pth'
train_on_gpu = cuda.is_available()  



overall_start = timer()
model, optimizer = load_checkpoint(path=checkpoint_path)
print(train_on_gpu)

main_processor(model, 1)
total_time = timer() - overall_start
print(f'{total_time:.2f} total seconds elapsed. ')




