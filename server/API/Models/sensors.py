#!/usr/bin/env python3

def sensor_type_and_sensor_id():
    return {
        'SOIL': 1,
        'TEMPERATURE': 2,
        'HUMIDITY': 3,
        'UV RADIATION/LUMINOSITY': 4,
        'LDR': 5,
        'AIR/MOVEMENT': 6
    }


class Sensor():  # pylint: disable=too-few-public-methods
    """DTO (Data Transfer Object) Sensor"""

    def __init__(self,
                 ID: int,
                 name: str,
                 company: str,
                 type_: str,
                 price: float):  # pylint: disable=too-many-arguments
        self.id_ = ID
        self.name = name
        self.company = company
        self.type_ = type_
        self.price = price
        self.create_type_id()

    def create_type_id(self):
        self.type_id = sensor_type_and_sensor_id().get(self.type_, -1)
