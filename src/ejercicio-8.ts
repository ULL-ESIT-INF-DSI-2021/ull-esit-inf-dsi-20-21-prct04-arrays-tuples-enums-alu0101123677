type Point = [number, number];

/**
 * Función que calcula los movimientos que se tienen que hacer desde la posición inicial a la final
 * @param X Variable tipo number que guarda el número de filas del tablero
 * @param Y Varaible tipo number que guarda el número de columnas del tablero
 * @param initialPoint Variable creada tipo Point que guarda las coordenadas de la posición inicial
 * @param endPoint Variable creada tipo Point que guarda las coordenadas de la posición final
 * @returns retorna un array de string con los movimientos necesarios
 */
export function agent(X: number, Y: number, initialPoint: Point, endPoint: Point ): string[] {
  let result: Point = [0, 0];
  let str: string = '';
  let cardinales: string[] = ['North', 'South', 'East', 'West'];
  let valor: number = 0;

  if (initialPoint[0] > X || initialPoint[1] > Y || initialPoint[0] < 0 || initialPoint[1] < 0 )
    throw 'El punto inicial no están en el tablero';

  if (endPoint[0] > X || endPoint[1] > Y || endPoint[0] < 0 || endPoint[1] < 0 )
    throw 'El punto final no están en el tablero';

  for (let i = 0; i < result.length; i++)
    result[i] = endPoint[i] - initialPoint[i];
  
  if (result[0] < 0) {
    valor = Math.abs(result[0]);
    for (let i = 0; i < valor; i++)
      str = str + cardinales[3] + ',';
  }
  else {
    valor = result[0];
    for (let i = 0; i < valor; i++)
      str = str + cardinales[2] + ',';
  }

  if (result[1] < 0) {
    valor = Math.abs(result[1]);
    for (let i = 0; i < valor; i++)
      str = str + cardinales[1] + ',';
  }
  else {
    valor = result[1];
    for (let i = 0; i < valor; i++)
      str = str + cardinales[0] + ',';
  }
  
  let move: string[] = str.split(',');
  move.pop();
  return move;
}


let initialPoint: Point = [2, 2];
let endPoint: Point = [5, 3];
console.log(agent(30, 50, initialPoint, endPoint));