#!/usr/bin/env python3
from flask import request, jsonify
from flask_restful import Resource
from Services.clustering import clustering as SClustering


class Clustering(Resource):
    def post(self):
        data = request.get_json(force=True)
        data_split = [[x['price'], x['type_id']] for x in data]
        data_clustering = SClustering(data_split, n_clusters=3)
        response = jsonify(data_clustering)
        return response
