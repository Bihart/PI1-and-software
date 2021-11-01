#!/usr/bin/env python3

from sklearn.cluster import KMeans
import pandas as pd
import numpy as np
import Data_generator



def clustering(data):
    k_means = KMeans(
        init='random', n_clusters=3, n_init=30, random_state=42)
    colores=k_means.fit_predict(data)
    #print(k_means.cluster_centers_) ##centro de los clusters
    # print(k_means.inertia_) ##error cuadratico medio
    # print(k_means.n_iter_)##numero de iteraciones
    # print(len(k_means.labels_))
    # print([*zip(k_means.labels_, lista)])
    x = [i[0] for i in data]
    y = [i[1] for i in data]
    # paint.figure(figsize=(12, 12))
    # print(x,y)

    # paint.scatter(x, y, c=colores)
    # paint.title("grafica prueba")
    # paint.show()
    return np.ndarray.tolist(colores)



if __name__ == '__main__':
    main()
