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