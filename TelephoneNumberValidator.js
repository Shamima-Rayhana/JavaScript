//Telephone Number Validator

function telephoneCheck(str) {
    let p=/^(1\s?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    let q=/^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
  
    if(p.test(str))
    {
      return true;
    }
    else if(q.test(str))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
  telephoneCheck("555-555-5555");