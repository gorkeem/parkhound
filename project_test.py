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
import time
from multiprocessing import Process

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
    tree = ET.parse('data/testmoment'+ str(park_id) + '.xml') 
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
    return park_dict, box_count

def main_processor(model, frame, frame_counter, park_id):
    park_dict, box_count = getReadLocationData(park_id)
    results = []
    for i in range(1, len(park_dict)):
        coordinates = park_dict[str(i)]
        coordinates = park_dict[str(i)]
        image = frame[int(coordinates[1]):int(coordinates[3]), int(coordinates[0]):int(coordinates[2])]
        cv2.imwrite("frame/" + str(frame_counter) + "_" + str(i) + ".jpg", image)
        image = Image.fromarray(image)
        image, top_p, top_classes = predict_image(image, model)
        #print("Box" + str(i) + " is: " + top_classes[0])
        results.append(top_classes[0])
    return box_count, results


def send_data(zone1, park_id):
    f = open("send_data/" + str(park_id) +  ".txt", "w")
    f.write(str(zone1))
    f.close()

def returnBoxes(model, park_id):
    park_dict, box_count = getReadLocationData(park_id)
    box = []
    for i in range(1, len(park_dict)):
        box.append(park_dict[str(i)])
    return park_dict

def apply_to_frame(frame, results, park_dict):
    for i in range(1, len(park_dict)):
        coordinates = park_dict[str(i)]
        if results[i - 1] == "Occupied":
            color = (0, 0, 255) 
        else:
            color = (0, 255, 0) 
        thickness = 2
        start_point = (int(coordinates[0]), int(coordinates[1]))
        end_point = (int(coordinates[2]), int(coordinates[3]))
        frame = cv2.rectangle(frame, start_point, end_point, color, thickness) 
    return frame    

def display_manager(park_id):
    
    park_id = int(park_id)

    cap = cv2.VideoCapture('data/test' + str(park_id) + '.mp4')
    
    park_dict = returnBoxes(model, park_id)
    
    zone1 = []    
    
    overall_start = timer()
    ret, frame = cap.read()
    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_counter = 0
    print("Number of frames are: " + str(length))
    frame_time = timer()
    process_number = 0
    works = True
    while(cap.isOpened()):
        
        ret, frame = cap.read()
        frame_counter = frame_counter + 1
        
        temp = frame.copy()
        total_duration = timer() - overall_start
        
        
        text = "Frame is: " + str(frame_counter)
        
        # font 
        font = cv2.FONT_HERSHEY_SIMPLEX 
          
        # org 
        org = (00, 50) 
          
        # fontScale 
        fontScale = 0.6
           
        # Red color in BGR 
        color = (0, 0, 255) 
          
        # Line thickness of 2 px 
        thickness = 1
           
        # Using cv2.putText() method 
        frame = cv2.putText(frame, text, org, font, fontScale,  
                         color, thickness, cv2.LINE_AA, False) 
  
        
        if (timer() - frame_time) > 5 and works:
            text2 = "Processed Frame is: " + str(frame_counter)
            org2 = (00, 100)
            frame = cv2.putText(frame, text2, org2, font, fontScale,  
                         color, thickness, cv2.LINE_AA, False) 
            
            temp = cv2.cvtColor(temp, cv2.COLOR_BGR2RGB)
            print("Duration: " + str(total_duration))
            print("Process number is: " + str(process_number))
            print("Frame Count is: " + str(frame_counter))
            box_count, results = main_processor(model, temp, frame_counter, park_id)
            frame = apply_to_frame(frame, results, park_dict)
            for i in range(box_count):
                if i < 13:
                    if results[i] == "Occupied":
                        zone1.append((1, 1, 1, 1, i))
                    else:
                        zone1.append((1, 1, 2, 0, i))
                elif i < 26:
                    if results[i] == "Occupied":
                        zone1.append((1, 2, 1, 1, i))
                    else:
                        zone1.append((1, 2, 2, 0, i))
                elif i < 38:
                    if results[i] == "Occupied":
                        zone1.append((2, 1, 1, 1, i))
                    else:
                        zone1.append((2, 1, 2, 0, i))
                elif i < box_count:
                    if results[i] == "Occupied":
                        zone1.append((2, 2, 1, 1, i))
                    else:
                        zone1.append((2, 2, 2, 0, i))   
             
                        
            #send request
            send_data(zone1, park_id)
            zone1 = []                    
            
            cv2.imwrite("processed/" + str(frame_counter) + ".jpg", frame)
        
            cv2.imshow('Frame', frame)
            #print(filled_matrix)
            cv2.waitKey(5000)
            process_number = process_number + 1
            frame_time = timer()
            if process_number == 4:
                works = True
            
        
        cv2.waitKey(100)
        
        if frame_counter == length:
            print("Final frame " + str(frame_counter))
            break
        else:
            #print("Frame id is: "+ str(park_id))
            cv2.imshow('Frame', frame)
    
        #cv2.imwrite("data/park_moment" + str(park_id) + ".jpg", frame) 

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
            
    cap.release()
    cv2.destroyAllWindows()

'''Main method'''

checkpoint_path = 'model/resnet50-transfer-4.pth'
train_on_gpu = cuda.is_available()  

model, optimizer = load_checkpoint(path=checkpoint_path)
print(train_on_gpu)

'''
if __name__ == '__main__':
    process = []
    #for i in range(1, 2):
    process.append(Process(target=display_manager, args=(str(8))))
    #process[i - 1].start()
        #process[i - 1].join()

'''
display_manager(8)



