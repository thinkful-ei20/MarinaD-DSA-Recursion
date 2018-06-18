//Input: an array of objects with id and parent
//Output: an object with nested objects connecting parents and children
//Input to Recursive: the current ID which then becomes the parent of the next tree
//Output from Recursive: a tree of nested objects


const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];

//Recursive Version
const traverse = (animalHierarchy, parent) => {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
};

console.log(traverse(animalHierarchy, null));

//Iterative Version
const traverseIter = arr => {
  const result = {};
  const firstLvl = arr.filter(item => item.parent === null)[0];
  const secondLvl = arr.filter(item => item.parent === firstLvl.id)[0];
  const thirdLvl = arr.filter(item => item.parent === secondLvl.id);
  const fourthLvl = arr.filter(item => item.parent === (thirdLvl[0].id || thirdLvl[1].id));
  result[firstLvl.id] = {
    [secondLvl.id] : {
      [thirdLvl[0].id] : {
        [fourthLvl[0].id] : {}
      },
      [thirdLvl[1].id] : {
        [fourthLvl[1].id] : {}
      }
    }
  };
  
  return result;

};

console.log(traverseIter(animalHierarchy));