# from sklearn.cluster import KMeans
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


def save_and_draw_data(data):
    """
    DEPRECATE
    but this function, create clusters of the sensors and
    graphic whit dots
    """
    make_sensors = \
        pd.DataFrame(
            data,
            columns=["sensor_name", "company", "sensor_type", "sensor_price"]
        )
    make_sensors.to_json(
        "/mnt/c/Users/noinn/OneDrive/Escritorio/outj.json",
    )
    a = pd.read_json(
        "/mnt/c/Users/noinn/OneDrive/Escritorio/outj.json"
    )
    print(a)

    a.to_json("/mnt/c/Users/noinn/OneDrive/Escritorio/outj2.json",
              orient="index")
    # k_means = KMeans(
    #     init='random', n_clusters=3, n_init=30, random_state=42 )
    # colores=k_means.fit_predict(lista_clost)
    # print(k_means.cluster_centers_) ##centro de los clusters
    # print(k_means.inertia_) ##error cuadratico medio
    # print(k_means.n_iter_)##numero de iteraciones
    # print(len(k_means.labels_))
    # print([*zip(k_means.labels_, lista)])
    # print(help(k_means))
    # x = [i[0] for i in lista_clost]
    # y = [i[1] for i in lista_clost]
    # paint.figure(figsize=(12, 12))
    # print(x,y)

    # paint.scatter(x, y, c=colores)
    # paint.title("grafica prueba")
    # paint.show()
    pass


def main():
    """ Entrypoint of the program """
    my_data = fake_data()
    df_sensor = pd.DataFrame(my_data)
    df_sensor.to_json("./out2.json", orient="records")


if __name__ == '__main__':
    main()
