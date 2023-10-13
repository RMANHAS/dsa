// function reverse1(str){
//     let r = "";
//     for(let i = str.length-1; i >= 0; i--){
//       r += str[i];
//     }
//     return r;
//   }
  
//   console.log(reverse1("javascript"))


// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(palindrome('moms'))




// let n = 5;  
  
// function factorial(n) {  
//     let ans = 1;  
      
//     if(n === 0) 
//         return 1; 
//     for (let i = 2; i <= n; i++)  
//         ans = ans * i;  
//     return ans;  
// } 
  
// console.log(factorial(n));



 //Check whether a given positive number is a multiple of 3 or a multiple of 7

// function test37(x) 
// {
//   if (x % 3 == 0 || x % 7 == 0) //here or operater is used (only one conditon is true whole is true)
//   {                           //if and operater is used(&&) both condition is true 
//     return true;
//   } 
//   else {
//     return false;
//   }
// }

// console.log(test37(21));
// console.log(test37(14));
// console.log(test37(10));
// console.log(test37(11));




// write a program that finds the sum of all numbers in an array of numbers
// const arr = [1,2,3,4];
// const sum = arr.reduce((prevValue,curValue) => {
//     return prevValue + curValue
// },1);
// console.log(sum);



//find the max and min elements from the array.
// function findMinMax() {
//     let Arr = [50, 60, 20, 10, 40];
//     let minValue = Infinity;
//     let maxValue = -Infinity;
 
//     for (let item of Arr) {
 
//         // Find minimum value
//         if (item < minValue) 
//             minValue = item;
 
//         // Find maximum value
//         if (item > maxValue)
//             maxValue = item;
//     }
 
//     console.log("Minimum element is:" + minValue);
//     console.log("Minimum element is:" + maxValue);
// }
 
// findMinMax();

            //OR WE USE REDUCERS

            
// let Arr = [50, 60, 20, 10, 40];

// // Getting min value
// let minValue = Arr.reduce((acc, current) => Math.min(acc, current));

// // Getting max value
// let maxValue = Arr.reduce((acc, current) => Math.max(acc, current));

// // Display output
// console.log("Minimum element is:" + minValue);
// console.log("Minimum element is:" + maxValue);


 // numbers without using temporary 
    // variable 
  
    let x = 10, y = 5; 
    console.log("Before Swapping: x = " +  
        x + ", y = " + y); 
  
    // Code to swap 'x' and 'y' 
  
    // x now becomes 15 
    x = x + y; 
  
    // y becomes 10 
    y = x - y; 
  
    // x becomes 5 
    x = x - y; 
  
    console.log("After Swapping: x = " +  
        x + ", y = " + y); 
