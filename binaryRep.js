//Input:
//Output:
//Input to Recursive:
//Output from Recursive: 

//Recursive Version
const binaryRep = num => {
  if (Math.floor(num/2) === 0){
    return 1;
  }
  if (Math.floor(num/2) === 1){
    return 0;
  }
  return (num%2).concat(binaryRep(Math.floor(num/2)));
};

console.log(binaryRep(5));
//Iterative Version