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