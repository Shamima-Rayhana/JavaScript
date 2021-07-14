//Roman Numeral Converter

function convertToRoman(num) {
    let str="";
    str+=num;
    let ss="";
    let p='';
    let q='';
    let r='';
    let s='';
    let l=str.length;
    if(l==0)
    {
      return ss;
    }
    else
    {
      switch (str[l-1])
      {
       case "1" :
       p = "I";
       break;
       case "2" :
       p = "II";
       break;
       case "3" :
       p = "III";
       break;
       case "4" :
       p = "IV";
       break;
       case "5" :
       p = "V";
       break;
       case "6" :
       p = "VI";
       break;
       case "7" :
       p = "VII";
       break;
       case "8" :
       p = "VIII";
       break;
       case "9" :
       p = "IX";
       break;    
     }
     switch (str[l-2])
      {
       case "1" :
        q= "X";
       break;
       case "2" :
       q = "XX";
       break;
       case "3" :
       q = "XXX";
       break;
       case "4" :
       q = "XL";
       break;
       case "5" :
       q = "L";
       break;
       case "6" :
       q = "LX";
       break;
       case "7" :
       q = "LXX";
       break;
       case "8" :
       q = "LXXX";
       break;
       case "9" :
       q = "XC";
       break;    
     }
     switch (str[l-3])
      {
       case "1" :
       r = "C";
       break;
       case "2" :
       r = "CC";
       break;
       case "3" :
       r = "CCC";
       break;
       case "4" :
       r = "CD";
       break;
       case "5" :
       r = "D";
       break;
       case "6" :
       r = "DC";
       break;
       case "7" :
       r = "DCC";
       break;
       case "8" :
       r = "DCCC";
       break;
       case "9" :
       r = "CM";
       break;    
     }
     switch (str[l-4])
      {
       case "1" :
       s = "M";
       break;
       case "2" :
       s = "MM";
       break;
       case "3" :
       s = "MMM";
       break;
     }
     ss+=s;
     ss+=r;
     ss+=q;
     ss+=p;
    }
    return ss;
   
   }

   convertToRoman(4);
   
   convertToRoman(36);

   convertToRoman(167);

   convertToRoman(543);

   convertToRoman(765);

   convertToRoman(1067);

   convertToRoman(2986);

   convertToRoman(3999);

   //-------------////////////////-------------