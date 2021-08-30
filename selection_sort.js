const array = [5,78,92,456,14,74,15,89,0,-3,-48,54,-655,67,0,26,83,-490,0]
let count = 0;




let selectedSort = (array) => {
  let len = array.length;
  for( let i = 0; i < len; i++){
    let min =  i;
    for( let j = i + 1; j < len; j++){
      if(array[min] > array[j]){
        min = j
      }
    }
    count ++
    if (min !== i){
      let tpm = array[i];
      array[i] = array[min];
      array[min] = tpm
    }
  }
  return array
}
console.log(selectedSort(array))
console.log('count=', count)