#!/usr/bin/env python3


def presupuesto_by_area(area: float, presupuesto: float) -> str:
    sub_area = area / 0.3
    sub_presupuesto = presupuesto / sub_area
    return f"su presupuesto por area es {sub_presupuesto}"
