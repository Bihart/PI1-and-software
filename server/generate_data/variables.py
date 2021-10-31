#!/usr/bin/env python3

def presupuesto_area(area, presupuesto):

    sub_area = area / 900
    sub_presupuesto = presupuesto / sub_area
    return f"su presupuesto por area es {sub_presupuesto}"
