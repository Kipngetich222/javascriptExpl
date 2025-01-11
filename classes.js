// function Car(brand) {
//     this.brand = brand;
// }

// const carObj = new Car("Audi");
// console.log(carObj);

// console.log(typeof(Car));
 

//classes
//constructors with arguments
// class Car {
//     constructor(brand, model, price, year) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//         this.year = year;
//     }
// }
// const carObj = new Car("BMW", "X5", 9800000, 2019);

// console.log(carObj.brand);
// console.log(carObj.model);



//methods in classes
class Car {
    constructor(brand, model, price, year) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.year = year;
    }

    updateprice(newPrice) {
    this.price = newPrice;
    }
}

const myCar = new Car("BMW", "X5", 9800000, 2019);


console.log("old price is: ", myCar.price);

myCar.updateprice(750000)
console.log("updated price", myCar.price);

