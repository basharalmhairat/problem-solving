'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr)=>{
    let max = 0;
    let n = arr.length;
    while (n--) {
      if (arr[n] > max) {
        max = arr[n];
        } 
    }
    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr)=>{
    var sum = 0;
    
    let  a = arr.length;
   for (let x= 0 ; x <= a ; x++) {
      if (typeof arr[x] == 'String' ){
          continue;
      }
return sum;
}     

// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr)=>{
    let  r = arr.length;
    for (var x = r -1 ; x >=0 ; x--) {

        console.log(arr[x]);
    }
}

module.exports = {findMax , sumNums, reverseArray};