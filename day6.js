// We can re-assign value to the varibale defined with let keyword

let sal = 1000;
console.log(sal)
sal = 30
console.log(sal)
console.log("----------------------------")

//We cannot the re-assign the value to memory defined  const keyword

const year = 2021
console.log(year)
//year = 2022  //TypeError: Assignment to constant variable.
//console.log(year)
console.log("----------------------------")

// var

let firstName = "Joel"
console.log(firstName)

// Comments in javascript 

// well commented for others to understand
// to comment unwanted code 

/*

    This is multi - line comment

*/
// This is single line comment



// How to find the type of variable in js 


// Number  -- type --- (properties and methods)
let age = 10
console.log(typeof age)

// String  -- type --- (properties and methods)
let lastName = "dsouza" 
console.log(typeof lastName)

// Boolean -- type --- (properties and methods) // true or false
let isAbove18 = true
console.log(typeof isAbove18)

// Person -- type --- (properties and methods)

// properties - age ,color, name
// methods - walk() , talk()

// Bank type  (properties and methods)
// properties - accountNo.
// Methods - withdraw , depoist

//----------------------------------------------------

// Float value is also Number in javascript
let average  = 10.23
console.log(typeof per)

//------------------------

// Additio of number

let numberOne = 20
let numberTwo = 12 
console.log(numberOne + numberTwo)

// Addition of String

let numberThree = '74'
let numberFour = '12'
console.log(typeof (numberThree * numberFour))  // 1020

// Explicit and Implicit

let firstNamea = "mark"
let lastName2 = "angel"
console.log(firstNamea+" "+lastName2)

// Es6 string interpolation 

// backtick `
console.log(`My name is ${firstNamea} and my lastName is ${lastName2}`)
