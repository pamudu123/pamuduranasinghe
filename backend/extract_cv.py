import PyPDF2
import json
import os

pdf_path = os.path.join(os.path.dirname(__file__), '../CV_PamuduRanasinghe.pdf')

if not os.path.exists(pdf_path):
    print(json.dumps({"error": "PDF not found"}))
    exit(1)

try:
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
    with open('cv_data.json', 'w', encoding='utf-8') as json_file:
        json.dump({"text": text}, json_file, indent=2)
    print("CV data saved to cv_data.json")
except Exception as e:
    print(json.dumps({"error": str(e)}))
