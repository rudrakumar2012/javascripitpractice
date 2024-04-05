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

*Recursive Fibonacci*

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

Big-O: O(2^n) - Worst case (not a good solutionS)   

*Recursive Factorial*

function recursiveFactorial(n){ 
  if(n === 0){
    return 1
  }
  return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

Big-O = O(n)

*Linear Search*

function linearSearch(arr, t) {
  for(let i=0; i< arr.length; i++){
    if(arr[i]===t){
      return i
    }
  }
  return -1
}
console.log(linearSearch([-5,2,10,4,6], 10))
console.log(linearSearch([-5,2,10,4,6], 6))
console.log(linearSearch([-5,2,10,4,6], 20))

Big-O =  O(n)

*Binary Search*

function binarySearch(arr,t) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while(leftIndex <= rightIndex) {
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(t === arr[middleIndex]){
      return middleIndex;
    }
    if( t < arr[middleIndex]){
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5,2,4,6,10], 10))
console.log(binarySearch([-5,2,4,6,10], 6))
console.log(binarySearch([-5,2,4,6,10], 20))
Big-O = O(logn)

*Recursive Binary Search*

function recursiveBinarySearch(arr, target){
  if(arr.length === 0){
    return -1
  }
  let mid = Math.floor(arr.length / 2)
  if(arr[mid] === target){
    return mid
  } else if(target < arr[mid]){
    return recursiveBinarySearch(arr.slice(0, mid), target)
  } else {
    let result = recursiveBinarySearch(arr.slice(mid + 1), target)
    return result === -1 ? -1 : mid + 1 + result
  }
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 10))
console.log(recursiveBinarySearch([-5,2,4,6,10], 6))
console.log(recursiveBinarySearch([-5,2,4,6,10], 20))

Big-O = O(logn)
*/