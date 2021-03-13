type Point = [number, number];

/**
 * Función que suma dos puntos bidimensionales coordenada a coordenada
 * @param point es un tipo creado Point que define las coordenadas de un punto bidimensional
 * @param point2 es un tipo creado Point que define las coordenadas de un punto bidimensional
 * @returns retorna un tipo creado Point 
 */
export function pointAdd(point: Point, point2: Point): Point {
  let result: Point = [0, 0];

  result[0] = point[0] + point2[0];
  result[1] = point[1] + point2[1];

  return result;
}

/**
 * Función que resta dos puntos bidimensionales coordenada a coordenada
 * @param point es un tipo creado Point que define las coordenadas de un punto bidimensional
 * @param point2 es un tipo creado Point que define las coordenadas de un punto bidimensional
 * @returns retorna un tipo creado Point 
 */
export function pointDiference(point: Point, point2: Point): Point {
  let result: Point = [0, 0];
  
  result[0] = point[0] - point2[0];
  result[1] = point[1] - point2[1];
  
  return result;
}

/**
 * Función que calcula el producto de un punto bidimensional por un número
 * @param point es un tipo creado Point que define las coordenadas de un punto bidimensional
 * @param valor es una variable tipo number que contiene el multiplicando
 * @returns retorna un tipo creado Point 
 */
export function pointProduct(point: Point, valor: number): Point {
  let result: Point = [0, 0];

  result[0] = point[0] * valor;
  result[1] = point[1] * valor;
  
  return result;
}

/**
 * Función que calcula la distancia euclidia entre dos puntos
 * @param point es un tipo creado Point que define las coordenadas de un punto bidimensional
 * @param point2 es un tipo creado Point que define las coordenadas de un punto bidimensional
 * @returns retorna un tipo number con la distnacia euclidia calculada
 */
export function pointDistance(point: Point, point2: Point): number {
  let result: number;
  
  result = Math.sqrt((point[0] - point2[0])**2 + (point[1] - point2[1])**2);
  
  return result;
}

console.log(pointAdd([2, 3], [3, 4]));
console.log(pointDiference([2, 3], [3, 4]));
console.log(pointProduct([2, 3], 3));
console.log(pointDistance([2, 3], [3, 4]));