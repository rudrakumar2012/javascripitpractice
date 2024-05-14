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
*Method 1*
function recursiveBinarySearch1(arr, target){
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
*Method 2*
function recursiveBinarySearch2(arr, target){
  return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, left, right){
  if(left > right){
    return -1
  }
  let mid = Math.floor((left + right) / 2)
  if(arr[mid] === target){
    return mid
  } else if(target < arr[mid]){
    return search(arr, target, left, mid - 1)
  } else {
    return search(arr, target, mid + 1, right)
  }
}


console.log(recursiveBinarySearch1([-5,2,4,6,10], 10))
console.log(recursiveBinarySearch2([-5,2,4,6,10], 6))
console.log(recursiveBinarySearch1([-5,2,4,6,10], 20))

Big-O = O(logn)

*Bubble Sort*
*Method 1*
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));

*Method 2*
function bubbleSort2(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while(swapped);
  return arr;
}

console.log(bubbleSort2([8, 5, 2, 9, 5, 6, 3]));

Big-O = O(n^2)

*InsertionSort*

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > currentVal){
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));

Big-O = O(n^2)

*QuickSort*

function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([8, 5, 2, 9, 5, 6, 3]));

Worst case(when the array is already sorted): Big-O = O(n^2)
Avg case: Big-O = O(nlogn)

*MergeSort*

function mergeSort(arr){
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
  let result = []
  while(left.length && right.length){
    if(left[0] < right[0]){
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return [...result, ...left, ...right]
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));

Big-O = O(nlogn)

*Cartesian Product*

function cartesianProduct(arr1, arr2) {
  let result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]])
    }
  }
  return result
}

console.log(cartesianProduct([1, 2], [3, 4, 5]))

Big-O = O(n*m)

*ClimbingStairs*

function climbStairs(n) {
  const noOfWays = [1,2]
  for(let i = 2; i < n; i++){
    noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
  }
  return noOfWays[n-1];
}

console.log(climbStairs(6))

Big-O(Wrost Time Complexity): O(n) - Linear (because of 1 loop present in function)

*TowerOfHanoi*

function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${from_rod} to rod ${to_rod}`);
    return;
  }
  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
  console.log(`Move disk ${n} from rod ${from_rod} to rod ${to_rod}`);
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

console.log(towerOfHanoi(3, "A", "C", "B"));

Big-O(Wrost Time Complexity): O(2^n)

**Data Structure**
Array
Linked List
Stack
Queue
Tree
Graph
Hash Table
Set
Map


*Queue*

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

myQueue.print(); // Output: 1,2,3,4

myQueue.dequeue();
myQueue.print(); // Output: 2,3,4

console.log(myQueue.front()); // Output: 2

console.log(myQueue.isEmpty()); // Output: false

console.log(myQueue.size()); // Output: 3

**Optimized Queue**

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

myQueue.print(); // Output: [1, 2, 3, 4]

myQueue.dequeue();
myQueue.print(); // Output: [2, 3, 4] 

console.log(myQueue.peek()); // Output: 2

console.log(myQueue.isEmpty()); // Output: false

console.log(myQueue.size()); // Output: 3

**Circular Queue**

class circularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
    this.currentLength = 0;
  }

  isFull() {
    return this.currentLength === this.size;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if(!this.isFull()) {
      this.rear = (this.rear + 1) % this.size;
      this.items[this.rear] = element;
      this.currentLength++;
      if(this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if(this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.size;
    this.currentLength--;
    if(this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if(!this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  print() {
    if(this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i
      let str = ''
      for(i = this.front; i != this.rear; i = (i + 1) % this.size) {
        str += this.items[i] + ' ';
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new circularQueue(5);

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());

queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();

queue.enqueue(60);
queue.print();

*/