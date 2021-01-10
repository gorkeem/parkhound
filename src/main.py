import tkinter as tk
import xml.etree.ElementTree as ET
import concurrent.futures
import time
import cv2
from timeit import default_timer as timer
from PIL import Image
import matplotlib.pyplot as plt
import os
import numpy as np
from torchvision import models
import torch
from torch import cuda
from db import db
import warnings
warnings.filterwarnings('ignore', category=FutureWarning)

# Data science tools
# Image manipulations
# Useful for examining network
# Timing utility

os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE"
parkhound_db = db()


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
    park_dict = {"0": [1, 2, 3, 4]}
    tree = ET.parse('data/park_structure/test' + str(park_id) + '.xml')
    root = tree.getroot()
    lines = []
    box_count = 0
    line_count = 0
    start_coordinates = ()
    end_coordinates = ()
    for child in root:
        if str(child.tag) == "object":
            for element in child:
                if str(element.tag) == "line":
                    if box_count != 0:
                        coordinates = park_dict[str(box_count)]
                        end_coordinates = (coordinates[0], coordinates[1])
                        writer = (line_count, start_coordinates,
                                  end_coordinates)
                        lines.append(writer)
                        line_count = 0
                if str(element.tag) == "bndbox":
                    #print("Box ID:" + str(box_count))
                    xmin = element.find("xmin").text
                    ymin = element.find("ymin").text
                    xmax = element.find("xmax").text
                    ymax = element.find("ymax").text
                    if line_count == 0:
                        start_coordinates = (xmin, ymin)
                    line_count = line_count + 1
                    box_count = box_count + 1
                    park_dict[str(box_count)] = [xmin, ymin, xmax, ymax]

    coordinates = park_dict[str(box_count)]
    end_coordinates = (coordinates[0], coordinates[1])
    writer = (line_count, start_coordinates, end_coordinates)
    lines.append(writer)

    #print("Number of boxes are: " + str(box_count))
    return park_dict, box_count, lines


def multi_process(input_th):
    thread_id1, start_index, end_index, park_dict, frame, results = input_th
    #print("Thread id: " + str(thread_id1) + " Start index: " + str(start_index) + " End index: " + str(end_index))
    for i in range(start_index, end_index):
        coordinates = park_dict[str(i)]
        image = frame[int(coordinates[1]):int(coordinates[3]),
                      int(coordinates[0]):int(coordinates[2])]
        #cv2.imwrite("frame/" + str(frame_counter) + "_" + str(i) + ".jpg", image)
        image = Image.fromarray(image)
        image, top_p, top_classes = predict_image(image, model)
        #print("Box" + str(i) + " is: " + top_classes[0])
        results.append(top_classes[0])
    return results


def main_processor(model, frame, frame_counter, park_id):
    park_dict, box_count, lines = getReadLocationData(park_id)
    results1 = []
    results2 = []
    results3 = []
    # divide to 3
    length1 = int(len(park_dict) / 3)
    length2 = int(len(park_dict) / 3)
    a = 1, 1, length1, park_dict, frame, results1
    b = 2, length1, length1 + length2, park_dict, frame, results2
    c = 3, length1 + length2, len(park_dict), park_dict, frame, results3

    with concurrent.futures.ThreadPoolExecutor() as executor:
        future = executor.submit(multi_process, a)
        future2 = executor.submit(multi_process, b)
        future3 = executor.submit(multi_process, c)
        results1 = future.result()
        results2 = future2.result()
        results3 = future3.result()

    time.sleep(1)
    results = []
    #print("Length1 is: " + str(length1))
    #print("length1 + length2 is: " + str(length1 + length2))
    for i in range(len(results1)):
        results.append(results1[i])
    for i in range(len(results2)):
        results.append(results2[i])
    for i in range(len(results3)):
        results.append(results3[i])

    print("Length of the results " + str(len(results)))
    return results


def main_processor_image(model, frame, park_id):
    park_dict, box_count = getReadLocationData(park_id)
    results = []
    for i in range(1, len(park_dict)):
        coordinates = park_dict[str(i)]
        coordinates = park_dict[str(i)]
        image = frame[int(coordinates[1]):int(coordinates[3]),
                      int(coordinates[0]):int(coordinates[2])]
        #cv2.imwrite("frame/" + str(frame_counter) + "_" + str(i) + ".jpg", image)
        image = Image.fromarray(image)
        image, top_p, top_classes = predict_image(image, model)
        #print("Box" + str(i) + " is: " + top_classes[0])
        results.append(top_classes[0])
    return box_count, results


