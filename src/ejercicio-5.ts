/**
 * Función que recibe un array de números y llama a la función multiply para multiplicar ese array
 * por un valor entero
 * @param array es un array de números
 * @returns retorna una función en este caso multiply
 */
export function multiplyAll(array: number[]): Function {
  let array1: number[] = []
  
  /**
   * Función que multiplica cada elemento de un array por un atributo de tipo number
   * @param valor es una variable tipo number con el número que sirve de multiplicando.
   * @returns retorna un array de numeros con los valores multiplicados
   */
  function multiply(valor: number): number[] { 
    for (let i = 0; i < array.length; i++)
      array1.push(array[i] * valor);
    return array1; 
  }

  return multiply
}


multiplyAll([2, 6, 8])(3);