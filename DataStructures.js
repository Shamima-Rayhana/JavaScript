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

  //Check For The Presence of an Element With indexOf()
  function quickCheck(arr, elem) {
    var p=arr.indexOf(elem);
  if(p!==-1)
  {
    return true;
  }
  else
  {
    return false;
  }
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  //Iterate Through All an Array's Items Using For Loops

  function filteredArray(arr, elem) {
    let newArr = [];
    for( let i=0;i<arr.length;i++)
    {
      if(arr[i].indexOf(elem)==-1)
      {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//create complex array
  let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array',['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]]
  ];
  //Add Key-Value Pairs to JavaScript Objects
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  foods.bananas=13;
  foods.grapes=35;
  foods.strawberries=27;
  
  console.log(foods);

  //nested object 

  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  userActivity.data.online=45;
  
  console.log(userActivity);
  //Access Property Names with Bracket Notation
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem];
  }
  
  console.log(checkInventory("apples"));
  //Use the delete Keyword to Remove Object Properties
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  
  console.log(foods);
  //Check if an Object has a Property
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    if(userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah')&& userObj.hasOwnProperty('Ryan') )
  {
    return true;
  }
  return false;
  }
  
  console.log(isEveryoneHere(users));
  //Iterate Through the Keys of an Object with a for...in Statement
  function countOnline(usersObj) {
    let p=0;
    for(let x in usersObj)
    {
      if(usersObj[x].online===true)
      {
        p++;
      }
    }
    return p;
  }


//Generate an Array of All Object Keys with Object.keys()Passed
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    return Object.keys(obj);
  }
  
  console.log(getArrayOfUsers(users));
  //Modify an Array Stored in an Object
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  
  console.log(addFriend(user, 'Pete'));