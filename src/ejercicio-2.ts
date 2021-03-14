/**
 * Función que detecta si hay palabras concatenadas
 * @param array recibe un array de string con diversas palabras 
 * @returns retorna un string con un mensaje de error o con las partes encadenadas del array
 */

export function meshArray(array: string[]): string {
  let str: string = '';

  for(let i = 0; i < array.length - 1; i++) {
    const palabra: string = array[i];
    const siguiente_palabra: string = array[i + 1];
    let position: number = palabra.length -1;
    let next_position: number = 0;
    
    while (palabra[position] != siguiente_palabra[next_position]) {
      position--;
      if (position < 0) {
        return 'Error al encadenar';
      } 
    }

    for(let j: number = position; j < palabra.length; j++) {
      if(palabra[j] == siguiente_palabra[next_position]) {
        str = str + palabra[j];
        next_position++;
      }
      else {
        return 'error al encadenar';
      }
    }
  }
  return str;
}