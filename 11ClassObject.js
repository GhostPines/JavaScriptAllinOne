class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    printInfo(){
        console.log(`상품명 : ${this.name}, 가격 : ${this.price}`);
    }
}



const laptop = new product("MacBook Pro", 3000000);

console.log(laptop); // product { name: 'MacBook Pro', price: 3000000 }

laptop.printInfo(); // 상품명 : MacBook Pro, 가격 : 3000000