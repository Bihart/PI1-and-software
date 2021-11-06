#!/usr/bin/env python3
# ~*~ coding: utf-8 ~*~
import numpy as np
from faker import Faker
from ..Models.sensors import Sensor, sensor_type_and_sensor_id


def data_generator(number_of_sensors: int):
    """
    Generate fake data for the app

    :param: n : int -> Inticate the number o sensors to generate

    return -> List[Sensors]
    """
    sensor_t_a_i = sensor_type_and_sensor_id()
    fake = Faker()

    sensors = [
        Sensor(
            x,
            fake.bothify(text='????-########'),
            fake.company(),
            np.random.choice([*sensor_t_a_i.keys()]),
            round(500*np.random.random_sample()+0, 2)
        )
        for x in range(number_of_sensors)]

    return sensors
