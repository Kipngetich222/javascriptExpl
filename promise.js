const num = 10;

const promise = new Promise((resolve,reject) => {
    if (num == 15) {
        resolve("Promise is resolved successfully");
    } else {
        reject("Promise is resolved unsuccessfully");
    }
    
});

promise.then((message)=>{
    console.log("Inside the then() method");
    console.log(message);
        
}).catch((message)=>{
    console.log("inside the catch() method");
    console.log(message);
        
}).finally(()=>{
    console.log("inside the finally method");
    
});