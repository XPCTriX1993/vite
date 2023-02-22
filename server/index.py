from flask import Flask,request,jsonify
from flask_cors import CORS
from googleocr import ocrgoogle


app = Flask(__name__)
CORS(app)


@app.route('/hello',methods=['POST'])
def hello():
    file = request.files['file']
    file.save(file.filename)
        
    return jsonify({'message':f'{ocrgoogle(file.filename)}'})



if __name__ == '__main__':
    app.run(debug=True)
