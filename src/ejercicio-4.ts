/**
 * Función que mueve los ceros de un array al final del vector
 * @param array es un array de números
 * @returns retorna un array de números ordenado con la solución pedida
 */
export function moveZeros(array: number[]): number[] {
 let array1: number[] = [];
 let array2: number[] = [];

 for (let i = 0; i < array.length; i++) {
   if (array[i] != 0) {
    array1.push(array[i])    
   }
   else {
    array2.push(array[i])
   }    
 }

 let result = array1.concat(array2);

 return result;    
}