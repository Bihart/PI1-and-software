#!/usr/bin/env python3
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import pandas as pd
import variables
import Data_generator
from grupo import Grupo

app = Flask(__name__)
api = Api(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


class SensorApi(Resource):
    json = Data_generator.fake_data(300)
    @cross_origin()
    def get(self):
        response  = jsonify(self.json)
        return response

    def post(self):
        form_variables = request.form
        valor_area = float(form_variables["metros_cuadrados"])
        valor_presupuesto = float(form_variables["presupuesto"])

        return variables.presupuesto_area(valor_area, valor_presupuesto)

api.add_resource(SensorApi, '/api')
api.add_resource(Grupo, '/resultado')

def main():
    app.run(debug=True)

if __name__ == '__main__':
    main()
