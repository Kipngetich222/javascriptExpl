//object deconstructuring

// const watch = {
//     brand: "Titan",
//     price: 6000,
//     color: "Pink",
//     dial: "Round",
//  }
//  const { brand, price } = watch;

//  console.log(brand, price);
 

 //array deconstructuring
//  const arr = [100, 500, 1000];
    
//  const [num1, num2, num3] = arr;

//  console.log(num1, num2, num3);
 


 //nested array deconstruction
 const car = {
    brand: "Hyundai",
    model: "Verna",
    info: {
       price: 1200000, // Nested properties
       color: "white",
    }
 }
 const { brand, model, info: { price, color } } = car; // Destructuring

 console.log(model, price);
 