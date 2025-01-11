// Parent class
// class Bike {
//     constructor(gears) {
//        this.gears = gears;
//    }
//  }
//  // Child class
//  class suzuki extends Bike {
//     constructor(brand, gears) {
//        super(gears);
//        this.brand = brand;
//     }
//  }
//  const suzukiBike = new suzuki("Suzuki", 4);

//  console.log(suzukiBike.brand);
//  console.log(suzukiBike.gears);
 


 //multilevel inheritance
 // Parent class
 class Bike {
    constructor(gears) {
       this.gears = gears;
    }
 }
 // Child class
 class Honda extends Bike {
    constructor(brand, gears) {
       super(gears);
       this.brand = brand;
    }
 }
 class Shine extends Honda {
    constructor(model, brand, gears) {
       super(brand, gears);
       this.model = model;
    }
 }
 const newBike = new Shine("Shine", "Honda", 5);

 console.log(newBike.model, newBike.brand, newBike.gears);
 
 