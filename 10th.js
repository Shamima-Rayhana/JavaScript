//Returning Boolean Values from FunctionsPassed
function isLess(a, b) {
    return a<b;
  }
  
  isLess(10, 15);

  //Return Early Pattern for Functions
function abTest(a, b) {
  if(a<0 || b<0)
  return undefined;
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);