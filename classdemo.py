import json
import urllib
import urllib
from flask import Response
from flask import jsonify

from flask import Flask, request

app = Flask(__name__, static_url_path='')

@app.route('/hello')
def helloWorld():
    return "<p>Hello!</p>", 204
    
@app.route('/')
def root():
    return app.send_static_file('bootstrap.html')
    
@app.route('/index.html')
def index():
    return app.send_static_file('bootstrap.html')

@app.route('/request', methods = ['GET', 'POST','PUT', 'DELETE'])
def req():
    if request.method == 'GET':
        return {'requestType': 'GET', 'message': 'This is a GET request<br />Used to request data from the server<br /><br />This message was received from the server to the client browser'}

    elif request.method == 'POST':
        print('Data Received: ', request.get_json())
        return {'requestType': 'POST', 'message': request.get_json().get('message')}

    elif request.method == 'PUT':
        print('Data Received: ', request.get_json())
        return {'requestType': 'PUT', 'message': request.get_json().get('message')}

    elif request.method == 'DELETE':
        return {'requestType': 'DELETE', 'message': 'This is a DELETE request<br />Used to Delete the specified resource<br /><br />Press the dark Delete button to delete this message'}

@app.errorhandler(404)
def not_found(error=None):
    return {'status': 404, 'message': 'Not Found: ' + request.url}, 404

if __name__ == '__main__':
    app.run(debug = True)