// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution

function XO(str) {
    let lowerStr = str.toLowerCase()
    let splitStr = lowerStr.split('')
    let countX = 0
    let countO = 0
        if(!splitStr.includes('x') && !splitStr.includes('o')){
      return true
    }
    for(let i = 0; i<splitStr.length; i++){
      if(splitStr[i].includes('o')){
        countO++
      }
      else if(splitStr[i].includes('x')){
       countX++
      }
    }
    if(countX === countO){
      return true
    } else return false


}