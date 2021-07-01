//Create a Basic JavaScript Object
let dog = {
    name:"Adi",
    numLegs: 4,
    sayLegs: function() {return "This dog has 4 legs."}//use method
    };
console.log(dog.name);
console.log(this.numLegs);//this operator
console.log(dog.sayLegs);
//Define a Constructor Function
function Dog(){
    this.name="abc";
    this.color="blake";
    this.numLegs=4;
  }
  //Use a Constructor to Create Objects
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  let hound= new Dog();
  //Extend Constructors to Receive Arguments
  function Dog(name, color) {
    this.name=name;
    this.color=color;
    this.numLegs=4;
  
  }
  let terrier=new Dog("Mitu","gold");
  //Verify an Object's Constructor with instanceof
  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
   let myHouse=new House(5);
   myHouse instanceof House;
   //Understand Own Properties
   function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  for(let property in canary)
  {
    if(canary.hasOwnProperty(property))
    {
      ownProps.push(property);
    }
  }
  //Use Prototype Properties to Reduce Duplicate Code
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs=4;
  
  let beagle = new Dog("Snoopy");
  console.log(beagle.numLegs);
  //Iterate Over All Properties
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for(let property in beagle)
  {
    if(beagle.hasOwnProperty(property))
    {
      ownProps.push(property);
    }
    else
    {
      prototypeProps.push(property);
    }
  }
  //Understand the Constructor Property
  function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
  if(candidate.constructor===Dog)
  {
    return true;
  }
  else
  {
    return false;
  }
  }
  //Change the Prototype to a New Object
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 4,
    eat: function()
    {
      console.log("habijabi");
    },
    describe: function()
    {
      console.log("ja hcgsg");
    }
  
  };
  //Remember to Set the Constructor Property when Changing the Prototype
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  //Understand Where an Object’s Prototype Comes From
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);
  //Understand the Prototype Chain
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  Object.prototype.isPrototypeOf(Dog.prototype);
  //Use Inheritance So You Don't Repeat Yourself
  function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  
  };
  //Inherit Behaviors from a Supertype
  function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck=Object.create(Animal.prototype); 
let beagle=Object.create(Animal.prototype); 
//Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype=Object.create(Animal.prototype);


let beagle = new Dog();
//Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor=Bird;
Dog.prototype.constructor=Dog;


let duck = new Bird();
let beagle = new Dog();
//Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.bark= function()
{
  console.log("Woof!");
}

let beagle = new Dog();
beagle.eat();
beagle.bark();
//Override Inherited Methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly= function()
{
  return "Alas, this is a flightless bird.";
}


let penguin = new Penguin();
console.log(penguin.fly());
//Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin= function(obj)
{
  obj.glide= function()
  {
    console.log("this is capable to glide");
  }
}
glideMixin(bird);
glideMixin(boat);
 bird.glide();
 boat.glide();
 //Use Closure to Protect Properties Within an Object from Being Modified Externally
 function Bird() {
  let weight = 15;
  this.getWeight= function()
  {
    return weight;
  }

}
//Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
})();
//Use an IIFE to Create a Module
let funModule= (function()
{
  return {
    isCuteMixin : function(obj) {
  obj.isCute = function() {
    return true;
  };
},
 singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}
  }
})();

