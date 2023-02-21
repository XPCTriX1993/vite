import PyPDF2

def getText(path_file):
    aa = []
    with open(path_file,'rb') as pdf_files:
        pdf_reader = PyPDF2.PdfReader(pdf_files)
        for page_num in range(len(pdf_reader.pages)):
            text = pdf_reader.pages[page_num].extract_text()
            aa.append(text)
    return aa       