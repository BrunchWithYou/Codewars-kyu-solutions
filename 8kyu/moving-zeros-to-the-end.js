// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


//My solution

function moveZeros(arr){
    let count = 0
    for(let i =0; i<arr.length; i++){
        if(arr[i]=== 0){
            arr.splice(i,1,'what') // have to insert something random here due to splice modifying original array. Could refactor with declaring a copy of new array to try again later?
            count++
        }
    }
    let newArr = arr.filter(a => a !=='what') // filter should return a new array without the word what
    for(let i = 0; i<count; i++){
        
        newArr.push(0)
    }
    return newArr
}