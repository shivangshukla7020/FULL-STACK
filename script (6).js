//Promise -> Object
// => creator
let  p = new Promise((resolve, reject) => {
    let a = 20;
    let b = 30;
    if(a + b > 55){
        resolve(a + b)
    }
    else{
        reject("Sum of a and b is less than 55.")
    }
})

//consumer
p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

//alternative method

const sum = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a + b > 55){
            return resolve(new Promise(() => {
                console.log(a + b);
            }))
        }
        else{
            return reject("Sum of a and b is less than 55.")
        }
    }) 
}

sum(50, 60).then((res) => {
    console.log(res);
}).then((res) => {
    
}).catch((err) => {
    console.log(err);
}).finally(() => {
    //clean up work  of code is done here
    console.log("Code executes finally.")
});

fetch("http://universities.hipolabs.com/search?country=United+States")
.then((res) => {
    return res.json();
}).then((data) =>{
    console.log(data);
}).catch((err) => {
    console.log(err);
})