//Iterate with JavaScript While Loops
var ourArray = [];
var i = 5;
while(i >=0) {
  ourArray.push(i);
  i--;
}
//Iterate with JavaScript For Loops
// Setup
var myArray = [];

for(var i=1;i<=5;i++)
{
  myArray.push(i);
}
//Iterate Odd Numbers With a For Loop
// Setup
var myArray = [];

for(var i=1;i<=9;i+=2)
{
  myArray.push(i);
}
//Count Backwards With a For Loop
// Setup
var myArray = [];

for(var i=9;i>=1;i-=2)
{
  myArray.push(i);
}
//Iterate Through an Array with a For Loop
// Setup
var myArr = [ 2, 3, 4, 5, 6];

var total=0;
for(var i=0;i<myArr.length;i++)
{
  total+=myArr[i];
}
//nested for loop
function multiplyAll(arr) {
    var product = 1;
    for(var i=0;i<arr.length;i++)
    {
      for(var j=0;j<arr[i].length;j++)
      {
        product*=arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
//Do...while loop
  // Setup
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
}while(i<11)

//Replace Loops using Recursion
function sum(arr, n) {
    if(n<=0)
    {
      return 0;
    }
    else{
    return arr[n-1]+sum(arr,n-1);
    }
  }