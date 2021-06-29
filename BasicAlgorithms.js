//Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit=(celsius*9)/5+32;
    return fahrenheit;
  }
  
  convertToF(30);

  //Reverse a String
  function reverseString(str) {
    let Rstr="";
    for(let i=str.length-1;i>=0;i--)
    {
      Rstr+=str[i];
    }
    return Rstr;
  }
  
  reverseString("hello");
  //Factorialize a Number
  function factorialize(num) {
    if(num===0)
    {
      return 1;
    }
    return num*factorialize(num-1);
  }
  
  factorialize(5);
  //Find the Longest Word in a String
  function findLongestWordLength(str) {
    let w = str.split(' ');
    let max=0;
    for(let i=0; i<w.length; i++)
    {
      if(w[i].length>max)
      {
        max=w[i].length;
      }
    }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  //Return Largest Numbers in Arrays
  function largestOfFour(arr) {
    let array=[];
    for(let i=0;i<arr.length;i++)
    {
      let LN=arr[i][0];
      for(let j=0;j<arr[i].length;j++)
      {
        if(LN<arr[i][j])
        {
          LN=arr[i][j];
        }
      }
      array[i]=LN;
    }
    return array;
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    //Confirm the Ending
    function confirmEnding(str, target) {
        if(str.slice(str.length-target.length)===target)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      
      confirmEnding("Bastian", "n");
      //Repeat a String Repeat a String
      function repeatStringNumTimes(str, num) {
        let s="";
        if(num<0)
        {
          return s;
        }
        else
        {
           for(let i=0;i<num;i++)
           {
             s+=str;
           }
           return s;
        }
      }
      
      repeatStringNumTimes("abc", 3);
      //Truncate a String
      function truncateString(str, num) {
        let l=str.length;
        if(l>num)
        {
            return str.slice(0,num)+'...';
        }
        else
        {
          return str;
        }
      }
      
      truncateString("A-tisket a-tasket A green and yellow basket", 8);
      //Finders Keepers
      function findElement(arr, func) {
        let num = 0;
        for(let i=0;i<arr.length;i++)
        {
          num=arr[i];
          if(func(num))
          {
            return num;
          }
        }
        return undefined;
      }
      
      findElement([1, 2, 3, 4], num => num % 2 === 0);
      //Boo who
      function booWho(bool) {
        if(bool===true || bool===false)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      
      booWho(null);
      //Title Case a Sentence


      //Slice and Splice
      function frankenSplice(arr1, arr2, n) {
        let array=arr2.slice();
        array.splice(n,0,...arr1);
        return array;
      }
      
      frankenSplice([1, 2, 3], [4, 5, 6], 1);
      //Falsy Bouncer
      function bouncer(arr) {
        return arr.filter(Boolean);
      }
      
      bouncer([7, "ate", "", false, 9]);
      //Where do I Belong
      function getIndexToIns(arr, num) {
        arr.sort((a,b)=>(a-b))
      
        for(let i=0;i<arr.length;i++)
        {
          if(arr[i]>=num)
          {
            return i;
          }
        }
        return arr.length;
      }
      
      getIndexToIns([40, 60], 50);
      //Mutations
      function mutation(arr) {
        let p=arr[0].toLowerCase();
        let q=arr[1].toLowerCase();
        for(let i=0;i<q.length;i++)
        {
          if(p.indexOf(q[i])===-1)
          {
            return false;
          }
        }
        return true;
      }
      
      mutation(["hello", "hey"]);
      //Chunky Monkey
      function chunkArrayInGroups(arr, size) {
        let array=[];
        let i=0;
        while(i<arr.length)
        {
          array.push(arr.slice(i,i+size));
          i+=size;
        }
        return array;
      }
      
      chunkArrayInGroups(["a", "b", "c", "d"], 2);