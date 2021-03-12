export function meshArray(array: string[]): string {
  let str = '';
  let str2 = '';
  
  for(let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array[i].length; j++) {
      str = array[i].slice(j, array[i].length);
      if (array[i + 1].search(str) != -1) {
        str2 = str2 + str;
        break
      }
    }
  }

  console.log(str2)

  return '';
}

meshArray(['allow', 'lowering', 'ringmaster', 'terror']);