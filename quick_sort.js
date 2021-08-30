const array = [-876,2,3,5,6,8,16,78,38,-65,-7654,-9,0,65,0,-875,5252,8542, 764]
let count = 0

function quickSort(array){
  if(array.length <= 1){
    return array
  }
  let pivotIndex = Math.floor(array.length/2);
  let pivot = array[pivotIndex]
  let less = []
  let more = []
  for( let i = 0; i < array.length;i++){
    count ++
    if(i === pivotIndex)
    continue
    if(array[i] < pivot){
      less.push(array[i])
    } else {
      more.push(array[i])
    }
  }
  return [...quickSort(less), pivot, ...quickSort(more)]
}

console.log(quickSort(array))
console.log('count = ', count)





