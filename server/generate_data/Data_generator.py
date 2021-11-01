#!/usr/bin/env python3
import pandas as pd
import numpy as np
from faker import Faker


def fake_data():
    """
    Generate fake data for the app
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
    sensors = [
        {
            'ID': x,
            'name': fake.bothify(text='????-########'),
            'company': fake.company(),
            'type': np.random.choice([*sensor_type_and_sensor_id.keys()]),
            'price': round(500*np.random.random_sample()+0, 2)
        }
        for x in range(200)]

    for sensor in sensors:
        sensor_type = sensor['type']
        sensor['type_id'] = sensor_type_and_sensor_id.get(sensor_type, -1)
    return sensors


def main():
    """ Entrypoint of the program """
    my_data = fake_data()
    df_sensor = pd.DataFrame(my_data)
    df_sensor.to_json("./out2.json", orient="records")


if __name__ == '__main__':
    main()
