function manufacture(gifts, materials) {
  let arr = [];
  let str = '';
  gifts.map((value) => {
      str = '';
    for (let index = 0; index < value.length; index++) {
        for (let jindex = 0; jindex < materials.length; jindex++) {
            console.log('en el 2 for', value[index], materials[jindex]);
            if (value[index] == materials[jindex]){
                str += value[index];
                console.log('guardamos str = ', str);
                break;
            }
        }
    }

    if (str === value)
        arr.push(value)
  })
  return arr;
}
const result = manufacture(['tren', 'oso', 'pelota'], 'tronesa')

console.log(result);