//Input: number
//Output: string : a series of console log strings:
//a number + 'Another sheep jumps over the fence'
//Input to Recursive: number - 1
//Output from Recursive: the number + 'Another sheep jumps over the fence'

//Recursive Version
const countingSheep = (num) => {
  if (num === 0){
    return;
  }
  console.log(`${num} - Another sheep jumps over the fence`);
  return countingSheep(num-1);
};

// countingSheep(3);

//Iterative Version

const countingSheepIter = num => {

  for (let i = num; i > 0; i--){
    console.log(`${i} - Another sheep jumps over the fence`);
  }
};

countingSheepIter(3);