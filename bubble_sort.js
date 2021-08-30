const array = [43,56,34,67,12,34,67,89,34,56,78,199,45,67,3,43,0, -65, -874, -6, -34, 6, 87543]
let count = 0;

let bubbleSort = (array) => {
  let len = array.length;
  let swapped
  do{
    swapped = false;
    for(let i =0; i < len; i++){
      if(array[i]> array[i + 1]){
        let tpm = array[i]
        array[i]=array[i+1]
        array[i +1] = tpm
        swapped = true
        count++
      }
    }
    
  }while(swapped)
    return array
};









console.log('count = ', count)
console.log(bubbleSort(array))