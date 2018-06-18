//Input: decimal whole number
//Output: array
//Input to Recursive: num-1 and num-2
//Output from Recursive: addition of the past two numbers

//Recursive Version
const fibonacci = (num) => {
  if (num === 1){
    return [0];
  }
  if (num === 2){
    return [0,1];
  }
  const arr = fibonacci(num-1);
  arr.push(arr[arr.length-1]+ arr[arr.length-2]);
  return arr;
};
console.log(fibonacci(7));

//Iterative Version
const fibonacciIter = num => {
  if (num === 1) return [0];
  if (num === 2) return [0,1];
  const result = [0,1];
  for (let i = 3; i <=num; i ++) {
    result.push(result[i-2] + result[i-3]);
  }
  return result;
};

console.log(fibonacciIter(7));