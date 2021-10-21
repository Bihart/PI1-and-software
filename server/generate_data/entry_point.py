#!/usr/bin/env python3
from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import pandas as pd


app = Flask(__name__)
api = Api(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


class HelloWorld(Resource):
    json = pd.read_json('outj2.json')
    to_json = json.to_dict()
    @cross_origin()
    def get(self):
        response=jsonify(self.to_json)
        #return {'hello': 'world'}
        #response.headers.add('Access-Control-Allow-Origin', '*')
        return response

api.add_resource(HelloWorld, '/api')

def main():
    app.run(debug=True)

if __name__ == '__main__':
    main()
