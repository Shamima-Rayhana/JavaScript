//Cash Register

function checkCashRegister(price, cash, cid) {
    var change=(cash-price)*100;
    let change2=change/100;
    //console.log(change);
  
  let p=[1,5,10,25,100,500,1000,2000,10000];
    let sum=0;
  let resultArr=[];
    let x=cid;
    for(let i=0;i<x.length;i++)
    {
      sum+=x[i][1]*100;
    }
    
    //console.log(sum);
    let ss = 0;
    let z=0;
  
    if(change===sum)
    {
      console.log({ status: "CLOSED", change:cid});
      return { status: "CLOSED", change:cid};
    }
    else if(change>sum)
    {
      console.log({ status: "INSUFFICIENT_FUNDS", change:[]});
      return { status: "INSUFFICIENT_FUNDS", change:[]};
    }
    else
    {
        for(let k=p.length-1;k>=0;k--)
        {
          while(change>=p[k])
          {
            if(cid[k][1]>0)
            {
            change-=p[k];
            ss += p[k]/100;
            z+=ss;
            cid[k][1] -= (p[k])/100;
            }
            else
            {
              break;
            }
                
          }
          if(ss>0)
          {
          resultArr.push([cid[k][0],ss]);
          }
          ss=0;
        }
        console.log(z);
        //console.log(resultArr);
        if(z<change2)
        {
          console.log({status: "INSUFFICIENT_FUNDS", change: []});
          return {status: "INSUFFICIENT_FUNDS", change: []};
        } 
        console.log({status: "OPEN", change: resultArr});
        return {status: "OPEN", change: resultArr};
    }
  
  }
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

  



  //---------------,,,,,,,,,,,THE END,,,,,,,,,,,,--------------------