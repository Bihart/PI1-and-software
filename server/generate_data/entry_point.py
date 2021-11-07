#!/usr/bin/env python3
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import variables
import Data_generator
from grupo import Grupo
from custom_entry import CustomData


app = Flask(__name__)
api = Api(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


class SensorApi(Resource):
    "Princil entry point to generate data"
    @cross_origin()
    def get(self):
        n_data = request.args.get('n_data', default=-1, type=int)

        if n_data < 0:
            message = """
            <h1>Type a value of data valid</h1>
            <p>Use n_data parameter whit a value between 0 and 10000</p>
            """
            return message, 400

        json = Data_generator.fake_data(n_data)
        response = jsonify(json)
        return response

    def post(self):
        form_variables = request.form
        valor_area = float(form_variables["metros_cuadrados"])
        valor_presupuesto = float(form_variables["presupuesto"])

        return variables.presupuesto_area(valor_area, valor_presupuesto)


api.add_resource(SensorApi, '/api')
api.add_resource(Grupo, '/resultado')
api.add_resource(CustomData, '/user_request')


def main():
    "Entrypoint of the program"
    app.run(debug=True)


if __name__ == '__main__':
    main()
