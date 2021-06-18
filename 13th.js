//Profile Lookup
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  for(var i=0;i<contacts.length;i++)
  {
      if(contacts[i].firstName===name)
      {
          if(contacts[i].hasOwnProperty(prop)=== true)
          {
               return contacts[i][prop];
          }
          else
          {
              return "No such property";
          }
       // return contacts[i][prop] || "No such property";
          
      }
  }
     return "No such contact";
}

lookUpProfile("Akira", "likes");
//Generate Random Fractions with JavaScript
function randomFraction() {

  
    return Math.random();

  }
  console.log(randomFraction);
//Generate Random Whole Numbers with JavaScriptPassed
  function randomWholeNum() {

  
    return Math.floor(Math.random()*10);
  }

  //Generate Random Whole Numbers within a Range
  function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
  }
//Use the parseInt Function
  function convertToInteger(str) {
    return parseInt(str);
  
  }
  
  convertToInteger("56");

  //Use the parseInt Function with a Radix
  function convertToInteger(str) {
    return parseInt(str,2);
  
  }
  
  convertToInteger("10011");

//Use the Conditional (Ternary) Operator
  function checkEqual(a, b) {
    return a==b? "Equal":"Not Equal";
  
  }
  
  checkEqual(1, 2);
//Use Multiple Conditional (Ternary) Operators

  function checkSign(num) {

    return num>0? "positive": num<0? "negative":"zero";
    }
    
    checkSign(10);