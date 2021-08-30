const factorial = () => {
  if( n === 1){
    return 1
  }
  return n * factorial(n = n - 1)
}
console.log(factorial(n=3))

const fibonachi = (n) => {
  if (n === 1 || n === 2){
    return 1
  }
  return fibonachi(n= n-1) + fibonachi(n= n-2)
}
console.log(fibonachi(n=3))

function pow(x, n){
  if(n === 1){
    return x
  } else {
    return x * pow(x, n-1)
  }
}
console.log(pow(3,6))