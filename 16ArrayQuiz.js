const priceOfProduct = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000];
sum = 0;

for (let i = 0; i < priceOfProduct.length; i++) {
    // console.log(priceOfProduct[i]);

    sum += priceOfProduct[i];
    
}
console.log(sum);
let avg = sum / priceOfProduct.length + 1;
console.log(avg);


// const priceList = [1000, 2000, 5000, 7000, 10000, 9000, 3000, 15000, 20000, 17000]
// let sum = 0

// for (const price of priceList) {
// 	sum += price
// }

// const avg = sum / priceList.length
// console.log(`합계: ${sum}, 평균: ${avg}`)
