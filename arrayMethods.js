// Loop types
// for (let i = 0; i < 20; i++){

// }

// let i = 20;
// while(i < 10){

// }

// do {

// }
// while(i > 20);

// let arr = [1,2,3,4,6,20]

// for (let idx in arr){   // It works on index
//     console.log(arr[idx]);
// }


// for(let val of arr){   // Works on values
//     console.log(val);
// }

// let obj = {
//     name1 : 'shiv',
//     ag1 : 20,
// }

// for(let i in obj){ // for of will not work as object i snot iterable
//     console.log(obj[i]);
// }


//  Array Methods ==================================================================== 
//     - Map
//     - Filter
//     - Reduce
//     - For each


// let arr = [10,20,30,40]


// function myMap(item){
//     return item*3;
// }

// let newArr = arr.map(function myMap(item){
//     return item*3;
// });
 
// let newArr = arr.map((item) => {
//     return item*3;
// });

// let newArr = arr.map((item) => item*3);

// console.log(newArr);


// let arr = [1,2,3,4,5,6,7]
// let newArray = arr.filter((item) => item%2 == 0);  //
// console.log(newArray);

// let arr = [1,2,3,4,5]
// console.log(arr.reduce((acc,curr) => {    // Convert array into a single value, extra param for initial start value arr.reduce(func(),acc ki initial value)
//     acc += curr;
//     return acc;
// },100)); 

// let arr = [1,2,3,4,5,6,7];
// arr.forEach((x) => {x*2});  // it dose not returns a new array and makes changes in the same

// WAP - Given an array of numbers, filter out the even numbers then double the value of remaining numbers and calculate their sum using array method chaining.

let arr = [15,19,20,22,18,13,16,11];

let ans = arr.filter((x) => {return x%2}).map((x) => {return x*2}).reduce((acc,curr)=>{
    acc += curr;
    return acc;
},0)
console.log(ans);












