//function for reuse 
function reusableFunction()
{
    //console.log("Hellow World");
    document.write("Hellow World");
    document.write("<br>");
}
reusableFunction();
//Passing Values to Functions with Arguments
function functionWithArgs(a,b)
{
  var sum=a+b;
  //console.log(sum);
  document.write("sum= ",sum);
}
functionWithArgs(10,20);
// Declare Global variable
var myGlobal=10;


function fun1() {
    var oopsGlobal=5;
    
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  document.write(output);
}