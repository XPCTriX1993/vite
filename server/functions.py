import PyPDF2
import pytesseract
from pdf2image import convert_from_path

def getText(path_file):
    aa = []
    with open(path_file,'rb') as pdf_files:
        pdf_reader = PyPDF2.PdfReader(pdf_files)
        for page_num in range(len(pdf_reader.pages)):
            text = pdf_reader.pages[page_num].extract_text()
            aa.append(text)
    return aa       


def ocrPy():
    pages = convert_from_path('aa.pdf', 200, poppler_path=r'C:\poppler-0.68.0_x86\poppler-0.68.0\bin')
    text = ''
    for page in pages:
        text += pytesseract.image_to_string(page)
        print(text)
ocrPy()