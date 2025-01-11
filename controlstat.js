//for loop
for (let step = 0; step < 5; step++){
    console.log("walking");
    
}


//for in
let output = "";
let car = {
    brand: "OD",
     model: "Q7",
     color: "Black",
}

for (key in car) {
    output += `${key}  ${car[key]} <br>`;
}
console.log(output);
