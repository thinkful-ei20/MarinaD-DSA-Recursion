//Input: a decimal integer eg, 5
//Output: the multiplication of all numbers up to that number
//eg, 1*2*3*4*5
//Input to Recursive: num -1
//Output from Recursive: all previous numbers multiplied

//Recursive Version
const factorial = num => {
  if (num === 1){
    return 1;
  }
  return num * factorial(num-1);
};
console.log(factorial(4));

//Iterative Version
const factorialIter = num => {
  let result = 1;
  for (let i = num; i > 0; i--){
    result *= i;
  }
  return result;
};

console.log(factorialIter(4));