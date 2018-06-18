//Input: decimal number
//Output: string representing the binary conversion
//Input to Recursive: number/2
//Output from Recursive: a string, "1" or "0" (num%2)

//Recursive Version
const binaryRep = num => {
  if (num === 0){
    return '0';
  }
  if (num === 1){
    return '1';
  }

  return binaryRep(Math.floor(num/2)) + (Math.floor(num%2));
};

console.log(binaryRep(25));
//Iterative Version
const binaryRepIter = num => {
  let result = [num%2];
  let index = Math.floor(num/2);

  while (index > 0){
    result.unshift(index % 2);
    index = Math.floor(index/2);
  }

  return result.join('');
};

console.log(binaryRepIter(25));