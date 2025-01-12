async function solvePromise(){
    const promise = new Promise((resolve, reject)=>{
        reject("the promise is rejeted");
    })

    try {
        const result = await promise;
        console.log("inside try block");
        console.log(result);
        
        
    } catch (error) {
        console.log("inside catch");
        console.log(error);
        
        
    }
}

solvePromise();