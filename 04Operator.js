const shoesPrice = 200000;
console.log("이 신발의 가격은 " + shoesPrice + "원 입니다.");
console.log(`이 신발의 가격은 ${shoesPrice}원 입니다.`);  // 백틱! 템플릿 리터럴

console.log(2 + 1) // 3을 출력
console.log(2 - 1) // 1을 출력
console.log(4 / 2) // 2를 출력
console.log(2 * 3) // 6을 출력
console.log(10 % 3) // 나머지(remainder) 연산자. 1을 출력
console.log(10 ** 2) // exponentiation. 10의 2승인 100을 출력

let count = 1
const preIncrement = ++count
// 증감연산자를 앞에 놓게 되면 아래 주석으로 처리한 두 줄의 코드와 같은 내용입니다.
// 먼저 자기 자신에게 1을 더해서 재할당 한 후, 이를 preIncrement 에 할당했다는 의미입니다.
console.log(`count: ${count}, preIncrement: ${preIncrement}`) // count: 2, preIncrement: 2


// let count = 1
// const postIncrement = count++
// // 증감연산자를 뒤에 놓게 되면 아래 주석으로 처리한 두 줄의 코드와 같은 내용입니다.
// // postIncrement에 자기 자신의 값을 먼저 할당하고, 이후에 1을 더해서 재할당합니다. 
// // const postIncrement = count
// // count = count + 1
// console.log(`count: ${count}, postIncrement: ${postIncrement}`) // count: 2, postIncrement: 1 

const shirtsPrice = 100000
const pantsPrice = 80000
let totalPrice = 0
totalPrice += shirtsPrice // totalPrice = totalPrice + shirtsPrice 와 동일
console.log(totalPrice)
totalPrice += pantsPrice // totalPrice = totalPrice + pantsPrice 와 동일 
console.log(totalPrice)
totalPrice -= shirtsPrice // totalPrice = totalPrice - shirtsPrice 와 동일
console.log(totalPrice) 


