from sklearn.cluster import KMeans
import pandas as pd
import numpy as np
from faker import Faker

def fake_data():
    fake = Faker()
    tipos=[
        'SOIL','TEMPERATURE','HUMIDITY','UV RADIATION/LUMINOSITY',
        'LDR', 'AIR/MOVEMENT'
          ]
    data = [
        [
        fake.bothify(text='????-########'),
        fake.company(),
        np.random.choice(tipos),
        round(500*np.random.random_sample()+0, 2)
        
        ]
        for x in range(200)]
    

    make_sensors = pd.DataFrame(
        data, columns=["sensor_name", "company", "sensor_type", "sensor_price"]
                                )
    make_sensors.to_json(
        "/mnt/c/Users/noinn/OneDrive/Escritorio/outj.json",
        )

    print(make_sensors)

def main():
    fake_data()
    a = pd.read_json(
        "/mnt/c/Users/noinn/OneDrive/Escritorio/outj.json"
        )
    print(a)
    #arr=[(x,y) for ]
    lista = []

    ##centroides = [[1, 1], [-1, -1], [1, -1]]
    for x in range(len(a)):
        sensor_type=a.iat[x, 2]
        sensor_price=a.iat[x, 3]
        ##se guarda en la lista asociando el valor a un parametro
        if sensor_type == 'SOIL':
            lista.append(1) ##precio del sensor, falta normalizarlo
        elif sensor_type =='TEMPERATURE':
            lista.append(2) ##precio del sensor, falta normalizarlo
        elif sensor_type == 'HUMIDITY':
            lista.append(3)
        elif sensor_type == 'UV RADIATION/LUMINOSITY':
            lista.append(4)
        elif sensor_type == 'LDR':
            lista.append(5)
        elif sensor_type == 'AIR/MOVEMENT':
            lista.append(6)
        else:
            lista.append([0, sensor_price])

    a["sensor_ID"] = lista

    lista_clost = [(a,b) for a,b in zip(a["sensor_price"],a["sensor_ID"])]

    a.to_json("/mnt/c/Users/noinn/OneDrive/Escritorio/outj2.json",
        orient="index")

    k_means = KMeans(
        init='random', n_clusters=3, n_init=30, random_state=42 )

    colores=k_means.fit_predict(lista_clost)
    #print(k_means.cluster_centers_) ##centro de los clusters
    #print(k_means.inertia_) ##error cuadratico medio
    #print(k_means.n_iter_)##numero de iteraciones
    #print(len(k_means.labels_))
    #print([*zip(k_means.labels_, lista)])
    #print(help(k_means))
    x = [ i[0] for i in lista_clost]
    y = [ i[1] for i in lista_clost]
    #paint.figure(figsize=(12, 12))
    print(x,y)

    paint.scatter(x, y, c=colores)
    paint.title("grafica prueba")
    paint.show()
    
if __name__ == '__main__':
    main()



