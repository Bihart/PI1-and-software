#!/usr/bin/env python3
from flask import Flask
from flask_restful import Resource, Api
from . Controllers . data_generator import SensorGenerator as CSensorGenerator


def main():
    """Entrypoint of the program"""
    app = Flask(__name__)
    api = Api(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    api.add_resource(CSensorGenerator, '/api')
    app.run(debug=True)


if __name__ == '__main__':
    main()
