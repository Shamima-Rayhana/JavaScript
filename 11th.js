//Build JavaScript Objects
var myDog = {
    name: "Tommy",
    legs: 4,
    tails: 1,
    friends: ["jcnhd", "kshus", "skfhjgf"]
    };
    //Accessing Object Properties with Dot Notation
    // Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  var hatValue = testObj.hat;     
  var shirtValue = testObj.shirt;  

  //Accessing Object Properties with square bracket
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["the drink"];
  //Accessing Object Properties with Variables
  // Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  var playerNumber=16;      
  var player = testObj[playerNumber];
  //Updating Object Properties
  // Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  myDog.name="Happy Coder";
  //Add New Properties to a JavaScript Object
  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog["bark"]="woof";
  //Delete Properties from a JavaScript Object
  // Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  delete myDog.tails;
//Using Objects for Lookups

  // Setup
function phoneticLookup(val) {
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
    result=lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");
  //Testing Objects for Properties
  function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)==true)
    return obj[checkProp];
    else
    return "Not Found";
  }
  //Manipulating Complex Objects
  var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
    }
  
  ];
  
  