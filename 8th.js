//if condition
var a=10,b=20,c=5;
if(a==10)
{
    document.write("a=10");
    document.write("<br>");
}
if(b!==20)
{
    document.write(b," is Not equal 20");
    document.write("<br>");
}
//if and else

if(a>=50)
{
    document.write(a," is greater than 50");
    document.write("<br>");
}
else{
    document.write(a, " is less than 50");
    document.write("<br>");
}
//if, else if and else using logical AND

if(a>b  && a>c)
{
    document.write("Max value is ",a);
    document.write("<br>");
}
else if(b>a && b>c)
{
    document.write("Max value is ",b);
    document.write("<br>");
}
else
{
    document.write("Max value is ",c);
    document.write("<br>");
}
//logical OR in condition
if(c<a || c<b)
{
    document.write(c," is less than ", a ," or " , b);
    document.write("<br>");
}