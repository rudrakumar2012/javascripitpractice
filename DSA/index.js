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


*Prime Number*
function isPrime(n){
  if(n < 2){
    return false;
  }
  for (let i = 2; i < n; i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}
Big-O: O(n) - Linear

OR

function isPrime(n){
  if(n < 2){
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));
or Big-O: O(sqrt(n))

*Power of 2*
function isPowerOfTwo(n){
  if(n < 1){
    return false
  }
  for(let i = 0; i < n; i++){
    if(n === Math.pow(2, i)){
      return true
    }
  }
  return false
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(8))

Big-O: O(n) - Linear
*/

function recursiveFibonacci(n) {
  if(n < 2) {
    return n
  }
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(7))