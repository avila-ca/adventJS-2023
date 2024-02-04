function findNaughtyStep(original, modified) {
    let result = '';
    let len = 0;
    let extract = false
    if(original.length > modified.length){
        len = original.length
        extract = true;
    } else{
        len = modified.length
    }
    for (let index = 0; index < len; index++) {
        
        if (original[index] !== modified[index] && !original[index]){
            result = modified[index];
            break;
        } else if (original[index] !== modified[index] && !modified[index]){
            result = original[index];
            break;
        }else if (original[index] !== modified[index] && !extract){
            result = modified[index];
            break;
        } else if (original[index] !== modified[index] && extract){
            result = original[index];
            break;
        }
    }
    return result
}
const res = findNaughtyStep('stepfor', 'stepor')

console.log(res);