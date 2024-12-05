// Download book - > Unzipped - > Parse - > Upload on Website
// This is an asynchrous operation

// function downloadBook(unzipped){
//     setTimeout(()=>{
//         console.log("Book Downloaded");
//         unzipped(parsing);
//     },5000);
    
// }

// function unzipped(parsing){
//     setTimeout(()=>{
//         console.log("Book Unzipped");
//         parsing(readAnalyze);
//     },2000)
// }

// function parsing(readAnalyze){
//     setTimeout(()=>{
//         console.log("Book Parsed");
//         readAnalyze(upload);
//     },3000)
// }

// function readAnalyze(upload){
//     setTimeout(()=>{
//         console.log("Read and Analyzed");
//         upload();
//     },2000)
// }

// function upload(){
//     setTimeout(()=>{
//         console.log("Book Uploaded Successfully");
//     },1000)
// }


// We can also put all this function inside successively (called callback pyramid, callback hell)

function downloadBook(){
    setTimeout(()=>{
        console.log("Book Downloaded");
        setTimeout(()=>{
            console.log("Book Unzipped");
            setTimeout(()=>{
                console.log("Book Parsed");
                setTimeout(()=>{
                    console.log("Read and Analyzed");
                    setTimeout(()=>{
                        console.log("Book Uploaded Successfully");
                    },1000)
                },2000)
            },3000)
        },2000)
    },5000);
    
}


downloadBook();

