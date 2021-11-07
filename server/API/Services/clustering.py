#!/usr/bin/env python3
from sklearn.cluster import KMeans
import numpy as np


def clustering(data, n_clusters):
    k_means = KMeans(
        init='random',
        n_clusters=n_clusters,
        n_init=30,
        random_state=42)

    colores = k_means.fit_predict(data)

    x = [i[0] for i in data]
    y = [i[1] for i in data]

    tags = np.ndarray.tolist(colores)
    parejas = [{'x': i,
                'y': j,
                'tag': k}
               for i, j, k in zip(x, y, tags)]
    return parejas
