// const shoesPrice = 40000
// if (shoesPrice < 50000) { // 신발 가격이 50000원보다 작으므로 해당 코드가 실행됨
// 	console.log('신발을 사겠습니다.')
// }

// const capPrice = 50000
// if (capPrice < 50000) {
// 	console.log('모자를 사지 않겠습니다.') // 모자 가격이 50000원보다 작지 않으므로 해당 코드가 실행되지 않음
// }



// const shoesPrice = 50000
// if (shoesPrice < 40000) { 
// 	console.log('신발을 사겠습니다.')
// } else {
// 	console.log('너무 비싸요. 신발을 사지 않겠습니다.') // 신발 가격이 40000원보다 작지 않으므로 해당 코드가 실행됨
// }


const shoesPrice = 50000
if (shoesPrice < 40000) { 
	console.log('신발을 사겠습니다.')
} else if (shoesPrice <= 50000) {
	console.log('고민을 해볼게요...')  // 신발 가격이 50000원보다 작거나 같으므로 않으므로 해당 코드가 실행됨
} else {
	console.log('너무 비싸요. 신발을 사지 않겠습니다.')
}