#!/usr/bin/env python3
from flask import request, jsonify
from flask_restful import Resource
from flask_cors import cross_origin
from Services.clustering import clustering as SClustering


class Clustering(Resource):

    @cross_origin()
    def post(self):
        data = request.get_json(force=True)
        data_split = [[sensor['price'], sensor['type_id']]
                      for sensor in data['data']] # separación de el numero que quiere el usuario y la data
        # data_split = [[sensor['price'], sensor['type_id']] for sensor in data]
        number_groups = data['n_clusters'] #  futuro responsive de los numeros de clusters

        if (number_groups <= len(data_split)):
                data_clustering = SClustering(data_split, n_clusters=number_groups)
                response = jsonify(data_clustering)
                return response, 200
        else:
            print("numero de grupos mayor al numero de datos")
            response = jsonify(data_clustering)
            return response, 500
