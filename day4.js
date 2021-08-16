/* function declaration */


function add(x,y){ 
    console.log(x+y) //staments 2
    return x + y  // staments 2
}// blocks 

let a = add(20,50) //passed aruguments outside the fuction
// console.log(a) 

console.log("---------------------")

// function declaration
function add(a,b){
    console.log(a+b) 
}

let c = add(12,13) // arguments


console.log("---------------------")

// Function expression 


let addOne = function (j, k) {
    console.log(j + k)

}

let val = addOne(11,33) // arguments


console.log("---------------------")

// Arrow

let addTwo =  (l, m) =>  l + m
let t = addTwo(22, 33) // arguments
console.log(t)



//DRY -- Donot repeat yourself


let sum = function(x,y){
    return x+y
}



console.log("---------------------")

// function as a parameter to another function 

let fn = function(p,q){
    return p+q
}

function addThree(fn){
    let g =  fn(12,13)
    return g
}


// Length -1 gives you the last index
let students = ["Amol","Akshay","Amit","Arjun","Ram"]
console.log(students[3])
let z = students.length
console.log(z)
console.log(students[z-1])

