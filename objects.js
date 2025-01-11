// function Book(title, auther) {
//     this.title = title;
//     this.auther = auther;
// }

// const myBook =new Book("The Perl", "Ken Walibora");

// console.log(myBook.title, "Author:", myBook.auther);
// console.log();



//methods
function addPrice(amount) {
    this.price = amount;
}

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.addPrice = addPrice;
}

var myBook = new Book("Perl", "Ken");
myBook.addPrice(150);

console.log(myBook.title);
console.log(myBook.author);
console.log(myBook.price);