def send_data(park_structure, frame_counter, park_id, parking_line_count, total_lines, available_lines):
    row, column = park_structure.shape
    #f = open("send_data/" + str(frame_counter) + ".txt", "w")
    if park_id == 1:
        park_size = 13
        send_park_structure = np.zeros([park_size, column], dtype=object)
        counter = 0
        index = 1
        for i in range(park_size):
            for j in range(column):
                if i % 3 == 0:
                    send_park_structure[i][j] = (None, 'R')
                    if j == column - 1:
                        counter += 1
                else:
                    if park_structure[i - counter][j] == 1:
                        send_park_structure[i][j] = (index, 'F')
                        index += 1
                    elif park_structure[i - counter][j] == 0:
                        send_park_structure[i][j] = (index, 'E')
                        index += 1
                    elif park_structure[i - counter][j] == -9:
                        send_park_structure[i][j] = (None, 'B')

    elif park_id == 2:
        park_size = 9
        send_park_structure = np.zeros([park_size, column], dtype=object)
        counter = 0
        index = 0
        for i in range(park_size):
            for j in range(column):
                if i % 3 == 0:
                    send_park_structure[i][j] = (None, 'R')
                    if j == column - 1:
                        counter += 1
                elif i == 8:
                    send_park_structure[i][j] = (None, 'B')
                    if j == column - 1:
                        counter += 1
                else:
                    if park_structure[i - counter][j] == 1:
                        send_park_structure[i][j] = (index, 'F')
                        index += 1
                    elif park_structure[i - counter][j] == 0:
                        send_park_structure[i][j] = (index, 'E')
                        index += 1
                    elif park_structure[i - counter][j] == -9:
                        send_park_structure[i][j] = (None, 'B')
        send_park_structure = send_park_structure.T

    send_park_structure = send_park_structure[::-1]
    parkhound_db.createParkingLot(send_park_structure, park_id)
    # f.write(str(send_park_structure))
    # f.close()


def returnBoxes(model, park_id):
    park_dict, box_count, lines = getReadLocationData(park_id)
    box = []
    for i in range(1, len(park_dict)):
        box.append(park_dict[str(i)])
    return park_dict, box_count, lines


def apply_to_frame(frame, frame_counter, park_structure, park_id, car_count, results, park_dict, parking_line_count, total_lines, available_lines):
    line_count = 0
    counter = 0
    #print("Car data : " + str(len(car_count)))
    for i in range(1, len(park_dict)):
        counter = counter + 1
        coordinates = park_dict[str(i)]
        color = (0, 0, 255)
        if car_count[line_count] > counter:
            if results[i - 1] == "Occupied":
                park_structure[line_count, counter - 1] = 1
                color = (0, 0, 255)
            else:
                park_structure[line_count, counter - 1] = 0
                color = (0, 255, 0)
            #print(str(counter) + " - ")
            park_structure[line_count][counter] = 1

        elif car_count[line_count] == counter:
            if results[i - 1] == "Occupied":
                park_structure[line_count, counter - 1] = 1
                color = (0, 0, 255)
            else:
                park_structure[line_count, counter - 1] = 0
                color = (0, 255, 0)
            # print(str(counter))
            #print("Line count is: " + str(line_count) + " Size is: " + str(car_count[line_count]))
            # print("\n")
            line_count = line_count + 1
            counter = 0
        thickness = 2
        start_point = (int(coordinates[0]), int(coordinates[1]))
        end_point = (int(coordinates[2]), int(coordinates[3]))
        frame = cv2.rectangle(frame, start_point, end_point, color, thickness)

    send_data(park_structure, frame_counter, park_id,
              parking_line_count, total_lines, available_lines)

    return frame


def obtain_new_park_structure(structure, car_count, max_cars):
    park_structure = np.zeros([len(structure), max_cars])
    for i in range(len(structure)):
        for j in range(car_count[i], max_cars):
            park_structure[i, j] = -9
    return park_structure


