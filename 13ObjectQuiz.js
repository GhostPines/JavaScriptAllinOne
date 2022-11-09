class clothes {
    constructor(name, color, size, price) {
        this.name = name;
        this.color = color;
        this.size = size;
        this.price = price;
    }

    printInfo(){
        console.log(`상품명 : ${this.name}, 색상 : ${this.color}, 사이즈 : ${this.size}, 가격 : ${this.price}`);
    }
}

const shirt = new clothes("셔츠", "검정", "L", 30000);
const pants = new clothes("바지", "검정", "L", 40000);
const shoes = new clothes("신발", "검정", "L", 50000);
const hat = new clothes("모자", "검정", "L", 60000);
const jacket = new clothes("자켓", "검정", "L", 70000);
const socks = new clothes("양말", "검정", "L", 80000);

shirt.printInfo();