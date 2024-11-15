import random as rnd
import math
import csv

class red:
    def __init__(self, ncE, ncO, ncS, s="sigma", r=0.7):
        self.capaEntrada = []
        self.capaOculta = []
        self.capaSalida = []
        for i in range(ncE):
            self.capaEntrada.append(neurona(1, s, r))
        for i in range(ncO):
            self.capaOculta.append(neurona(ncE, s, r))
        for i in range(ncS):
            self.capaSalida.append(neurona(ncO, s, r))

        self.salidaEntrada = []
        self.salidaOculta = []
        self.Y = []

    def calculaSalida(self, X):
        self.salidaEntrada = []
        self.salidaOculta = []
        self.Y = []
        
        for i in range(len(self.capaEntrada)):
            self.salidaEntrada.append(self.capaEntrada[i].calculaSalida([X[i]]))

        for i in range(len(self.capaOculta)):
            self.salidaOculta.append(self.capaOculta[i].calculaSalida(self.salidaEntrada))

        for i in range(len(self.capaSalida)):
            self.Y.append(self.capaSalida[i].calculaSalida(self.salidaOculta))
        return self.Y

    def entrena(self, X, T):
        self.calculaSalida(X)

        deltaSalida = []
        for i in range(len(self.Y)):
            deltaSalida.append((T[i] - self.Y[i]) * self.Y[i] * (1 - self.Y[i]))

        deltaWS = []
        for x in self.salidaOculta:
            fila = []
            for j in range(len(self.capaSalida)):
                fila.append(self.capaSalida[j].r * deltaSalida[j] * x)
            deltaWS.append(fila)

        deltaOculta = []
        for i in range(len(self.capaOculta)):
            suma = 0
            for j in range(len(self.capaSalida)):
                suma += deltaSalida[j] * self.capaSalida[j].w[i]
            deltaOculta.append(self.capaOculta[i].y * (1 - self.capaOculta[i].y) * suma)

        deltaWO = []
        for x in self.salidaEntrada:
            fila = []
            for i in range(len(self.capaOculta)):
                fila.append(self.capaOculta[i].r * deltaOculta[i] * x)
            deltaWO.append(fila)

        deltaEntrada = []
        for k in range(len(self.capaEntrada)):
            suma = 0
            for i in range(len(self.capaOculta)):
                suma += deltaOculta[i] * self.capaOculta[i].w[k]
            deltaEntrada.append(self.capaEntrada[k].y * (1 - self.capaEntrada[k].y) * suma)

        deltaWE = []
        for k in range(len(self.capaEntrada)):
            deltaWE.append(self.capaEntrada[k].r * deltaEntrada[k] * X[k])

        for j in range(len(self.capaSalida)):
            for i in range(len(self.capaOculta)):
                self.capaSalida[j].w[i] += deltaWS[i][j]

        for i in range(len(self.capaOculta)):
            for k in range(len(self.capaEntrada)):
                self.capaOculta[i].w[k] += deltaWO[k][i]

        for k in range(len(self.capaEntrada)):
            self.capaEntrada[k].w[0] += deltaWE[k]

        # Ajuste Sesgo
        for j in range(len(self.capaSalida)):
            self.capaSalida[j].theta += self.capaSalida[j].r * deltaSalida[j]

        for i in range(len(self.capaOculta)):
            self.capaOculta[i].theta += self.capaOculta[i].r * deltaOculta[i]

        for k in range(len(self.capaEntrada)):
            self.capaEntrada[k].theta += self.capaEntrada[k].r * deltaEntrada[k]


class neurona:
    def __init__(self, nI, s="sigma", r=0.7):
        self.r = r
        self.nI = nI
        self.w = []
        for i in range(nI):
            self.w.append(rnd.random())
        self.x = [0] * nI
        self.theta = rnd.random()
        self.s = s
        self.y = 0

    def fA(self, x):
        if self.s == "escalon":
            return 1 if x > 0 else 0
        if self.s == "rampa":
            return 0 if x < 0 else 1 if x > 1 else x
        if self.s == "sigma":
            return 1 / (1 + math.exp(-x))

    def calculaSalida(self, X):
        self.x = X
        suma = sum(self.w[i] * self.x[i] for i in range(self.nI)) + self.theta
        self.y = self.fA(suma)
        return self.y

    def entrena(self, X, t):
        self.calculaSalida(X)
        deltaSalida = (t - self.y) * self.y * (1 - self.y)
        deltaW = [self.r * deltaSalida * x for x in X]
        for i in range(len(self.w)):
            self.w[i] += deltaW[i]
        self.theta += self.r * deltaSalida


entradas = []
salidas = []
canciones = []

with open('songs.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        colaboracion = 1 if row['collaboration'] == 'Yes' else 0
        contenido_explicito = 1 if row['explicit_content'] == 'Yes' else 0
        idioma_ingles = 1 if row['language'] == 'English' else 0
        genero_pop = 1 if row['genre'] == 'Pop' else 0
        streams = float(row['stream'])
        
        max_streams = 100000000
        streams_normalizado = streams / max_streams
        
        entradas.append([colaboracion, contenido_explicito, idioma_ingles, genero_pop, streams_normalizado])
        
        popularidad = 1 if streams > 50000000 else 0
        salidas.append(popularidad)

        canciones.append({
            'song_title': row['song_title'],
            'artist': row['artist'],
            'streams': streams
        })

red_neuronal = red(ncE=5, ncO=4, ncS=1)

for i in range(1000):
    for j in range(len(entradas)):
        red_neuronal.entrena(entradas[j], [salidas[j]])

predicciones = []

for i in range(len(entradas)):
    salida_predicha = red_neuronal.calculaSalida(entradas[i])
    predicciones.append({
        'song_title': canciones[i]['song_title'],
        'artist': canciones[i]['artist'],
        'streams': canciones[i]['streams'],
        'popularidad_predicha': salida_predicha[0]
    })

predicciones_ordenadas = sorted(predicciones, key=lambda x: x['popularidad_predicha'], reverse=True)

top_5_mas_populares = predicciones_ordenadas[:5]
top_5_menos_populares = predicciones_ordenadas[-5:]

print("Top 5 canciones más populares según la red neuronal:")
for i, cancion in enumerate(top_5_mas_populares, 1):
    print(f"{i}. {cancion['song_title']} - {cancion['artist']} (Streams: {cancion['streams']}, Popularidad predicha: {cancion['popularidad_predicha']:.3f})")

print("\nTop 5 canciones menos populares según la red neuronal:")
for i, cancion in enumerate(top_5_menos_populares, 1):
    print(f"{i}. {cancion['song_title']} - {cancion['artist']} (Streams: {cancion['streams']}, Popularidad predicha: {cancion['popularidad_predicha']:.3f})")
