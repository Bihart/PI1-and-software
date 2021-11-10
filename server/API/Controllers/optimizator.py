#!/usr/bin/env python3
from flask import request
from flask_restful import Resource
from Services.optimizator import presupuesto_by_area as SOptimizator


class Optimizator(Resource):
    def get(self):
        valor_area = request.args.get('metros_cuadrados', default=-1, type=int)
        valor_presupuesto = request.args.get('presupuesto', default=-1, type=int)

        return SOptimizator(valor_area, valor_presupuesto), 200
