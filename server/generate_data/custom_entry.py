#!/usr/bin/env python3
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
import Clustering


class CustomData(Resource):
    def post(self):
        data = request.get_json(force = True)
        data_split = [[x['price'], x['type_id']] for x in data]
        data_clustering = Clustering.clustering(data_split)
        response = jsonify(data_clustering)
        return response
