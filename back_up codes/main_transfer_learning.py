from torchvision import transforms
from torchvision import datasets
from torch.utils.data import DataLoader
from torchvision import models
import torch.nn as nn
from torch import optim, cuda
import torch
#for taking network summary
from torchsummary import summary
# Timing utility
from timeit import default_timer as timer
# Data science tools
import numpy as np
import pandas as pd
import pretrainedmodels
# Image manipulations
from PIL import Image
from datetime import datetime
import sys
from torch.autograd import Variable

#Function Definitions ended
save_file_name = 'vgg16-transfer-4.pt'
checkpoint_path = 'vgg16-transfer-4.pth'

f = open("log_file.txt", "w")

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

def control_gpu_count(train_on_gpu):
    if train_on_gpu:
        gpu_count = cuda.device_count()
        f.write(str(gpu_count) + " gpus detected.\n")
        if gpu_count > 1:
            multi_gpu = True
        else:
            multi_gpu = False
            
def getLabelIndexforData():
    #Data Indexing for Model
    model.class_to_idx = data['train'].class_to_idx
    model.idx_to_class = {
        idx: class_
        for class_, idx in model.class_to_idx.items()
    }
    
    return list(model.idx_to_class.items())[:7]

    
def process_image(sizeDecision, image_path):
    """Process an image path into a PyTorch tensor"""

    image = Image.open(image_path)
    a_3d_array = np.zeros((1024, 1024, 3), dtype=np.uint8)
    a_3d_array[:, : , 0] = image
    a_3d_array[:, : , 1] = image
    a_3d_array[:, : , 2] = image
    img = Image.fromarray(a_3d_array, 'RGB')
    image = img
    # Resize
    img = image.resize((400, 400))
    # Center crop
    width = 400
    height = 400
    new_width = sizeDecision
    new_height = sizeDecision
    
    left = (width - new_width) / 2
    top = (height - new_height) / 2
    right = (width + new_width) / 2
    bottom = (height + new_height) / 2
    left = int(left)
    right = int(right)
    top = int(top)
    bottom = int(bottom)
    img = img.crop((left, top, right, bottom))
    #print("left" + str(left) + "right" + str(right))

    # Convert to numpy, transpose color dimension and normalize
    img = np.array(img).transpose((2, 0, 1)) / 256

    # Standardization
    means = np.array([0.485, 0.456, 0.406]).reshape((3, 1, 1))
    stds = np.array([0.229, 0.224, 0.225]).reshape((3, 1, 1))

    img = img - means
    img = img / stds

    img_tensor = torch.Tensor(img)
    
    #print(img_tensor.shape)
    
    return img_tensor

def predict(model_name, image_path, model, topk=5):
    """Make a prediction for an image using a trained model

    """
    sizeDecision = 224
    if model_name == "inceptionresnetv2":
        sizeDecision = size2
    
    real_class = image_path.split('\\')[-2]

    # Convert to pytorch tensor
    img_tensor = process_image(sizeDecision, image_path)
    
    # Resize
    if train_on_gpu:
        img_tensor = img_tensor.view(1, 3, sizeDecision, sizeDecision).cuda()
    else:
        img_tensor = img_tensor.view(1, 3, sizeDecision, sizeDecision)

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

def get_parameter_counts(model):
    total_params = sum(p.numel() for p in model.parameters())
    f.write(str(total_params) + " total parameters.\n")
    total_trainable_params = sum(
        p.numel() for p in model.parameters() if p.requires_grad)
    f.write(str(total_trainable_params) + " training parameters.\n")

def get_pretrained_model(model_name, n_classes):
    
    if model_name == 'vgg16':
        model = models.vgg16(pretrained=True)

        # Freeze early layers
        for param in model.parameters():
            param.requires_grad = False
        n_inputs = model.classifier[6].in_features

        # Add on classifier
        model.classifier[6] = nn.Sequential(
            nn.Linear(n_inputs, 256), nn.ReLU(), nn.Dropout(0.2),
            nn.Linear(256, n_classes), nn.LogSoftmax(dim=1))

    elif model_name == 'resnet50':
        model = models.resnet50(pretrained=True)

        for param in model.parameters():
            param.requires_grad = False

        n_inputs = model.fc.in_features
        model.fc = nn.Sequential(
            nn.Linear(n_inputs, 256), nn.ReLU(), nn.Dropout(0.2),
            nn.Linear(256, n_classes), nn.LogSoftmax(dim=1))

    elif model_name == 'alexnet':
        model = models.alexnet(pretrained= True)
        for param in model.parameters():
            param.requires_grad = False
        
        #Updating the second classifier
        model.classifier[4] = nn.Linear(4096,1024)
        
        #Updating the third and the last classifier that is the output layer of the network. Make sure to have 10 output nodes if we are going to get 10 class labels through our model.
        model.classifier[6] = nn.Linear(1024, n_classes)
        
        
    elif model_name == 'resnet18':
        model= models.resnet18(pretrained=True)
        for param in model.parameters():
            param.requires_grad = False
            
        n_inputs = model.fc.in_features
        model.fc = nn.Linear(n_inputs, n_classes)
        
    
    elif modelName== 'inceptionresnetv2': 
        model = pretrainedmodels.__dict__[modelName](num_classes=1000, pretrained='imagenet')
        for param in model.parameters():
            param.requires_grad = False
        
        n_inputs = model.last_linear.in_features
        
        model.last_linear = nn.Linear(n_inputs, n_classes)
        
        
    #print(model.eval())
    
    model = model.to(device)
    

    
    return model


