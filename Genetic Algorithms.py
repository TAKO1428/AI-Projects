import random
import math

X = float(input("Ingresa la coordenada X del objetivo: "))
Y = float(input("Ingresa la coordenada Y del objetivo: "))
Z = float(input("Ingresa la coordenada Z del objetivo: "))

target = (X, Y, Z)  
gravity = 9.81     

population_size = 10000 #Configuracion de poblacion y generacion asi como la mutacion y gravedad
generations = 5000
mutation_rate = 0.1

def projectile_distance(theta, phi, V0):
    Vx = V0 * math.cos(theta) * math.cos(phi)
    Vy = V0 * math.cos(theta) * math.sin(phi)
    Vz = V0 * math.sin(theta)
    
    t_flight = (2 * Vz) / gravity #Formulas para la distancia considerando los impactos y la gravedad
    
    X_impact = Vx * t_flight
    Y_impact = Vy * t_flight
    Z_impact = 0   #Se establece en 0 pues se considera que impacta al suelo

    return (X_impact, Y_impact, Z_impact)

def fitness(individual):
    theta, phi, V0 = individual
    X_impact, Y_impact, Z_impact = projectile_distance(theta, phi, V0)
    error = math.sqrt((X_impact - target[0])**2 + (Y_impact - target[1])**2 + (Z_impact - target[2])**2)
    return -error  #Se calcula el error considerando la ekevacion, rotacion y velocidad inicial y la coordenada dada

def generate_population(): #Generamos la poblacion dada con valores aleatorios
    return [(random.uniform(0, math.pi / 2),   
             random.uniform(0, 2 * math.pi),   
             random.uniform(1, 9999))          
            for _ in range(population_size)]

def select_parents(population): #Seleccionamos ejemplares al azar para crear las generaciones apartir de individuos sacando el promedio de nuestros valores
    selected = random.sample(population, 2)
    return max(selected, key=fitness)

def crossover(parent1, parent2):
    theta = (parent1[0] + parent2[0]) / 2
    phi = (parent1[1] + parent2[1]) / 2
    V0 = (parent1[2] + parent2[2]) / 2
    return (theta, phi, V0)

def mutate(individual): #Mezcla y alteracion de variables de individuos segun sus resultados anteiriores
    theta, phi, V0 = individual
    if random.random() < mutation_rate:
        theta += random.uniform(-0.1, 0.1)  
        phi += random.uniform(-0.1, 0.1)    
        V0 += random.uniform(-1, 1)         
    return (theta, phi, V0)

def genetic_algorithm(): #A partir de la poblacion empezamos a crear las generaciones para obtener las soluciones y error
    population = generate_population()
    best_solution = None
    best_fitness = float('-inf')

    for _ in range(generations):
        population = sorted(population, key=fitness, reverse=True)

        if fitness(population[0]) > best_fitness:
            best_solution = population[0]
            best_fitness = fitness(population[0])

        next_population = [population[0]]  
        while len(next_population) < population_size:
            parent1 = select_parents(population)
            parent2 = select_parents(population)
            offspring = crossover(parent1, parent2)
            offspring = mutate(offspring)
            next_population.append(offspring)

        population = next_population

    return best_solution, -best_fitness  

best_solution, error = genetic_algorithm() #Segun  las generaciones creadas obtenemos la mejor solucion
theta, phi, V0 = best_solution  

print(f"Mejor solución encontrada:") #Impresion de resultados
print(f"  Ángulo de elevación (theta): {theta} radianes")
print(f"  Ángulo de rotación (phi): {phi} radianes")
print(f"  Velocidad inicial (V0): {V0} m/s")
print(f"Error de la mejor solución: {error}")

