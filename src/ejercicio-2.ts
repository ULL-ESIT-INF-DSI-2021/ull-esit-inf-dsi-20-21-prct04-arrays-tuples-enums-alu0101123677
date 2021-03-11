function meshArray(array: string[]): string {
  let str = '';

  for(let i = 0; i < array.length - 1; i++) {
    for (let val1 of array[i]){
      for (let val2 of array[i + 1]) {
        if (val1.search(val2) != -1) {
          str = str + val2;
        }
      }
    }
  }

  console.log(str);

  return '';
}

meshArray(['allow', 'lowering', 'ringmaster', 'terror']);