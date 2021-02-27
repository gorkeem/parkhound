import cv2
import os
import numpy as np

# dsize
dsize = (256, 256)
from1 = "C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\pklot_dataset\\cnn_dataset\\train\\Empty"
from2 = "C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\pklot_dataset\\cnn_dataset\\train\\Occupied"

'''
os.mkdir("C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\dataset\\train")
os.mkdir("C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\dataset\\validate")
os.mkdir("C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\dataset\\test")
'''
os.mkdir("C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\dataset\\train\\Occupied")
os.mkdir("C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\dataset\\validate\\Occupied")
os.mkdir("C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\dataset\\test\\Occupied")

where1 = "C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\dataset\\train\\Occupied"
where2 = "C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\dataset\\validate\\Occupied"
where3 = "C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\dataset\\test\\Occupied"


os.chdir("C:\\Users\\AEGEAN\\Desktop\\Projects\\real-time-parking-occupancy-detection-master\\pklot_dataset\\cnn_dataset\\train\\Occupied")
elements = os.listdir()


train = int(len(elements)*0.6)
validate = ((len(elements) - train)/2) + train


for i in range(len(elements)):
    src = cv2.imread(elements[i], cv2.IMREAD_UNCHANGED)
    if i < train:
        cv2.imwrite(where1 + "\\" + elements[i], src) 
    elif i < validate:
        cv2.imwrite(where2 + "\\" + elements[i], src)   
    else:
        cv2.imwrite(where3 + "\\" + elements[i], src)
            
