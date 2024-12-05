console.log("hello")

//new Date().getTime() -> gives current time from the time when computers were legalised
// function waitASec(){
//     let currTime = new Date().getTime();
//     let futTime = currTime + 1000;

//     while(new Date().getTime()<futTime){
//         waitASec();
//     }
// }

// function waitNSec(n){
//     for(let i = 0; i < n; i++){
//         waitASec();
//     }
// }

// waitNSec(5);

// console.log("world")


//the task which requires more time is sent to side thread so that main thread is not blocked because of delay
//database operations or network calls takes time

//Asynchronous functions
//->set timeout : provides time delay, callback function, secs of delay is passed 
//-> setInterval : repeats after some given time interval
//->clearInterval
//-> Callback : execution order of async functions
//-> asyn await

setTimeout(() => {
    console.log("inside setTimeout");
}, 2000)

let id = setInterval(() => {
    console.log("data is fetched")
}, 1000)

setTimeout(() => {
    clearInterval(id)
}, 5000);

console.log("world");

((a, b) => {
    console.log(`SUM of a & b ${a + b}`);
})(2, 3)

let student = (function IIFE(){
    let marks = 90;

    function student(){
        details();
    }
    function details(){
        console.log(`percentage : ${(marks/100)*100}`)
    }
})();