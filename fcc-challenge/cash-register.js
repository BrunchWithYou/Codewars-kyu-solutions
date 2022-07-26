// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]
// Tests
// Waiting:checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// Waiting:checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// Waiting:checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// Waiting:checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// Waiting:checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// Waiting:checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.




// Current progress of code for solution
// FIRST ATTEMPT ONLY SOLVES FOR ONE CASE WITH MONEY AVAILABLE IN CASH REGISTER
// ADDITIVE FOR EXISTING AMOUNT INSTEAD OF USING A DIFFERENT DENOMINATION
// INCOMPLETE SOLUTION

// function checkCashRegister(price, cash, cid) {
//   let change = cash - price
//   const value = {
//     "PENNY":0.01,
//     "NICKEL":0.05,
//     "DIME":0.1,
//     "QUARTER":0.25,
//     "ONE":1,
//     "FIVE":5,
//     "TEN":10,
//     "TWENTY":20,
//     "ONE HUNDRED":100,
//   }
  

//   function requiredChange(elem){ //FIND THE FIRST LARGEST REQUIRED CHANGE NEEDED
//     let denominations = [0.01,0.1,0.25,1,5,10,20,100]
//     for(let i = 0; i<denominations.length; i++){
//       if(elem >= denominations[i] && elem<denominations[i+1]){
//         return denominations[i]
//       } else if(elem === 0){
//         console.log("No change required")
//         return "No change required"
//       }
//     }
//   }


//   function requiredDenomination(elem){ //USE THE VALUE TO FIND THE NAME OF CHANGE NEEDED
//     if(Object.values(value).includes(elem)){
//       return (Object.keys(value).find((key) => value[key] === elem))
//     }
//   }
//   requiredDenomination(requiredChange(change))


//   for(let i = 0; i<cid.length;i++){
//     if(cid[i][0]===requiredDenomination(requiredChange(change)) && cid[i][1]>change){
//         let answer = {
//           status: "OPEN",
//           change: []
//         }
//         Object.values(answer)[1].push([requiredDenomination(requiredChange(change)),change])
//         console.log(answer)
//         return answer 
//     }
//   }
// }

// checkCashRegister(18.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);






//  WORKING SOLUTION BELOW

function checkCashRegister(price, cash, cid) {
  let changeNeeded = (cash - price)*100
  const denominations = {
    "PENNY":1,
    "NICKEL":5,
    "DIME":10,
    "QUARTER":25,
    "ONE":100,
    "FIVE":500,
    "TEN":1000,
    "TWENTY":2000,
    "ONE HUNDRED":10000,
  }
  let totalCid = cid.reduce((acc,[,amount])=>acc+amount*100,0)
  


  if(changeNeeded === totalCid){
    return {status:'CLOSED', change:cid}
  }







  let arrAmountToUse = []
  cid.map(([name,amount])=>{
    if(changeNeeded>denominations[name]){
      arrAmountToUse.push(amount*100)
    }
  })

  let totalAmount = arrAmountToUse.reduce((a,b)=>a+b)
  if(changeNeeded>totalCid || changeNeeded>totalAmount){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }






let answer = [] 
      cid.reverse().map(([name,amount])=>{
        let amountCents = amount*100
        let total = 0 
        while(changeNeeded>=denominations[name] && amountCents>0){         
          total+=denominations[name]
          changeNeeded-=denominations[name]
          amountCents-=denominations[name]       
        } 
        answer.push([name,total/100])
    })
   


  
return {status: "OPEN", change:(answer.filter((a)=>a[1]))}


} 

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 0.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);