def create_structure(park_height, park_width, lines):
    cars_lines = []
    car_count = []
    max_cars = 0
    parking_line_count = len(lines)
    print("Park line count is: " + str(parking_line_count))
    total_lines = len(lines) + 1
    available_lines = []
    for i in range(total_lines + 1):
        if i % 2 == 1:
            available_lines.append(i)

    for i in range(len(lines)):
        park_line = lines[i]
        number_of_cars_inline = park_line[0]
        if number_of_cars_inline > max_cars:
            max_cars = number_of_cars_inline
        distance = int(park_line[2][0]) - int(park_line[1][0])
        car_count.append(number_of_cars_inline)
        cars_lines.append((number_of_cars_inline, distance))
        #print("For Line " + str(i + 1))
        #print(str(number_of_cars_inline) + " cars in the " + str(distance) + " pixels area " + str(int(distance / int(number_of_cars_inline))) + " pixels are required per car.")
    return cars_lines, car_count, max_cars, parking_line_count, total_lines, available_lines


def display_manager(park_id, frame_rate):

    park_id = int(park_id)

    cap = cv2.VideoCapture('data/videos/test' + str(park_id) + '.mp4')

    park_dict, box_count, lines = returnBoxes(model, park_id)

    overall_start = timer()
    ret, frame = cap.read()
    h, w, c = frame.shape
    structure, car_count, max_cars, parking_line_count, total_lines, available_lines = create_structure(
        h, w, lines)

    total_frame = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    frame_counter = 1

    print("Number of frames are: " + str(total_frame))
    print("Height: " + str(h) + " Width: " + str(w))
    frame_time = timer()

    while(cap.isOpened()):

        try:
            ret, frame = cap.read()
        except:
            print("Cannot read the frame")
            break

        if frame_counter == total_frame:
            print("Final frame " + str(frame_counter))
            break

        if frame.all() == None:
            break

        temp = frame.copy()
        total_duration = timer() - overall_start

        text = "Frame is: " + str(frame_counter) + \
            ' Total Duration: ' + str(int(total_duration))
        #print("Video Duration: " + str(total_duration))

        # font
        font = cv2.FONT_HERSHEY_SIMPLEX

        # org
        org = (00, 50)

        # fontScale
        fontScale = 0.6

        # Red color in BGR
        color = (141, 212, 226)

        # Line thickness of 2 px
        thickness = 1

        # Using cv2.putText() method
        frame = cv2.putText(frame, text, org, font, fontScale,
                            color, thickness, cv2.LINE_AA, False)

        if (timer() - frame_time) > 10:
            text2 = "Processed Frame is: " + str(frame_counter)
            org2 = (00, 100)
            frame = cv2.putText(frame, text2, org2, font, fontScale,
                                color, thickness, cv2.LINE_AA, False)

            park_structure = obtain_new_park_structure(
                structure, car_count,  max_cars)

            temp2 = temp.copy()

            temp = cv2.cvtColor(temp, cv2.COLOR_BGR2RGB)
            print("Video Duration so far: " + str(total_duration))
            print("Frame Count is: " + str(frame_counter))
            calculation_time = timer()

            results = main_processor(model, temp, frame_counter, park_id)

            frame = apply_to_frame(frame, frame_counter, park_structure, park_id, car_count,
                                   results, park_dict, parking_line_count, total_lines, available_lines)

            if park_id == 1:
                cv2.imwrite("../build/2/" + "processed" + ".jpg", frame)
                cv2.imwrite("../build/2/" + "latest" + ".jpg", temp2)
            elif park_id == 2:
                cv2.imwrite("../build/3/" + "processed" + ".jpg", frame)
                cv2.imwrite("../build/3/" + "latest" + ".jpg", temp2)

            process = timer() - calculation_time
            print("Processing Time: " + str(process))

            cv2.imshow('Frame', frame)
            cv2.waitKey(3000)
            frame_time = timer()
            # time.sleep(process)

        # cv2.waitKey(1200)

        if frame_counter == total_frame:
            print("Final frame " + str(frame_counter))
            break
        else:
            print("Current frame is: " + str(frame_counter))
            cv2.imshow('Frame', frame)

        #cv2.imwrite("data/park_moment" + str(park_id) + ".jpg", frame)
        # time.sleep(2)
        cv2.waitKey(frame_rate)
        frame_counter = frame_counter + 1

        key = cv2.waitKey(500)

        if key == 32:
            cv2.waitKey()
        elif key == ord('q'):
            break
        elif key == ord('a'):
            stop = True
            while stop:
                time.sleep(1)
                key = cv2.waitKey(500)
                if key == 32:
                    cv2.waitKey()
                elif key == ord('e'):
                    stop = False

    cap.release()
    cv2.destroyAllWindows()

    return park_structure


