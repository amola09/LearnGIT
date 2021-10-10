// date:24.09.2021

// BASIC

let x = 10 
console.log(x)
x = 20 
console.log(x)


const  r1 = 40 
console.log(r1)
//r1 = 50 // tupe error- Assignment to constant variable

// Arithmetic 

console.log("---------------------------")
let a = 10 
let b = 5 

console.log(a+b) // 15
console.log(a-b) // 5
console.log(a*b) // 50
console.log(a/b) // 2

console.log("---------------------------")

let ba  = 45
let ab  = 44


console.log(ba+ab) // 15
console.log(ba-ab) // 5
console.log(ba*ab) // 50
console.log(ba/ab) // 2


// DRY  Donot  repeat yourself 
// keyword functionNme --- parameter
// function calculator(x,y){  // blocks


//     console.log(x+y)    
//     console.log(x-y)    
//     console.log(x*y)    
//     console.log(x/y)   
//     // statements

// function without parameter and without return 
function add(){
    console.log(5+5)
}
add()
add()
add()

// function with parameter and without return type
function sub(x,y){
    console.log(x-y)
}
sub(100,50)
sub(1000,50)

// function with parameter and with return 

// 100 ------- 100(show)

function mul(x,y){
    console.log(x*y)
    return x*y
}
console.log("--------------------------")
let g1 = mul(12,12)
console.log(g1)
console.log(g1+100)