def train_and_validate(model,
          criterion,
          optimizer,
          train_loader,
          valid_loader,
          save_file_name,
          max_epochs_stop=3,
          n_epochs=20):
    
    # Early stopping intialization
    epochs_no_improve = 0
    valid_loss_min = np.Inf

    valid_max_acc = 0
    history = []

    # Number of epochs already trained (if using loaded in model weights)
    try:
        f.write('Model has been trained for: ' + str(model.epochs) + ' epochs.\n')
    except:
        model.epochs = 0
        f.write('Starting Training from Scratch.\n')

    overall_start = timer()

    # Main loop
    for epoch in range(n_epochs):

        # keep track of training and validation loss each epoch
        train_loss = 0.0
        valid_loss = 0.0

        train_acc = 0
        valid_acc = 0

        # Set to training
        model.train()   
        start = timer()
        
        f.write("Epoch " + str(epoch) + " is started\n")
        
        truthMatrix = np.zeros((11), dtype=bool)

        # Training loop
        for ii, (data, target) in enumerate(train_loader):
            # Tensors to gpu
            if train_on_gpu:
                data, target = data.cuda(), target.cuda()

            # Clear gradients
            optimizer.zero_grad()
            # Predicted outputs are log probabilities
            output = model(data)
            
            

            # Loss and backpropagation of gradients
            loss = criterion(output, target)
            loss.backward()

            # Update the parameters
            optimizer.step()

            # Track train loss by multiplying average loss by number of examples in batch
            train_loss += loss.item() * data.size(0)

            # Calculate accuracy by finding max log probability
            _, pred = torch.max(output, dim=1)
            correct_tensor = pred.eq(target.data.view_as(pred))
            # Need to convert correct tensor from int to float to average
            accuracy = torch.mean(correct_tensor.type(torch.FloatTensor))
            # Multiply average accuracy times the number of examples in batch
            
            train_acc += accuracy.item() * data.size(0)

            # Track training progress
            if truthMatrix[int(100 * (ii + 1) / len(train_loader)) // 10] == False:
                truthMatrix[int(100 * (ii + 1) / len(train_loader)) // 10] = True
                log_entry = f' {100 * (ii + 1) / len(train_loader):.2f} % complete. {timer() - start:.2f} '
                f.write('Epoch: ' + str(epoch) + '  ' + log_entry + ' seconds elapsed in epoch.\n')
        
            
        # After training loops ends, start validation
        else:
            model.epochs += 1
            print("Epoch: " + str(epoch) + "\n")

            # Don't need to keep track of gradients
            with torch.no_grad():
                # Set to evaluation mode
                model.eval()

                # Validation loop
                for data, target in valid_loader:
                     
                    # Tensors to gpu
                    if train_on_gpu:
                        data, target = data.cuda(), target.cuda()

                    # Forward pass
                    output = model(data)

                    # Validation loss
                    loss = criterion(output, target)
                    # Multiply average loss times the number of examples in batch
                    valid_loss += loss.item() * data.size(0)

                    # Calculate validation accuracy
                    _, pred = torch.max(output, dim=1)
                    correct_tensor = pred.eq(target.data.view_as(pred))
                    accuracy = torch.mean(
                        correct_tensor.type(torch.FloatTensor))
                    # Multiply average accuracy times the number of examples
                    valid_acc += accuracy.item() * data.size(0)

                # Calculate average losses
                train_loss = train_loss / len(train_loader.dataset)
                valid_loss = valid_loss / len(valid_loader.dataset)

                # Calculate average accuracy
                train_acc = train_acc / len(train_loader.dataset)
                valid_acc = valid_acc / len(valid_loader.dataset)

                history.append([train_loss, valid_loss, train_acc, valid_acc])

                # Print training and validation results
                f.write("\nResults for Epoch: " + str(epoch) + "\n")
                log_entry2 = f'Losses are: Training Loss: {train_loss:.4f}  Validation Loss: {valid_loss:.4f} \n'
                log_entry3 = f'Accuracies are: Training Accuracy: {100 * train_acc:.2f}% Validation Accuracy: {100 * valid_acc:.2f}%'
                f.write(log_entry2)
                f.write(log_entry3 + '\n\n')

                # Save the model if validation loss decreases
                if valid_loss < valid_loss_min:
                    # Save model
                    torch.save(model.state_dict(), save_file_name)
                    # Track improvement
                    epochs_no_improve = 0
                    valid_loss_min = valid_loss
                    valid_best_acc = valid_acc
                    best_epoch = epoch

                # Otherwise increment count of epochs with no improvement
                else:
                    epochs_no_improve += 1
                    # Trigger early stopping
                    if epochs_no_improve >= max_epochs_stop:
                        log_entry4 = f'\nEarly Stopping! Total epochs: {epoch}. Best epoch: {best_epoch} with loss: {valid_loss_min:.2f} and acc: {100 * valid_acc:.2f}% '
                        total_time = timer() - overall_start
                        log_entry5 = f'\n {total_time:.2f} total seconds elapsed for {epoch} epoch. \n Average for each epoch is:  {total_time / (epoch+1):.2f} seconds.'
                        f.write(log_entry4)
                        f.write(log_entry5)

                        # Load the best state dict
                        model.load_state_dict(torch.load(save_file_name))
                        # Attach the optimizer
                        model.optimizer = optimizer

                        # Format history
                        history = pd.DataFrame(
                            history,
                            columns=[
                                'train_loss', 'valid_loss', 'train_acc',
                                'valid_acc'
                            ])
                        return model, history

    # Attach the optimizer
    model.optimizer = optimizer
    # Record overall time and print out stats
    total_time = timer() - overall_start
    log_entry6 = f'\nBest epoch: {best_epoch} with loss: {valid_loss_min:.2f} and acc: {100 * valid_acc:.2f}%\n'
    log_entry7 = f'{total_time:.2f} total seconds elapsed. {total_time / (epoch):.2f} seconds per epoch.\n'
    f.write(log_entry6)
    f.write(log_entry7)
    
    # Format history
    history = pd.DataFrame(
        history,
        columns=['train_loss', 'valid_loss', 'train_acc', 'valid_acc'])
    return model, history

resizedcrop = 256
size2 = 299
resize_number = 224

isSelected = True
loadTrained = False
while(isSelected):
    print("Select one of the following model for training")
    print("1 for alexnet")
    print("2 for resnet50")
    print("3 for resnet18")
    print("4 for vgg16")
    print("5 for inceptionresnetv2")
    print("6 to terminate")
    print("7 to load vgg16")
    option = int(input("Option: "))
    if option == 1:
        modelName = 'alexnet'
        isSelected = False
        criterion = nn.CrossEntropyLoss()
    elif option == 2:
        modelName = 'resnet50'
        isSelected = False
        criterion = nn.NLLLoss()
    elif option == 3:
        modelName = 'resnet18'
        isSelected = False
        criterion = nn.CrossEntropyLoss()
    elif option == 4:
        modelName = 'vgg16'
        isSelected = False
        criterion = nn.NLLLoss()
    elif option == 5:
       modelName = 'inceptionresnetv2'
       isSelected = False
       criterion = nn.CrossEntropyLoss()
       resizedcrop = size2
       resize_number = size2
    elif option == 6:
        sys.exit()
    elif option == 7:
        modelName = 'vgg16'
        loadTrained = True
        isSelected = False
        criterion = nn.NLLLoss()
    else: 
        print("You have selected invalid option")


#
# Image transformations
image_transforms = {
    # Train uses data augmentation
    'train':
    transforms.Compose([
        transforms.RandomResizedCrop(size=resizedcrop, scale=(0.8, 1.0)),
        transforms.RandomRotation(degrees=15),
        transforms.ColorJitter(),
        transforms.RandomHorizontalFlip(),
        transforms.CenterCrop(size=resize_number),  # Image net standards
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                             [0.229, 0.224, 0.225])  # Imagenet standards
    ]),
    # Validation does not use augmentation
    'validate':
    transforms.Compose([
        transforms.Resize(size=resizedcrop),
        transforms.CenterCrop(size=resize_number),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ]),
    # Test does not use augmentation
    'test':
    transforms.Compose([
        transforms.Resize(size=resizedcrop),
        transforms.CenterCrop(size=resize_number),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ]),
}


traindir = ".\\mamography_test_1\\train"
validdir = ".\\mamography_test_1\\validate"
testdir = ".\\mamography_test_1\\test"
batch_size = 4
n_classes = 7
save_file_name = 'vgg16-transfer-4.pt'
checkpoint_path = 'vgg16-transfer-4.pth'


#Information for the log file
now = datetime.now()
dt_string = now.strftime("%d%m%Y")
fileName = 'log\\' + modelName + '-' + dt_string + '.log'
f = open(fileName, "w+")
f.write("Target model is: " + modelName + "\n" + "Batch size is: " + str(batch_size) + "\n")



train_on_gpu = cuda.is_available()

multi_gpu = control_gpu_count(train_on_gpu)


# Datasets from each folder
data = {
    'train':
    datasets.ImageFolder(root=traindir, transform=image_transforms['train']),
    'validate':
    datasets.ImageFolder(root=validdir, transform=image_transforms['validate']),
    'test':
    datasets.ImageFolder(root=testdir, transform=image_transforms['test'])
}

# Pass transforms in here, then run the next cell to see how the transforms look
train_data = datasets.ImageFolder(root=traindir, transform=image_transforms['train'])
valid_data = datasets.ImageFolder(root=validdir, transform=image_transforms['validate'])

trainloader = torch.utils.data.DataLoader(train_data, batch_size=batch_size, shuffle=True)
validloader = torch.utils.data.DataLoader(valid_data, batch_size=batch_size, shuffle=True)


# Iterate through the dataloader once
trainiter = iter(trainloader)
images, labels = next(trainiter)
print("Features Shape: " + str(images.shape) + " \n" + "Labels Shape:" + str(labels.shape))

#print(pretrainedmodels.model_names)
'''
dirToShow = "C:\\Users\\AEGEAN\\Desktop\\ICTERRA\\Tutorial Pytorch\\mamography_test_1\\train\\ARCH\\"
img = mpimg.imread(dirToShow + "mdb115.jpg")
imgplot = plt.imshow(img)
plt.show()
'''


model = get_pretrained_model(modelName, n_classes)
get_parameter_counts(model)

test_data = datasets.ImageFolder(root=validdir, transform=image_transforms['test'])
testloader = torch.utils.data.DataLoader(test_data, batch_size=1, shuffle=False)

indexedLabelList = []
indexedLabelList = getLabelIndexforData()
print(indexedLabelList)

    
if(loadTrained == True):
    #model, optimizer = load_checkpoint(path=checkpoint_path)
else:
    #Cross Entropy for AlexNet criterion = nn.CrossEntropyLoss()
    #criterion = nn.NLLLoss()
    #For softmax output use Negative Likelihood criterion = nn.NLLLoss()
    optimizer = optim.Adam(model.parameters())
    
    
    model, history = train_and_validate(
        model,
        criterion,
        optimizer,
        trainloader,
        validloader,
        save_file_name = save_file_name,
        max_epochs_stop = 4,
        n_epochs = 20)
    
    
    '''
    print("Save successful")
    
    plt.figure(figsize=(8, 6))
    for c in ['train_loss', 'valid_loss']:
        plt.plot(
            history[c], label=c)
    plt.legend()
    plt.xlabel('Epoch')
    plt.ylabel('Average Negative Log Likelihood')
    plt.title('Training and Validation Losses')
    '''

    
    
for p in optimizer.param_groups[0]['params']:
    if p.requires_grad:
        print(p.shape)

for i in range(1, 6):
    f.write("Test " + str(i)  + " starts\n" )
    if i == 1:
        path = "C:\\Users\\AEGEAN\\Desktop\\ICTERRA\\Tutorial Pytorch\\mamography_test_1\\validate\\ARCH\\mdb167.jpg"
        f.write("ARCH image: \n")
    elif i == 2:
        path = "C:\\Users\\AEGEAN\\Desktop\\ICTERRA\\Tutorial Pytorch\\mamography_test_1\\validate\\\ASYM\\mdb107.jpg"
        f.write("ASYM image: \n")
    elif i == 3:
        path = "C:\\Users\\AEGEAN\\Desktop\\ICTERRA\\Tutorial Pytorch\\mamography_test_1\\validate\\\CALC\\mdb248.jpg"
        f.write("CALC image: \n")
    elif i == 4:
        path = "C:\\Users\\AEGEAN\\Desktop\\ICTERRA\\Tutorial Pytorch\\mamography_test_1\\validate\\CIRC\\mdb244.jpg"
        f.write("CIRC image: \n")
    elif i == 5:
        path = "C:\\Users\\AEGEAN\\Desktop\\ICTERRA\\Tutorial Pytorch\\mamography_test_1\\validate\\NORM\\mdb284.jpg"
        f.write("NORM image: \n")
    start = timer()
    img, top_p, top_classes, real_class = predict(modelName ,path, model)
    f.write("Probabilities: " + str(top_p) + "\n")
    f.write("Top 5 Classes: " + str(top_classes) + "\n") 
    f.write("Real Class: " + str(real_class) + "\n")    
    f.write(f'Time passed for {i} is: {timer() - start:.4f}\n')

f.close()
