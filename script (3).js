//when a function is returned in a function then it returns it's lexical scope(parent's environment)
function fun1(){
    let a = 10;
    let b = 20;

    function fun2(){
        return a+b;
    }

    return fun2;
}
console.log(fun1()); //[Function: fun2]
let num = fun1();
console.log(num()); //30
//logical error can be that a and b values may be undefined for fun2 as they are not in it's scope
//but when we are calling it through returned value then it provides the lexical env on fun2 with it where a and b are defined
//this is the closure of function

function fun3(){
    let a = 10;
    let b = 20;

    function fun4(){
        let c = 40;

        function fun5(){
            return a + b + c;
        }
        return fun5;
    }

    return fun4;
}

console.log(fun3()()); //[Function: fun3]
num = fun3()();
console.log(num()); //70
//console.log(fun5());// not defined
//Lexical env are inheritable

//writing as arrow function
function fun6(){
    let a = 10;
    let b = 20;

    return () => {
        let c = 40;

        return () => {
            return a + b + c;
        }
    }
}
console.log(fun6()()); //[Function: anonymous]
num = fun6()();
console.log(num()); //70



//forIn iterates over index
//forOf iterates over values (structure should be iterable)

let person = {
    "nm" : "anshika",
    "age" : 20,
    "educator" : "Btech"
};
for(let i in person){
    console.log(i);
}
// for(let i of arr){
//     console.log(arr[key]);
// }



//ARRAY METHODS : they all takes callback function
// -> map()
// -> filter()
// -> reduce()
// -> forEach()
let arr = [1, 2, 3, 4, 5];
// function mymap(item){
//     return item*3;
// }
// let newArr = arr.map(mymap);

// let newArr = arr.map((item) => { 
//     return item*3; 
// });

let mapArr = arr.map(item => item*3 );
console.log(mapArr);

let filterArr = arr.filter(item => item%2==0 )// 0 and 1 for true and false
console.log(filterArr);

let ans = arr.reduce((acc, currValue) => {
    acc = acc + currValue;
    return acc;
});
console.log(ans);

//map -> returns a new array
// foreach -> doesnt return a new array


/*question: given an array of numbers, filter out the even 
numbers then double the value of remaining numbers and then calculate their sum*/
let array = [15, 19, 20,22,18, 13, 16,11];
let ansArray = array.filter(item => item%2!=0).map(item => item*2).reduce((a, b) => a + b, 0);
console.log(ansArray);//116