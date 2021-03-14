# Informe Práctica 4. Arrays, tuplas y enumerados
## 1. Introducción

Informe de la cuarta práctica de la asignatura de **Desarrollo de Sistemas Informáticos**. En la práctica propuesta se ha realizado 8 ejercicios diversos de typescript para realizar la introdución a los diversos tipos de datos **arrays**, **tuplas** y **enumerados**.

## 2. Objetivos

El objetivo principal de la práctica es la realización de diversos ejercicios para aprender los fundamentos de Typescript y Javascript. Para conseguirlo se tienen los siguientes ejercicios:

* Ejercicio 1 Decodificador resistencias
* Ejercicio 2 Palabras encadenadas en un array
* Ejercicio 3 Calcular la media y concatenar cadenas
* Ejercicio 4 Mover los ceros al final
* Ejercicio 5 Factoría de multiplicaciones
* Ejercicio 6 Puntos bi-dimensionales
* Ejercicio 7 Puntos n-dimensionales
* Ejercicio 8 El agente

## 3. Desarrollo

### 3.1 Tareas Previas

Para el desarrollo de la práctica cómo tal primero hay que hacer unas preparaciones previas, hay que aceptar la asignación de la práctica 4 y preparar el entorno del proyecto la práctica 4, para esto es necesario crear y configurar los archivos *package.json* y *tsconfig.jon* así cómo crear la **estructura de directorios**. Además de seguir las pautas para generar la documentación por **typedoc** y los **tests unitarios** realizados **mocha** y **chai**. 

### Ejercicio 1 Decoficador resistencia.

En este ejercicio creamos la función decodeResistor que recibe una cadena string con los colores de la resistencia y retornar un number con el valor de la resistencia. 

Declaramos dos array, uno que contiene los diferentes colores que vamos a usar y otro array que contendrá sus valores númericos correspondientes.

Lo siguiente es recorrer todo el array de colores y igualar cada color con el string correspondiente del array que ha recibido la función, si son iguales se le asigna a un string vacio el valor correspondiente, esto lo hacemos para la primera y segunda posición del array pasado por paramétros y luego concatenamos los dos string conseguidos y los retornamos como si fuera de un tipo number.

[Código del ejercicio 1](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101123677/blob/master/src/ejercicio-1.ts)


### Ejercicio 2 Palabras encadenadas en un array.

En este ejercicio creamos la función meshArray que recibe un array de string con diversas palabras y retorna un string con un mensaje de error o con las partes encadenadas del array.

Declaramos una variable tipo string en donde se guardará la cadena concatenada.

Luego realizamos un bucle for que dure tantas posiciones tenga el array pasado por parametros - 1 y en donde creamos y asignamos las variables que vamos a usar, en este caso dos variables de tipo string y dos varaibles de tipo number. Continuamos con un bucle while que irá desde la última letra de la primera palabra hasta su primera letra, comprobando si coincide con la primera letra de la segunda palabra. Una vez encontrada entramos en un bucle for que va desde la posición en la que se realizo la coincidencia avanzando para ir comprobando letra por letra.

[Código del ejercicio 2](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101123677/blob/master/src/ejercicio-2.ts)

### Ejercicio 3 Calcular la media y concatenar cadenas.

En este ejercicio creamos la función meanAndConcatenate que recibe un array de string con números y letras, y retorna un array de string que contiene la media de los números dados y la concatenación de las letras.

declaramos dos string, un string contiene los números del 0 al 9 y el otro string contiene el alfabeto tanto en minusculas como en mayusculas.

Lo que haremos es realizar un bucle for que recorra todo el array dado por parametro y vaya comparando cada elemento con los string declarados con anterioridad, si se trata de un numero se va añadiendo incrementalmente a una variable tipo number y aumentando un contador, si se trata de una letra se va concatenando a un string vacio inicialmente. Cuando se termine de recorrer todo el array se procede a conseguir la media de la suma de todos los números sumados y se añaden a un array vacio, tanto la media de los números como la concatenación de las letras y se retorna.

[Código del ejercicio 3](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101123677/blob/master/src/ejercicio-3.ts)

### Ejercicio 4 Mover los ceros al final.

En este ejercicio creamos la función moveZeros que recibe un array de números y retorna un array de numeros ordenados con todos los zeros en las últimas posiciones.

Declaramos al inicio dos arrays de tipo number vacios.

Lo que haremos es un bucle que recorra todo el array pasado por parametro a la función, mientras recorremos el array realizamos un if que compara si ese elemento es un 0, si es un 0 lo introducimos con un push en uno de los array declarados anteriormente, y en caso de que no lo fuera realizamos un push con el elemento correspondiente en el otro array. Una vez recorrido el array concatenamos ambos array resultandos obteniendo de esta manera la solución deseada y la retornamos.

