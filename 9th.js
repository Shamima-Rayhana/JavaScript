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
  //switch statement with multiple option
  function sequentialSizes(val) {
    var answer = "";
    switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      document.write(answer);
    document.write("<br>");
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      document.write(answer);
    document.write("<br>");
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      document.write(answer);
    document.write("<br>");
      break;
    }
  
    return answer;
  }
  
  sequentialSizes(1);
  //replace chain if and else if by switch
  function chainToSwitch(val) {
    var answer = "";
    switch(val) {
    case "bob":
      answer = "Marley";
      document.write(answer);
    document.write("<br>");
      break;
    case 42:
      answer = "The Answer";
      document.write(answer);
    document.write("<br>");
      break;
    case 1:
      answer = "There is no #1";
      document.write(answer);
    document.write("<br>");
      break;
      case 99:
      answer = "Missed me by this much!";
      document.write(answer);
    document.write("<br>");
      break;
      case 7:
      answer = "Ate Nine";
      document.write(answer);
    document.write("<br>");
      break;
  }
    return answer;
  }
  
  chainToSwitch(7);