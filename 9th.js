//switch statement
function caseInSwitch(val) {
    var answer = "";
  switch(val)
  {
    case 1:
    answer="alpha";
    document.write(answer);
    document.write("<br>");
    break;
    case 2:
    answer="beta";
    document.write(answer);
    document.write("<br>");
    break;
    case 3:
    answer="gamma";
    document.write(answer);
    document.write("<br>");
    break;
    case 4:
    answer="delta";
    document.write(answer);
    document.write("<br>");
    break;
  }
  
    return answer;
  }
  
  caseInSwitch(1);
  //switch statement with default value
  function switchOfStuff(val) {
    var answer = "";
   switch(val)
   {
     case "a":
     answer="apple";
     document.write(answer);
    document.write("<br>");
     break;
     case "b":
     answer="bird";
     document.write(answer);
    document.write("<br>");
     break;
     case "c":
     answer="cat";
     document.write(answer);
    document.write("<br>");
     break;
     default:
     answer="stuff";
     document.write(answer);
    document.write("<br>");
     break;
   }
  
    return answer;
  }
  
  switchOfStuff(1);