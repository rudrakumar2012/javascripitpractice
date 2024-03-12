/*
  *Fibonacci*
  function fibo(n) {    
  const fib = [0,1];
  for(let i = 2; i<n ; i++){
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib
}

console.log(fibo(2)); [0,1]
console.log(fibo(3)); [0,1,1]
console.log(fibo(7)); [0,1,1,2,3,5,8]
Big-O(Wrost Time Complexity): O(n) - Linear (because of 1 loop present in function)

*Factorial*
function factorial(n){
  let result = 1;
  for(let i = 2; i <= n; i++){
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
Big-O: O(n) - Linear
*/
