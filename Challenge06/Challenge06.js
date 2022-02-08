'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr) => {
   let max = 0;
    arr.forEach((element) => { if (max < element) { max = element } });
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

const sumNums = (arr) => {
    let nums = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(Number(arr[i]))) {
            nums.push(Number(arr[i]));
        }
    }
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
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
const reverseArray = (arr) => {
    let x = arr.length - 1
    let arr1 = []
    let i = 0
    for(let a = x - i; i <= x; i++, a = x - i){
      arr1[i] = arr[a]
    } 
    return arr1;
  }
   


module.exports = { findMax, sumNums, reverseArray };