// Arithmetic operators 

let a = 15
console.log(typeof a)
let b = 30


// * - + / % (Modulus)

console.log(a + b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a - b)

//15%2 15

let p = 600
let q = 300


console.log('--------------------')
console.log(p+q)
console.log(p-q)
console.log(p*q)
console.log(p/q)
console.log(p%q)


// keyword  //function name
function cal(a, b) {  // parameter  // curly blocks 
    // statemetns
    console.log(a + b)
    console.log(a * b)
    console.log(a / b)
    console.log(a % b)
    console.log(a - b)
}
cal(20,5)  // function calling  -- // arguments 
console.log('*********')
cal(50,25)




// function declartion 


function greeting(name){
    console.log(`Welcome ${name} !!`)
}
greeting("amol")


// //Functions

// // function with out parameter and without return type

function addOne(){
    console.log(7+8)
}
addOne()
addOne()
addOne()
console.log("---------------------------")
//function  with parameter and without return type 
function add(x,y){
    console.log(x+y)  // 25 // 400
}

let radd = add(12,13)

add(100,300)
console.log("---------------------------")
// // Function with parameter and with return type 


function addTwo(x,y){
    console.log(x+y)
    return x+y
}

addTwo(10,11)

//console.log(c)

console.log("---------------------------")

// function without parameter and with return type

function piValue(){
    return 3.14
}
let y = piValue()
console.log(y)


console.log("---------------------------")
function add(p,q){
    return  p + q
}
let u = add(100,203)
console.log(u)


// function expression


let plus = function(x,y){
    return  x + y
}
let z = plus(100,150)
console.log(z)

// 

// Arrow function

let plusOne = (l,m)=>{
    return  l + m
}
let n = add(70,20)
console.log(n)

console.log("---------------------------")
// let minus = function(p,q){
//     return p-q
// }
// let r = minus(17,13)
// console.log(r)

let mynus = (x,y)=>{
    return x-y
}
let s = mynus(18,12)
console.log(s)

console.log("---------------------------")
function sub(x,y){
    return x-y
}
let o = sub(25,15)
console.log(o)

console.log("---------------------------")

// Arrow function if consist of only one statement , we can remove blocks as well as //return keyword

// let sub = (x,y)=>x-y  // statements
// let y = sub(12,13)
// console.log(y)


// ---------------------------------------->


// let cal = function(a,b){
//     console.log(a+b)
// }
// //cal(23,24)

// // let u = 10
// // console.log(u)



// console.log(cal)
// cal(12,13) // 25


// passing function as a parameter to another function




let  add = function(x,y){
    return x + y
}

//add(12,13)

// let fn = function(x,y){
//     //console.log(x+y)
//     return x + y
// }



function cal(fn){

    // function(x,y){
    //     return x + y
    // }

    let adda = fn(12,13) // 25
    return adda  // 25
}
let y = cal(add)
console.log(y)
