#!/usr/bin/env python3
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import pandas as pd
import Clustering
import Data_generator



class Grupo(Resource):
    @cross_origin()
    def get(self):
        lista = Data_generator.fake_data()
        data = [[i['price'], i['type_id']] for i in lista]
        response = Clustering.clustering(data)
        response = jsonify(response)
        return response

if __name__ == '__main__':
    main()
