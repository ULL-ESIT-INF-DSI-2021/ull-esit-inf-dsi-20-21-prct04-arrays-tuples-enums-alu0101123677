export function multiplyAll(array: number[]): Function {
  let array1: number[] = []

  function multiply(valor: number): number[] { 
    for (let i = 0; i < array.length; i++)
      array1.push(array[i] * valor);
    return array1; 
  }

  return multiply
}


multiplyAll([2, 6, 8])(3);