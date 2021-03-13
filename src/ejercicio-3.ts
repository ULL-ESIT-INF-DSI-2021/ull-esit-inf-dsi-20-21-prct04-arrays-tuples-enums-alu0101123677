/**
 * Función que hace la media entre los números del vector y concatena todas las letras
 * @param array es un array de string rellenado con números y letras
 * @returns retorna un vector de string con la solución
 */
export function meanAndConcatenate(array: string[]): string[] {
  let str: string = '0123456789'
  let str2 : string = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
  let number: number = 0;
  let aux: string = '';
  let array2 = ['', ''];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (str.search(array[i]) != -1) {
      number = number + +array[i];
      count++;
    }  
    if (str2.search(array[i]) != -1)
      aux = aux + array[i];
  }
  
  number = number / count;
  
  array2[0] = String(number);
  array2[1] = aux;

  console.log(array2);

  return array2;
}
  
meanAndConcatenate(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']);