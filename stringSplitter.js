//Input: string, a separator 'test test', ' '
//Output: array of strings ['test', 'test']
//Input to Recursive: rest of string
//Output from Recursive: a substring

//Recursive Version 
const stringSplitter = (str, seperator) =>{
  if (!str.length){ return []; }
  const sepIndex = str.indexOf(seperator);
  if (sepIndex === -1){ return [str]; }
  
  return [str.slice(0,sepIndex), ...stringSplitter(str.slice(sepIndex+1), seperator)];
};

console.log(stringSplitter('My friend', ' '));

const stringSplitterIter = (str, seperator) => {
  let result = [];
  let subStr = '';

  for (let i = 0; i < str.length; i++){
    if (str[i] === seperator){
      result.push(subStr);
      subStr = '';
    }
    else {
      subStr += str[i];
    }    
  }
  result.push(subStr);
  return result;
};

console.log(stringSplitterIter('Go go', ' '));