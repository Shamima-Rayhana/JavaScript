function palindrome(str) {
    str=str.toLowerCase();
    let s="";
    for(let i=0;i<str.length;i++)
    {
      if(str[i]>='a'&&str[i]<='z')
     {
        s+=str[i];
     }
     else if(str[i]>='0' && str[i]<='9')
     {
       s+=str[i];
     }
    }
    let len=s.length-1;
    for(let j=0;j<len/2;j++)
    {
      if(s[j]!=s[len-j])
      {
        return false;
      }
    }
    return true;
  }
  
  
  
  palindrome("eye");