let firstName = "joel"
console.log(typeof firstName)

let lastName = "d'souza"
console.log(typeof lastName)


let salary = 10000
console.log(typeof age)

let isMarried = true
console.log(typeof isMarried)

//let and const

// 1. let
// let fullName = "joel dsouza"
//  fullName = "anie dsouza"  // type error Assignment to constant variable.
// console.log(fullName)

// 2.const 

// const fn = "joel dsouza"
// fn = "anie dsouza"    // type error Assignment to constant variable.
// console.log(fn)

// comparision operator --->

//< , >= ,<= , > , !==, === , == ,!=

console.log('---------------------')

let ageJoel = '10'  //-----> consider sting to ''
let ageAnie = 10   //-----> consider number to without ''

console.log(typeof ageJoel)
console.log(typeof ageAnie)




console.log(ageJoel == ageAnie) // true
console.log(ageJoel === ageAnie)// false


//-----------------------------------
console.log(9 !== '9') // '9' -- 9 //True 
console.log(9 != '9')// False



let numOne = 10
let numTwo = 20


console.log('----------')
console.log(numOne + numTwo)
console.log(numOne - numTwo)
console.log(numOne * numTwo)
console.log(numOne / numTwo)

let numThree = 50
let numFour = 30
console.log('----------')
console.log(numThree + numFour)
console.log(numThree - numFour)
console.log(numThree * numFour)
console.log(numThree / numFour)
console.log('---------------------')

// Functions 
// Function declaration
// Function expression 
// Arrow function 

//M E A N       M E R N  -- //ES6


// Function declartion

// keyword function functionName
// function cal(numOne, numTwo) { // parameters
    
//      blocks 

//     console.log(numOne + numTwo)  // staments
//     console.log(numOne - numTwo)
//     console.log(numOne * numTwo)
//     console.log(numOne / numTwo)

// }

// cal(12,13) // function call , arguments (actual values)
// cal(30,40)

// console.log("-------------------")

// Functions 

// let x = 10
// let y = 20

// console.log(x + y)
// console.log(x - y)
// console.log(x / y)
// console.log(x * y)
// console.log(x % y)


// Functions 

// 1) Function declartion
// 2) Function Expression 
// 3) Arrow Function


//Function declartion


// keyword  functionName  (x,y) paramter
// function calculator(x, y) {

//     console.log(x + y)
//     console.log(x - y)
//     console.log(x / y)
//     console.log(x * y)
//     console.log(x % y)

        // statements

//}
// blocks

// Function calling 

// calculator(20,15) // arguments 
// console.log('****')
// calculator(100,50)


// Function 
// action --  instructions to be executed
// return -

// function declaration 

// function without paramter and without return type

// function add(){
//     console.log(8+9)
// }
// add()
// add()
// add()

// function with parameter and with return type 

// function add(x,y){
//     console.log(x+y)
// }
// add(10,5)
// add(20,8)

// 100 ---- 100 just show?

//function with parameter and with return type 
// maximum usage


function add(x,y){
    //console.log(x+y)
    return x+y
}

let sum1 = add(12,13)
console.log(sum1)
console.log(sum1 * 0.10)
console.log(sum1 * 2)
console.log(sum1 - 10)

// function without parameter  and  with return 
function piVal(){
    return 3.14
}

let valA = piVal()
console.log(valA)

// ----------------------------------->

// without parameter and without return type ---> function add()  {  console.log(8+9) }   add()

// with parameter without return type --->function add(x,y)  { console.log(x+y) }  add(10,5)

// with parameter with return type --->

function add(x,y){
    //console.log(x+y)
    return x+y
}

let sum = add(12,13)
console.log(sum)
console.log(sum * 0.10)
console.log(sum * 2)
console.log(sum - 10)

// without parameter with return type

function piVal(){
    return 3.14
}

let val = piVal()
console.log(val)

console.log("-------------------------")


//function declaration

function subtr(x,t){
    return x-t  // 90-70  -- 20
}
let y = subtr(90,70)
console.log(y) //  20
console.log(y + 20) // 40 


//function expression 

let sub = function (x,t){
    return x-t  

}
let j = sub(50,30)
console.log(j)

// arrow function 

let subO =  (x,t)=>{
    return x-t  

}
let k = subO(20,10)
console.log(k)


