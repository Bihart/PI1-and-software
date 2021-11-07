#!/usr/bin/env python3
from flask import request
from flask_restful import Resource
from Services.optimizator import presupuesto_by_area as SOptimizator


class Optimizator(Resource):
    def post(self):
        form_variables = request.form
        valor_area = float(form_variables["metros_cuadrados"])
        valor_presupuesto = float(form_variables["presupuesto"])

        return SOptimizator(valor_area, valor_presupuesto), 201
