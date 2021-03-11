/**
 * funcion que calcula el valor una resistencia segun sus colores
 * @param cadena consiste en los nombres de los colores de la resistencia 
 * @return un number con el valor de la resistencia   
 */
export function decodeResistor(cadena: string): number {
  let str1 : string = '';
  let str2 : string = '';
  let valor: number = 0;
  let array = cadena.toLocaleLowerCase().split('-');

  switch (array[0]) {
    case 'negro': {
      str1 = '0';
      break;
    }
    case 'marrón': {
      str1 = '1';
      break;
    }
    case 'rojo': {
      str1 = '2';
      break;
    }
    case 'naranja': {
      str1 = '3';
      break;
    }
    case 'amarillo': {
      str1 = '4';
      break;
    }
    case 'verde': {
      str1 = '5';
      break;
    }
    case 'azul': {
      str1 = '6';
      break;
    }
    case 'violeta': {
      str1 = '7';
      break;
    }
    case 'gris': {
      str1 = '8';
      break;
    }
    case 'blanco': {
      str1 = '9';
      break;
    }
  }

  switch (array[1]) {
    case 'negro': {
      str2 = '0';
      break;
    }
    case 'marrón': {
      str2 = '1';
      break;
    }
    case 'rojo': {
      str2 = '2';
      break;
    }
    case 'naranja': {
      str2= '3';
      break;
    }
    case 'amarillo': {
      str2 = '4';
      break;
    }
    case 'verde': {
      str2 = '5';
      break;
    }
    case 'azul': {
      str2 = '6';
      break;
    }
    case 'violeta': {
      str2 = '7';
      break;
    }
    case 'gris': {
      str2 = '8';
      break;
    }
    case 'blanco': {
      str2 = '9';
      break;
    }
  }

  str1 = str1 + str2;
  valor = +str1;

  return valor;
}

