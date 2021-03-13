type Npoint = [number, number, number, ...number[]];

/**
 * Función que suma dos puntos n-dimensionales coordenada a coordenada
 * @param point es un tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @param point2 es un tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @returns retorna un tipo creado Npoint 
 */
export function nPointAdd(point: Npoint, point2: Npoint): Npoint {
  if (point.length != point2.length)
    throw 'Los puntos no son de la misma dimensión';
  
  for (let i = 0; i < point.length; i++) 
    point[i] = point[i] + point2[i];

  return point;
}

/**
 * Función que resta dos puntos n-dimensionales coordenada a coordenada
 * @param point es un tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @param point2 es un tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @returns retorna un tipo creado Npoint 
 */
export function nPointDiference(point: Npoint, point2: Npoint): Npoint {
  if (point.length != point2.length)
    throw 'Los puntos no son de la misma dimensión';
  
  for (let i = 0; i < point.length; i++) 
    point[i] = point[i] - point2[i];
  
  return point;
}

/**
 * Función que calcula el producto de un punto n-dimensional por un número
 * @param point es un tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @param valor es una variable tipo number que contiene el multiplicando
 * @returns retorna un tipo creado Npoint 
 */
export function nPointProduct(point: Npoint, valor: number): Npoint {

  for (let i = 0; i < point.length; i++) 
    point[i] = point[i] * valor
  
  return point;
}

/**
 * Función que calcula la distancia euclidia entre dos puntos
 * @param point es un tipo creado Point que define las coordenadas de un punto n-dimensional
 * @param point2 es un tipo creado Point que define las coordenadas de un punto n-dimensional
 * @returns retorna un tipo number con la distnacia euclidia calculada
 */
export function nPointDistance(point: Npoint, point2: Npoint): number {
  let result: number = 0;
  if (point.length != point2.length)
  throw 'Los puntos no son de la misma dimensión';

  for (let i = 0; i < point.length; i++)
    result = result + (point[i] - point2[i]) ** 2

  result = Math.sqrt(result);
  
  return result;
}

console.log(nPointAdd([2, 3, 3, 5, 8, 8], [3, 4, 4, 7, 5, 5]));
console.log(nPointDiference([2, 3, 4, 6], [3, 4, 4, 6]));
console.log(nPointProduct([2, 3, 4, 5, 7], 3));
console.log(nPointDistance([2, 3, 6], [3, 4, 5]));