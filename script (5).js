function downloadBook(unzipped){
    setTimeout(()=>{
        console.log("book downloaded");
        unzipped();
    },5000)
}
//callback inside a callback is called pyramid of doom
function unzipped(){
    setTimeout(()=>{
        console.log("book unzipped");
        setTimeout(()=>{
            console.log("book parsed");
            setTimeout(()=>{
                console.log("book read and analyzed properly");
                setTimeout(()=>{
                    console.log("book uploaded successfully");
                },3000)
            },2000)
        },3000)
    },2000)
}


downloadBook(unzipped);