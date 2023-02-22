import io
import os
from pdf2image import convert_from_path
from google.cloud import vision
from google.oauth2 import service_account
from PIL import Image
from io import BytesIO

def ocrgoogle(path_file):
    pages = convert_from_path(path_file, 100, poppler_path=r'C:\poppler-0.68.0_x86\poppler-0.68.0\bin') # 500 is the DPI resolution
    credentials = service_account.Credentials.from_service_account_file('tokuda.json')
    client = vision.ImageAnnotatorClient(credentials=credentials)
    finaltext = []
    for page in range(len(pages)):
        byte_stream = BytesIO()
        pages[page].save(byte_stream, format='JPEG')
        byte_stream.seek(0)
        image_bytes = byte_stream.read()


        # Perform OCR on the image
        image = vision.Image(content=image_bytes)
        response = client.text_detection(image=image)
        text = response.text_annotations[0].description
        finaltext.append(text)
        # Print the recognized text
    return finaltext  

ocrgoogle('aa.pdf')