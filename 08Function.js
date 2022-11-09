// const priceA = 1000
// const priceB = 2000
// // 두 상품가격의 합과 평균을 구해서 출력해야 하는 코드 작성
// const sum1 = priceA + priceB
// console.log(`두 상품의 합계는 ${sum1}입니다.`)
// const avg1 = sum1 / 2
// console.log(`두 상품의 평균은 ${avg1}입니다.`)

// const priceC = 3000
// const priceD = 4000
// // 이번에도 두 상품가격의 평균을 구해서 출력해야 한다면? 위와 동일한 코드를 또 작성...
// const sum2 = priceC + priceD
// console.log(`두 상품의 합계는 ${sum2}입니다.`)
// const avg2 = sum2 / 2
// console.log(`두 상품의 평균은 ${avg2}입니다.`)

// // 한두번은 괜찮은데 이렇게 수십, 수백번씩 평균을 구하고 출력해야 한다면?

// // 함수의 선언
// function calculateAvg(price1, price2) {
// 	const sum = price1 + price2 // 매개변수인 price1, price2을 변수처럼 활용!
// 	console.log(`두 상품의 합계는 ${sum}입니다.`)
// 	const avg = sum / 2
// 	return avg // 평균가격을 리턴!
// }

// const priceA = 1000
// const priceB = 2000
// // 함수의 호출
// const avg1 = calculateAvg(priceA, priceB)
// console.log(`두 상품의 평균은 ${avg1}입니다.`)

// const priceC = 3000
// const priceD = 4000
// // 함수의 호출
// const avg2 = calculateAvg(priceC, priceD)
// console.log(`두 상품의 평균은 ${avg2}입니다.`)