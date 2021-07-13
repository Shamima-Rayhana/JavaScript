function rot13(str) {
    str=str.toUpperCase();
    let s="";
    let ss="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for(let i=0;i<str.length;i++)
    {
      if(str[i]>='A' && str[i]<='Z')
      {
         s+=ss[(ss.indexOf(str[i])+13)%26];
      }
      else
      {
        s+=str[i];
      }
    }
  
    return s;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  