//Input: string
//Output: string
//Input to Recursive: string - one character
//Output from Recursive: rest of string + character

//Recursive Version
const reverseString = str => {
  if (!str.length){
    return '';
  }
  return reverseString(str.slice(1)) + str[0];
};

console.log(reverseString('racecars'));

//Iterative Version
const reverseStringIter = str => {
  const reverseStr = [];
  for (let i = str.length-1; i >= 0; i --){
    reverseStr.push(str[i]);
  }
  return reverseStr.join('');
};

console.log(reverseStringIter('Test'));