def display_manager_server(park_id, frame_rate):

    park_id = int(park_id)

    cap = cv2.VideoCapture('data/videos/test' + str(park_id) + '.mp4')

    park_dict, lines = returnBoxes(model, park_id)

    overall_start = timer()
    ret, frame = cap.read()
    h, w, c = frame.shape
    structure, car_count, max_cars, parking_line_count, total_lines, available_lines = create_structure(
        h, w, lines)

    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    frame_counter = 1
    if park_id == 10:
        length = length - 1
    print("Number of frames are: " + str(length))
    print("Height: " + str(h) + " Width: " + str(w))
    frame_time = timer()

    while(cap.isOpened()):

        try:
            ret, frame = cap.read()
        except:
            print("Cannot read the frame")
            break

        if frame.all() == None:
            break

        temp = frame.copy()
        total_duration = timer() - overall_start

        text = "Frame is: " + str(frame_counter) + \
            "\n Total Duration: " + str(total_duration)

        # font
        font = cv2.FONT_HERSHEY_SIMPLEX

        # org
        org = (00, 50)

        # fontScale
        fontScale = 0.6

        # Red color in BGR
        color = (134, 113, 40)

        print("Video Duration: " + str(total_duration))

        # Line thickness of 2 px
        thickness = 1

        # Using cv2.putText() method
        frame = cv2.putText(frame, text, org, font, fontScale,
                            color, thickness, cv2.LINE_AA, False)

        if (timer() - frame_time) > 10:
            text2 = "Processed Frame is: " + str(frame_counter)
            org2 = (00, 100)
            frame = cv2.putText(frame, text2, org2, font, fontScale,
                                color, thickness, cv2.LINE_AA, False)

            park_structure = obtain_new_park_structure(
                structure, car_count,  max_cars)
            temp = cv2.cvtColor(temp, cv2.COLOR_BGR2RGB)
            print("Video Duration so far: " + str(total_duration))
            print("Frame Count is: " + str(frame_counter))
            calculation_time = timer()

            results = main_processor(model, temp, frame_counter, park_id)

            frame = apply_to_frame(frame, frame_counter, park_structure, park_id, car_count,
                                   results, park_dict, parking_line_count, total_lines, available_lines)

            cv2.imwrite("processed/" + str(frame_counter) + ".jpg", frame)

            process = timer() - calculation_time
            print("Processing Time: " + str(process))

            cv2.imshow('Frame', frame)
            cv2.waitKey(3000)
            frame_time = timer()

        # cv2.waitKey(1200)

        if frame_counter == length:
            print("Final frame " + str(frame_counter))
            break
        else:
            print("Current frame is: " + str(frame_counter))
            cv2.imshow('Frame', frame)

        #cv2.imwrite("data/park_moment" + str(park_id) + ".jpg", frame)
        # time.sleep(2)
        cv2.waitKey(frame_rate)
        frame_counter = frame_counter + 1

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
    return park_structure


def action(number, frame_rate):
    display_manager(number, frame_rate)


def settings(number):
    a = 10


