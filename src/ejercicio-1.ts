/**
 * funcion que calcula el valor una resistencia segun sus colores
 * @param cadena string con los colores de la resistencia 
 * @return un number con el valor de la resistencia   
 */
export function decodeResistor(cadena: string): number {
  let str1 : string = '';
  let str2 : string = '';
  let valor: number = 0;
  let array = cadena.toLocaleLowerCase().split('-');
  let number = ['0', '1', '2', '3', '4', '5', '6', '7' ,'8', '9'];
  let color = ['negro', 'marrón', 'rojo', 'naranja', 'amarilla', 'verde', 'azul', 'violeta', 'gris', 'blanco'];

  for (let i = 0; i < color.length; i++) {
    if (array[0] == color[i])
      str1 = number[i];
  }

  for (let i = 0; i < color.length; i++) {
    if (array[1] == color[i])
      str2 = number[i];
  }

  str1 = str1 + str2;
  valor = +str1;

  return valor;
}
