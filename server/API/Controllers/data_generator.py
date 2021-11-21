#!/usr/bin/env python3
from flask import jsonify, request
from flask_restful import Resource
from flask_cors import cross_origin
from Services.data_generator import data_generator as SDataGenerator


class SensorGenerator(Resource):  # pylint: disable=too-few-public-methods
    "Principal entry point to generate data"
    n_data = int
    response = None

    @cross_origin()
    def get(self):
        """GET for SensorGenerator"""
        n_data = request.args.get('n_data', default=-1, type=int)

        if n_data < 0 or n_data > 10000:
            message = """
            <h1>Type a value of data valid</h1>
            <p>Use n_data parameter whit a value between 0 and 10000</p>
            """
            return message, 400

        data_to_send = SDataGenerator(n_data)
        response = jsonify(data_to_send)
        return response