def display_manager_park2_test(park_id, frame_rate):

    park_id = int(park_id)

    cap = cv2.VideoCapture('data/videos/test' + str(park_id) + '.mp4')

    park_dict, lines = returnBoxes(model, park_id)

    overall_start = timer()
    ret, frame = cap.read()
    h, w, c = frame.shape
    structure, car_count, max_cars, parking_line_count, total_lines, available_lines = create_structure(
        h, w, lines)

    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    frame_counter = 1
    if park_id == 10:
        length = length - 1
    print("Number of frames are: " + str(length))
    print("Height: " + str(h) + " Width: " + str(w))
    frame_time = timer()

    while(cap.isOpened()):

        try:
            ret, frame = cap.read()
        except:
            print("Cannot read the frame")
            break

        if frame.all() == None:
            break

        temp = frame.copy()
        total_duration = timer() - overall_start

        text = "Frame is: " + str(frame_counter) + \
            ' Total Duration: ' + str(int(total_duration))
        print("Video Duration: " + str(total_duration))

        # font
        font = cv2.FONT_HERSHEY_SIMPLEX

        # org
        org = (00, 50)

        # fontScale
        fontScale = 0.6

        # Red color in BGR
        color = (141, 212, 226)

        # Line thickness of 2 px
        thickness = 1

        # Using cv2.putText() method
        frame = cv2.putText(frame, text, org, font, fontScale,
                            color, thickness, cv2.LINE_AA, False)

        if (timer() - frame_time) > 10:
            text2 = "Processed Frame is: " + str(frame_counter)
            org2 = (00, 100)
            frame = cv2.putText(frame, text2, org2, font, fontScale,
                                color, thickness, cv2.LINE_AA, False)

            park_structure = obtain_new_park_structure(
                structure, car_count,  max_cars)
            temp = cv2.cvtColor(temp, cv2.COLOR_BGR2RGB)
            print("Video Duration so far: " + str(total_duration))
            print("Frame Count is: " + str(frame_counter))
            calculation_time = timer()

            results = main_processor(model, temp, frame_counter, park_id)

            frame = apply_to_frame(frame, frame_counter, park_structure, park_id, car_count,
                                   results, park_dict, parking_line_count, total_lines, available_lines)

            cv2.imwrite("processed/" + str(frame_counter) + ".jpg", frame)

            process = timer() - calculation_time
            print("Processing Time: " + str(process))

            cv2.imshow('Frame', frame)
            cv2.waitKey(3000)
            frame_time = timer()
            # time.sleep(process)

        # cv2.waitKey(1200)

        if frame_counter == length:
            print("Final frame " + str(frame_counter))
            break
        else:
            print("Current frame is: " + str(frame_counter))
            cv2.imshow('Frame', frame)

        #cv2.imwrite("data/park_moment" + str(park_id) + ".jpg", frame)
        # time.sleep(2)
        cv2.waitKey(frame_rate)
        frame_counter = frame_counter + 1

        key = cv2.waitKey(0)
        print(key)
        if key == ord('q'):
            break
        elif key == ord('a'):
            time.sleep(1000)

    cap.release()
    cv2.destroyAllWindows()

    park_structure = []

    return park_structure


'''Main method'''

checkpoint_path = 'model/resnet50-transfer-4.pth'
train_on_gpu = cuda.is_available()

model, optimizer = load_checkpoint(path=checkpoint_path)
print(train_on_gpu)


class SampleApp(tk.Tk):
    def __init__(self):
        tk.Tk.__init__(self)
        self._frame = None
        self.switch_frame(StartPage)
        self.title("Parkhound")
        self.geometry("600x250")
        self.iconbitmap('ico/icon.ico')
        self.configure(bg='gray')

    def switch_frame(self, frame_class):
        new_frame = frame_class(self)
        if self._frame is not None:
            self._frame.destroy()
        self._frame = new_frame
        self._frame.pack()

class StartPage(tk.Frame):
    def __init__(self, master):
        tk.Frame.__init__(self, master)
        tk.Label(self, text="Welcome to Parkhound Administration", font=('Helvetica', 18, "bold")).pack()
        tk.Button(self, text="Control Park",
                  command=lambda: master.switch_frame(PageOne)).pack()
        tk.Button(self, text="Settings",
                  command=lambda: master.switch_frame(PageTwo)).pack()

class PageOne(tk.Frame):
    def __init__(self, master):
        tk.Frame.__init__(self, master)
        tk.Frame.configure(self, bg="gray")
        tk.Label(self, text="Select Park to Control", font=('Helvetica', 18, "bold")).pack()
        tk.Button(self, text='Investigate Parking 1',
                    command=lambda: action(1, 300)).pack()
        tk.Button(self, text='Investigate Parking 2',
                    command=lambda: action(2, 200)).pack()
        tk.Button(self, text="Back to Menu",
                  command=lambda: master.switch_frame(StartPage)).pack()

class PageTwo(tk.Frame):
    def __init__(self, master):
        tk.Frame.__init__(self, master)
        tk.Frame.configure(self, bg="gray")
        tk.Label(self, text="Settings", font=('Helvetica', 18, "bold")).pack(side="top", fill="x", pady=5)
        tk.Button(self, text="Back to Menu",
                  command=lambda: master.switch_frame(StartPage)).pack()

if __name__ == "__main__":
    app = SampleApp()
    app.mainloop()