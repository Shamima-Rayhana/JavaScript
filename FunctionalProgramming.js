//Learn About Functional Programming
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);
//Avoid Mutations and Side Effects Using Functional Programming
// The global variable
var fixedValue = 4;

function incrementer (f) {
f=fixedValue+1;
return f;
}
//Pass Arguments to Avoid External Dependence in a Function
var fixedValue = 4;
function incrementer (fixedValue) {
  return fixedValue+1;
}
//Refactor Global Variables Out of Functions
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr,bookName) {
let array=[...arr];
  array.push(bookName);
  return array;
}
function remove (arr,bookName) {
  let array=[...arr];
  var book_index = array.indexOf(bookName);
  if (book_index >= 0) {

    array.splice(book_index, 1);
    return array;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
//Use the map Method to Extract Data from an Array
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names);
//Implement map on a Prototype
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  for(let i=0;i<this.length;i++)
  {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
//Use the filter Method to Extract Data from an ArrayPassed
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); 
//Implement the filter Method on a Prototype
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  for(let i=0;i<this.length;i++)
  {
    if(callback(this[i])===true)
    {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
//Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
  let newArr=anim.slice(beginSlice,endSlice);
  return newArr;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
//Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
//Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
  let newArr=original.concat(attach);
  return newArr;
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
//Add Elements to the End of an Array Using concat Instead of push
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
//Use the reduce Method to Analyze Data




//Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(arr) {
  return arr.sort(function(a,b){
    return a===b? 0: b<a? 1: -1;
  });
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
//Return a Sorted Array Without Changing the Original Array
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {

  return [].concat(arr).sort(function(a,b)
  {
    return a-b;
  });
}
nonMutatingSort(globalArray);
//Split a String into an Array Using the split Method
function splitify(str) {
  return str.split(/\W/);
}
splitify("Hello World,I-am code");
//Combine an Array into a String Using the join Method
function sentensify(str) {
  let arr= str.split(/\W/);
  return arr.join(" ");
}
sentensify("May-the-force-be-with-you");
//Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
  return title
  .toLowerCase()
  .trim()
  .split(/\s+/)
  .join("-");
  
  }
  //Use the every Method to Check that Every Element in an Array Meets a Criteria
  function checkPositive(arr) {
    return arr.every(function(currentValue)
    {
      return currentValue>0;
    });
  }
  checkPositive([1, 2, 3, -4, 5]);
  //Use the some Method to Check that Any Elements in an Array Meet a Criteria
  function checkPositive(arr) {
    return arr.some(currentVal => currentVal>0);
  }
  checkPositive([1, 2, 3, -4, 5]);
  //Introduction to Currying and Partial Application
  function add(x) {
    return function(y)
    {
      return function(z)
      {
        return x+y+z;
      }
    }
  }
  add(10)(20)(30);