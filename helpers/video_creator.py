# -*- coding: utf-8 -*-
"""
Created on Mon Dec 14 16:31:47 2020

@author: AEGEAN
"""

import cv2
import os

def create_video_from_images(image_folder, video_name):
    os.chdir("C:\\Users\\AEGEAN\\Desktop\\Projects\\parking_lot_detection_deep_learning")
    images = [img for img in os.listdir(image_folder) if img.endswith(".jpg")]
    frame = cv2.imread(os.path.join(image_folder, images[0]))
    height, width, layers = frame.shape
    
    video = cv2.VideoWriter(video_name, 0, 1, (width,height))
    
    for image in images:
        video.write(cv2.imread(os.path.join(image_folder, image)))
    
    cv2.destroyAllWindows()
    video.release()


def convert_avi_to_mp4(avi_file_path, output_name):
    os.popen("ffmpeg -i '{input}' -ac 2 -b:v 2000k -c:a aac -c:v libx264 -b:a 160k -vprofile high -bf 0 -strict experimental -f mp4 '{output}.mp4'".format(input = avi_file_path, output = output_name))
    return True



##Main
image_folder = 'video_data'
video_name = 'video.avi'
