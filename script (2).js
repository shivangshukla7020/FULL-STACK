//higher-order-function
function calculator(sum, sub, mul, div){
    let a = 20;
    let b = 10; 
    console.log(sum(a, b));
    console.log(sub(a, b));
    console.log(mul(a, b));
    console.log(div(a, b));
}

//callback functions
function sum(a, b){ 
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}

calculator(sum, sub, mul, div);
console.log("\n");

function calculator1(a, b, sign, sum, sub, mul, div){
    if(sign == '+'){
        console.log(sum(a,b));
    }
    if(sign == '-'){
        console.log(sub(a,b));
    }
    if(sign == '*'){
        console.log(mul(a,b));
    }
    if(sign == '/'){
        console.log(div(a,b));
    }
}

calculator1(20, 5, '+', sum, sub, mul, div);
calculator1(20, 5, '-', sum, sub, mul, div);
calculator1(20, 5, '*', sum, sub, mul, div);
calculator1(20, 5, '/', sum, sub, mul, div);

//callback functions beneficial in APIs as they make the higher order functions wait until they run and provide an outpu
//tasks on wait till APIs provide the executable data

//JS excutes code in a thread format, excutes line by line, skips the line taking more time to execute