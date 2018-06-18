//Input: arr of ints
//Output: arr of ints
//Input to Recursive: array that is one smaller
//Output from Recursive: a doubled number

//Recursive Version
const arrayDouble = arr => {
  if (!arr.length){
    return [];
  }
  const double = arr[0] * 2;
  return [double, ...arrayDouble(arr.slice(1))];
};

console.log(arrayDouble([0, -3, 4,2,9,10]));

//Iterative Version

const arrayDoubleIter = arr => {
  return arr.map(item => item*2);
};

console.log(arrayDoubleIter([0, -3, 4,2,9,10]));