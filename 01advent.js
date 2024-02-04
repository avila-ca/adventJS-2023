function findFirstRepeated(gifts) {
    let result = -1;
    let arr = [];
    gifts.map((value) => {
        console.log('en el map arriba', arr,value);
        for (let index = 0; index < arr.length; index++) {
            console.log('for ', index, '-->',arr, arr[index], value);
            if (arr[index] == value && result === -1){
                console.log('encontrado ', value);
                result = value;
                break;
            }
            
        }
        arr.push(value)
    })
    return result || gifts.sort();
}

const result = findFirstRepeated([2, 1, 3, 5, 3, 2])

console.log(result);