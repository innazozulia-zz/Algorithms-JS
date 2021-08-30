const array = [34,45,56,67,78,89,90,14,15,2,26,37,854,255,16, 673,764,248,335]
count = 0;

function binarySearch(array, item){
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;
  while(found === false && start <= end){
    count += 1;
    middle = Math.floor((start + end)/2);
    if(array[middle] === item){
      found = true;
      position = middle
      return position
    } if (item < array[middle]){
      end = middle -1
    } else {
      start = middle +1
    }
  }
  return position
}

// console.log(binarySearch(array, item = 26));

function recursiveBinarySearch(array, item, start, end){
  let middle = Math.floor((start + end)/ 2)
  count ++
  if(item === array[middle]){
    return middle
  }
  if(item < array[middle]){
    return recursiveBinarySearch(array, item,start, end = middle - 1)
  }
  else{
    return recursiveBinarySearch(array,item, middle + 1, end)
  }

}

console.log(recursiveBinarySearch(array, item = 16, 0, array.length))
console.log('count = ', count)