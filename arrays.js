const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

//accessing and modifying arrays
shopping[0] = "tahini";

//finding index of item
// console.log(shopping.indexOf("milk")); 
// console.log(shopping.indexOf("Rabbit"));

//adding item at the end of arry and removing
// shopping.push("ovacado", "nyama");
// shopping.pop();

//removing the first element
// shopping.shift();

//removing element with index
// shopping.splice(1, 2);

//accesiing every item in an array
// for (const item in shopping){
//     console.log(item);
    
// }

//map
function double(number) {
    return number * 2;
}
const numbers = [5, 4, 2, 6];
const mappped = numbers.map(double);
// console.log(mappped);


//filter
function isLong(city) {
    return city.length >= 5;
}
// const cities = ["nairobi", "china", "mb", "Kwale", "mombasa"];
// const longer = cities.filter(isLong);
// console.log(longer);


// console.log(shopping);


//strings
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(",")
// console.log(cities);
// console.log(cities.length -1);
const arrayedcities = cities.join(",");
console.log(arrayedcities);

