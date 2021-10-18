#!/usr/bin/env python3
"""
CLI-tool or little program to get data of the web
"""
import sys
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')

def main():
    app.run(debug=True)

if __name__ == '__main__':
    main()
