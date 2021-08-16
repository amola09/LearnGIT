// Array

// Number array

let numbers = [11,33,77,55,71,89]
// String 
let name = ["apple","grapes","mango"]
// Boolean 
let isPassed = [true , false , true , false]
// Mixed 
let pname = ["amol","akshay",77,"Hindi","Marathi"]

// Arrays stores the value by index
console.log(name[0])
console.log(name[1])
//--------------------------------------

// Intialization     //Condition           // Increment
for(let i = 0 ; i < pname.length ;i++){
    //console.log(i)
    console.log(pname[i])  // print
}
// Reverse the array

// person.length - 1  will always be lastIndex 
for(let i = pname.length-1; i >=0 ;i --){
        //console.log(i)
        console.log(pname[i])
}
// Slicing in array 
// 2 Dimensional array
let pername = ["akshay","karan",29,["python","javascript","css"],["Hindi","Marathi"]]

console.log(pername[4][1])
let lan = pername[4]
console.log(lan[1])
console.log(pername[3].length)

Slicing 

let languages = ["Marathi","Hindi","Urdu","Telugu","English"]
// slice --- return array  ----- start,end (not included)
console.log(languages.slice(0,3))
console.log(languages.slice(1,3))
console.log(languages.slice(3,5))
console.log(languages.slice(1,))

Push ---  add element at the  end of array and returns the new length 
undefined
let v = languages.push("Spanish")
console.log(languages)
console.log(v)

// Pop

let u = languages.pop()
console.log(languages)
console.log(u)

// unshift

let added = languages.unshift('French')
console.log(languages)
console.log(added)

//  shift

let rm = languages.shift()
console.log(languages)
console.log(rm)













