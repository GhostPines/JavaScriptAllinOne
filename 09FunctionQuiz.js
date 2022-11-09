function valuesum(value1, value2, value3) {
    return value1 + value2 + value3;
}

function valueavg(value1, value2, value3) {
    return valuesum(value1, value2, value3) / 3;
}

let question1 = 0;
question1 = valuesum(3000, 4000, 5000);
console.log(`상품 합계 : ${question1}`);

let question2 = 0;
question2 = valueavg(3000, 4000, 5000);
console.log(`상품 평균 ${question2}입니다.`);

function calculateAvg(price1, price2, price3) {
	const avg = (price1 + price2 + price3) / 3
	return avg
}

const priceA = 1000
const priceB = 2000
const priceC = 3000
const avg = calculateAvg(priceA, priceB, priceC)
console.log(`평균가격: ${avg}`)