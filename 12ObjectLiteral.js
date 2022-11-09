// 자바스크립트에서는 객체 리터럴을 활용해서 바로 객체를 만들 수도 있습니다. 
// 객체 리터럴은 클래스와 같은 템플릿 없이 빠르게 객체를 만들 수 있는 방법
// 2개 이상의 속성과 메소드가 있을 때는 
// 쉼표로 구별해주고 가독성을 위해서 
// 줄바꿈도 해주는 게 좋습니다.
    
//     const 변수명 = {
    
//     속성명: 데이터,
    
//     메소드명: function () { 메소드 호출시 실행할 코드들 }
    
//     }

const computer = {
	name: 'Apple Macbook',
	price: 20000,
	printInfo: function () {
		console.log(`상품명: ${this.name}, 가격: ${this.price}원`)
	}
}

computer.printInfo()