[Código del ejercicio 4](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101123677/blob/master/src/ejercicio-4.ts)

### Ejercicio 5 Factoría de multiplicaciones.

En este ejercicio creamos la función multiplyAll y la función multiply.

La función multiplyAll recibe como parametros un array de números y retorna una función, que en este caso es multiply.

La función multiply recibe un number y retorna un array de numbers.

Lo que haremos será crear la función multiply dentro de multiplyAll así podremos usar el vector que recibe multiply en la función multiply y multiplicar cada posición del vector por el valor que recibe multiply y retornar la solución.

[Código del ejercicio 5](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101123677/blob/master/src/ejercicio-5.ts)

### Ejercicio 6 Puntos bi-dimensionales.

En este ejercicio creamos el tipo Point que se trata de un vector de dos valores que definen las coordenadas de un punto bidimensional, además creamos las funciones pointAdd, pointDiference, pointProduct, pointDistance.

La función pointAdd recibe dos tipo Point y retorna un tipo Point con el resultado de la suma de los Point recibidos por parametros.

La función pointDiference recibe dos tipo Point y retorna un tipo Point con el resultado de la resta de los Point recibidos por parametros.

La función pointProduct recibe un tipo Point y un number y retorna un tipo Point con el resultado de la multiplicación del Point con el number recibidos por parametros.

La función pointDistance que recibe dos tipo Point y retorna un tipo number con el resultado de la distancia euclidia de los entre los dos puntos.

[Código del ejercicio 6](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101123677/blob/master/src/ejercicio-6.ts)

### Ejercicio 7 Puntos n-dimensionales.

En este ejercicio creamos el tipo Npoint que se trata de un vector de tres a infinitos valores que definen las coordenadas de un punto n-dimensional, además creamos las funciones NpointAdd, NpointDiference, NpointProduct, NpointDistance.

La función nPointAdd recibe dos tipo Npoint y retorna un tipo Npoint con el resultado de la suma de los Npoint recibidos por parametros.

La función nPointDiference recibe dos tipo Npoint y retorna un tipo Npoint con el resultado de la resta de los Npoint recibidos por parametros.

La función nPointProduct recibe un tipo Npoint y un number y retorna un tipo Npoint con el resultado de la multiplicación del Npoint con el number recibidos por parametros.

La función nPointDistance que recibe dos tipo Npoint y retorna un tipo number con el resultado de la distancia euclidia de los entre los dos puntos.

[Código del ejercicio 7](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101123677/blob/master/src/ejercicio-7.ts)

### Ejercicio 8 El agente.

En este ejercicio creamos el tipo Point que se trata de un vector de dos valores que definen las coordenadas de un punto bidimensional, además creamos la función agent, que recibe un number que indica las filas del tablero, un number que indica las columnas del tablero, y dos tipo Point que indican las posiciones iniciales y finales, y retorna un vector de string con los movimientos a realizar.

Al inicio inicializamos un tipo Point a 0, un string vacio, un number a 0 y un vector de string con los puntos cardinales.

Luego comprobamos si las posiciones inicial y final se encuentran en el tablero. Una vez comprobado restamos el punto final con el inicial y conseguimos un una posiciónes que nos indica cuantos movimientos tenemos que hacer en el eje X y en el eje Y. comprobando si el valor conseguido es negativo con un if y consiguiendo los valores absolutes podemos descubrir si hay que avanzar hacia el este, oeste, norte o sur, esto lo traducimos en un string que tenga las concatenaciones de cada coordenada repetida las veces necesarias y lo convertimos en un array de strings que retornamos.

[Código del ejercicio 8](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101123677/blob/master/src/ejercicio-8.ts)


## 4. Conclusiones

En conclusión, este tipos de ejercicios para irse iniciando en **Typescript** y si ya se tiene conocimiento en programación son bastante entretenidos, útiles y diveros, si es cierto, que hay alguno que otro que son más complicados, pero se pueden llegar a las soluciones de diversas maneras igual que en la práctica anterior, además de profundizar en la utilización de **arrays**, **tuplas** y **enumerados**. 

## 5. Bibliografía

**[Guión Práctica 4](https://ull-esit-inf-dsi-2021.github.io/prct04-arrays-tuples-enums/):** Guión de la práctica 4 de la asignatura de Desarrollo de Sistemas Informáticos.

**[JavaScript expresiones regulares](https://www.w3schools.com/js/js_string_methods.asp):** Tutorial sobre los métodos para usar expresiones regulares.

**[JavaScript strings](https://www.w3schools.com/js/js_regexp.asp):** Tutorial sobre los métodos para usar strings.

**[JavaScript array](https://www.w3schools.com/js/js_arrays.asp):** Tutorial sobre la utlización de los array

**[JavaScript array métodos](https://www.w3schools.com/js/js_array_methods.asp):** Tutorial sobre la utilización de los métodos en array.

