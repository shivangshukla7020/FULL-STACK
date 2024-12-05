// function fun1(){
//     let a = 10; // This can also be accessed when fun2 is returned
//     let b = 20;
//     function fun2(){
//         let c = 40;
//         function fun3(){
//             return a+b+c;
//         }
//         return fun3;
//     }
//     return fun2; // It returns with it's lexical scope (parent scope)
// }

// // console.log(fun1())

// //let fun4 = fun1();

// console.log(fun1()()())

// Doing same using arrow function

function fun1(){
    let a = 10; // This can also be accessed when fun2 is returned
    let b = 20;
    return() =>{
        let c = 40;
        return() =>{
            return a+b+c;
        }
        //return fun3;
    }
    //return fun2; // It returns with it's lexical scope (parent scope)
}

// console.log(fun1())

//let fun4 = fun1();

console.log(fun1()()())

