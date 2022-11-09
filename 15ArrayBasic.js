const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

rainbowColors.push('ultraviolet') // 배열의 마지막에 ultarviolet 추가
console.log(rainbowColors) // ultraviolet이 추가된 rainbowColors 출력

rainbowColors.pop() // 배열의 마지막 요소 ultraviolet을 제거
console.log(rainbowColors) // ultraviolet이 제거된 rainbowColors 출력

for (let i = 0; i < rainbowColors.length; i++) {
	console.log(rainbowColors[i])
}