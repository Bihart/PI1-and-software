#!/usr/bin/env python3
# ~*~ coding: utf-8 ~*~
import numpy as np
from faker import Faker


def data_generator(number_of_sensors: int):
    """
    Generate fake data for the app

    :param: n : int -> Inticate the number o sensors to generate

    return -> List[Sensors]
    """
    fake = Faker()
    sensor_type_and_sensor_id = {
        'SOIL': 1,
        'TEMPERATURE': 2,
        'HUMIDITY': 3,
        'UV RADIATION/LUMINOSITY': 4,
        'LDR': 5,
        'AIR/MOVEMENT': 6
    }
    sensors = []

    for n_item in range(number_of_sensors):
        id_ = n_item
        name = fake.bothify(text='????-########')
        company = fake.company()
        type_ = np.random.choice([*sensor_type_and_sensor_id.keys()])
        price = round(500*np.random.random_sample()+0, 2)
        type_id = sensor_type_and_sensor_id.get(type_, -1)

        sensors.append({
            'ID': id_,
            'name': name,
            'company': company,
            'type': type_,
            'price': price,
            'type_id': type_id
        })

    return sensors
