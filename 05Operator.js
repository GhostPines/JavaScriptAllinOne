console.log(1 < 2) // 1이 2보다 작은가? true
console.log(2 <= 2) // 2가 2보다 작거나 같은가? true
console.log(1 > 2) // 1이 2보다 큰가? false
console.log(1 >= 2) // 1이 2보다 크거나 같은가? false


let isOnSale = true
let isDiscountItem = true

console.log(isOnSale && isDiscountItem) // true && true 이므로 true
console.log(isOnSale || isDiscountItem) // true || true 이므로 true

isOnSale = false
console.log(isOnSale && isDiscountItem) // false && true 이므로 false
console.log(isOnSale || isDiscountItem) // false || true 이므로 true

isDiscountItem = false
console.log(isOnSale && isDiscountItem) // false && false 이므로 false
console.log(isOnSale || isDiscountItem) // false || false 이므로 false

console.log(!isOnSale) // !false 이므로 true


console.log(1 === 1) // true
console.log(1 === 2) // false
console.log('Javascript' === 'Javascript') // true
console.log('Javascript' === 'javascript') // 대소문자나 띄워쓰기도 다 정확히 일치해야 해요. 따라서 false

// console.log(1 === "1") // false를 출력
// console.log(1 == "1" // true를 출력


let shoesPrice = 200000
let capPrice = 100000
let totalPrice = shoesPrice + capPrice

console.log(`총 ${totalPrice * 0.8}원에 물건을 구입합니다.`)