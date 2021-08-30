const array = [1,2,3,4,5,6,7,8,9,10];
count = 0;

function linerSearch(array, item){
  for ( let i = 0; i < array.length; i++){
    count+= 1;
    if( array[i] === item){
      return i ;
    }
  }
  return null
}

console.log(linerSearch(array, item=4))
console.log('count = ' , count)