class car {
    constructor(brand, model, year, price, type) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.type = type;
    }
}

let car1 = new car("BMW", "M3", 2019, 50000000, "Sedan");
let car2 = new car("BMW", "M5", 2019, 60000000, "Sedan");
let car3 = new car("BMW", "M6", 2019, 70000000, "Sedan");
let car4 = new car("BMW", "M7", 2019, 80000000, "Sedan");
let car5 = new car("BMW", "M8", 2019, 90000000, "Sedan");
let car6 = new car("Mercedes", "C", 2019, 50000000, "Sedan");
let car7 = new car("Mercedes", "B", 2019, 60000000, "Sedan");
let car8 = new car("Mercedes", "A", 2019, 70000000, "Sedan");
let car9 = new car("Mercedes", "E", 2019, 80000000, "Sedan");
let car10 = new car("Mercedes", "S", 2019, 90000000, "Sedan");

console.log(car1);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);
console.log(car1.price);
console.log(car1.type);


