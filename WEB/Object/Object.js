let students = [
    {
        firstName:"Scott",
        age:25,
        skills:["python","javascript","css","jquery"]
    },
    {
        firstName:"mike",
        age:28,
        skills:["javascript","css"]
    },
    {
        firstName:"anie",
        age:27,
        skills:["python","javascript"]
    }

]

/*
console.log(students[0]['firstName'])    // returns first object firstname

console.log(students[2]['firstName']) // returns last object firstname

console.log(students[2]['skills'].length) //returns last objects skill
*/

// Average age of all students

for(let i = 0 ; i < students.length ;i++){
    if(students[i].age < 28){
        console.log(students[i].firstName)
    }
}

let sum = 0 

for(let i = 0 ; i < students.length ;i++){
    sum = students[i].age  + sum
}
console.log(sum/students.length)

console.log("----------------------------------------------------------")
// Name with skills
for(let i = 0 ; i < students.length ;i++){
    console.log(` ${students[i].firstName} : ${students[i].skills.length} `)
    // Scott : 4 mike:2 anie: 2
}
console.log("----------------------------------------------------------")

// Name of the person with jquery skill

for(let i = 0 ; i < students.length ;i++){
    if(students[i].skills.indexOf("jquery")>=0){
        console.log(students[i].firstName)
    }
}


console.log("----------------------------------------------------------")

class Person {

    fullName= null
    age= null
    rollNumber= null

}


let amol = new Person()
//console.log(amol)
amol.age = 29
console.log(amol)

let akshay = new Person()
//console.log(akshay)
akshay.language = "marathi"
console.log(akshay)


console.log("----------------------------------------------------------")
// Array 

let z = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < z.length; i++) {
    console.log(i)
    console.log(z[i])
}


console.log("----------------------------------------------------------")
employeeOne = {
    eName: "mark",
    designation: "supervisor",
    eId: 112005,
    age: 14,
    sal:10000
}

console.log(employeeOne['designation'])  // Dot notation or Bracket 
console.log(employeeOne.designation)

console.log("----------------------------------------------------------")


// Dot notation does work in loops


for (let key in employeeOne) {
    console.log(key, employeeOne[key])
}

console.log("----------------------------------------------------------")

// delete is used to delete some property
delete employeeOne.eName
console.log(employeeOne)

console.log("----------------------------------------------------------")

// function 
let j = [1, 2, 3, 4, 5, 6]

function printArr(arr) {

    //let arr = j
    arr[2] = 24
    console.log(arr)

}
printArr(j)
console.log(j)

console.log("----------------------------------------------------------")
let x = 10
function printX(y) {
    y = 30
    console.log(y) // 30
    console.log(x)
}
printX(x)
console.log(x)

console.log("----------------------------------------------------------")

var persond =[ {
    namee: "amol",
    age: 28
},
{
   namee:"akshay",
   age:29
}
]

function printObj(obj2) {
    obj2.namee = "aksh"
    console.log(obj2)     
    
}

function printObj(obj3) {
    
    obj3.namee = "amo"
     console.log(obj3)
}
console.log(persond) 
console.log("----------------------------------------------------------")
printObj(persond)
console.log("----------------------------------------------------------")
console.log(persond)