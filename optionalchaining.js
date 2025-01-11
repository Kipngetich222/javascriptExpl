//provides the best way to access object properties, array elements,nested elemtnts etc
//returns undefined if property does not exist
const car = {
    brand: "Audi",
    model: "Q6",
    info: {
       price: 5000000,
       color: "Black",
    }
}

console.log(car.info?.price);
console.log(car.info?.shop);
