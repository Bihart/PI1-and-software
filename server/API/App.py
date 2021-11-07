#!/usr/bin/env python3
from flask import Flask
from flask_restful import Api
from Controllers.data_generator import SensorGenerator as CSensorGenerator
from Controllers.optimizator import Optimizator as COptimizator
from Controllers.clustering import Clustering as CClustering

def main():
    """Entrypoint of the program"""
    app = Flask(__name__)
    api = Api(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    api.add_resource(CSensorGenerator, '/api')
    api.add_resource(COptimizator, '/api')
    api.add_resource(CClustering, '/grupos')
    app.run(debug=True)


if __name__ == '__main__':
    main()
