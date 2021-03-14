/**
 * Función que detecta si hay palabras concatenadas
 * @param array recibe un array de string con diversas palabras 
 * @returns retorna un string vacio o con las partes encadenadas del array
 */

export function meshArray(array: string[]): string {
  let str: string = '';

  for(let i = 0; i < array.length - 1; i++) {
    const char: string = array[i];
    const next_char: string = array[i + 1];
    let position: number = char.length -1;
    let next_position: number = 0;
    
    while (char[position] != next_char[next_position]) {
      position--;
      if (position < 0) {
        return 'Error al encadenar';
      } 
    }

    for(let j: number = position; j < char.length; j++) {
      if(char[j] == next_char[next_position]) {
        str = str + char[j];
        next_position++;
      }
      else {
        return 'error al encadenar';
      }
    }
  }
  return str;
}