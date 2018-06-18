//Input: string
//Output: all combinations of string order
//Input to Recursive: length of string -1
//Output from Recursive: array of possibilities

//eg cat
//
//ca t -> 1
//c at or ta -> 2
//0  cat or act or tac -> 3

//cat
//act
//tac
//tca
//cta
//atc
//each letter must be in each position string.length

//east
//east
//eats
//et
//e
//e
//e



// 1 -> 1 
// 2 -> 2
// 3 -> 6 
// 4 -> 24

// east
// { e: {
//     a:{
//       s:{
//         t: {}
//       },
//       t:{
//         s: {}
//       }
//     },
//     s:,
//     t:,
//   },
//   a:,
//   s:,
//   t:,
// }

// parent + parent.child + parent.child.child + parent.child.child.child

//Recursive Version
const anagrams = (str, pre='') => {
  if (pre.length <= 1){
    console.log(pre + str);
  }
  else {
    for (let i = 0; i < str.length; i ++){
      const foo = str[i]; //v
      const before = str.slice(0, i);//fi
      const after = str.slice(i+1); //es
      anagrams(after+pre, before+foo);    
    }
  }
};


console.log(anagrams('cat'));
//Iterative Version
// const anagramsIter = str => {
//   const charBank = str.split('');
//   for (let i = 0; i < charBank.length; i++){
    
//   }
// };
// console.log(anagramsIter('dog'));