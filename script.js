//print odds 1-20
for(let i = 1; i<=20; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
} 

//decreasing multiples of 3
for(let i = 100; i > 0; i--){
    if(i % 3 == 0){
        console.log(i)
    }
}

//print the sequence
for(let i = 5.5; i > -4; i -= 1.5){
    console.log(i)
}

//sigma = add all values from 1-100
let sum = 0;
for(let i=1; i <= 100; i++){
    sum += i
}
console.log(sum)

//factorial = multiply values from 1-12
let product = 1
for(let i = 1; i <=12; i++){
    product *= i
}
console.log(product)