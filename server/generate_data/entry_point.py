#!/usr/bin/env python3
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import pandas as pd
import variables

app = Flask(__name__)
api = Api(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


class SensorApi(Resource):
    json = pd.read_json('outj2.json')
    to_json = json.to_dict()
    @cross_origin()
    def get(self):
        response=jsonify(self.to_json)
        return response

    def post(self):
        json_variables = request.get_json(force = True)
        valor_area = json_variables["area"]
        valor_presupuesto = json_variables["presupuesto"]

        return variables.presupuesto_area(valor_area, valor_presupuesto)
api.add_resource(SensorApi, '/api')

def main():
    app.run(debug=True)

if __name__ == '__main__':
    main()
