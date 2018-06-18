//Input: number
//Output: triangle number
//Input to Recursive: number + n
//Output from Recursive: number

//Recursive Version
const nthTriangleNum = num => {
  if (num === 0){
    return 0;
  }
  return num + nthTriangleNum(num-1);
};

console.log(nthTriangleNum(6));

//Iterative Version
const nthTriangleNumIter = num => {
  let lastNum = 0;
  for (let i = 0; i < num; i++){
    lastNum += i;
  }
  return lastNum;
};

console.log(nthTriangleNum(6));