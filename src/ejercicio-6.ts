type Point = [number, number];

export function pointAdd(point: Point, point2: Point): Point {
  let result: Point = [0, 0];

  result[0] = point[0] + point2[0];
  result[1] = point[1] + point2[1];

  return result;
}

export function pointDiference(point: Point, point2: Point): Point {
  let result: Point = [0, 0];
  
  result[0] = point[0] - point2[0];
  result[1] = point[1] - point2[1];
  
  return result;
}

export function pointProduct(point: Point, valor: number): Point {
  let result: Point = [0, 0];

  result[0] = point[0] * valor;
  result[1] = point[1] * valor;
  
  return result;
}

export function pointDistance(point: Point, point2: Point): number {
  let result: number;
  
  result = Math.sqrt((point[0] - point2[0])**2 + (point[1] - point2[1])**2);
  
  return result;
}

console.log(pointAdd([2, 3], [3, 4]));
console.log(pointDiference([2, 3], [3, 4]));
console.log(pointProduct([2, 3], 3));
console.log(pointDistance([2, 3], [3, 4]));