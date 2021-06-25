//Use an Array to Store a Collection of Data
let yourArray = ['Shamima',5,true,8,6,'Rayhana'];
//Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
myArray[1]="Wow";
console.log(myArray);
//Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
  //Remove Items from an Array with pop() and shift()
  function popShift(arr) {
    let popped=arr.pop();
    let shifted=arr.shift();
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
//Remove Items Using splice()
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,4);
arr.splice(1,1);
console.log(arr);
//Add Items Using splice()
function htmlColorNames(arr) {
    arr.splice(0,2);
    arr.splice(0,0,'DarkSalmon', 'BlanchedAlmond')
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
  //Copy Array Items Using slice()
  function forecast(arr) {
  let newArr=arr.slice(2,4);
    return newArr;
  }
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  //Copy an Array with the Spread Operator
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
     newArr.push([...arr]);
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));
  //Combine Arrays with the Spread Operator
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence=['learning',...fragment,'is','fun'];
    return sentence;
  }
  
  console.log(spreadOut());