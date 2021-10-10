let names = ["Akshay","Amol","Amit"]
console.log(names.length)


//Action  :- add the element at last
// Return :- new length of string (number)

// push 
let r = names.push('Akash')
console.log(names)
console.log(r)
console.log("-----------------------------------------------------")
// POP
//Action  :- removes the last element
// Return :- returns the removed element

let f = names.pop()
console.log(names)
console.log(f)
console.log("-----------------------------------------------------")
//Unshift
//Action  :- at the element at beginning of arrat
//Return :-  returns the new length of array

let c = names.unshift("Rudra")
console.log(names)
console.log(c)
console.log("-----------------------------------------------------")

//Shift
//Action  :- at the element at beginning of array
//Return :-  returns the new length of array

let d = names.shift()
console.log(names)
console.log(d)
console.log("-----------------------------------------------------")

// pop push shift unshift

// --------------------------Array--------------
//Action  :- to find the index of given element
//Return :-  returns the index if found else return -1




let fruits = ["apple","mango","banana","grapes"]
/*let ee = fruits.indexOf("apple")
let xx = fruits.indexOf("chiku")
console.log(xx)
console.log(ee) */

 let userInput = "apple"
if(fruits.indexOf(userInput) >= 0){
    console.log('Fruit available')
}
else{
    console.log('Not available')
}

fruits = ["apple","mango","banana","grapes"]

// Action -- reverse the array
// Returns -- returns the same array

// reversed
let s = fruits.reverse()
console.log(fruits)
console.log(s)

console.log("-----------------------------------------------------")

// // sort 


let num = [1,2,3,44,2,3,44,5,77,88,99,-23]
num.sort()
console.log(num)
console.log("-----------------------------------------------------")

let nm = ["abhisha","chinmay","avinash","aara","zoya","chetan"]
nm.sort()
console.log(nm)
console.log("-----------------------------------------------------")
// Not work in case of mixed array

// push pop shift unshift indexOf reverse sort flat

// flat 

let bn = [[22,33,44],[55,66,77],[88,99,100]]
// [22,33,44,55,66,77,88,99,100]

console.log(bn[0][2])
console.log(bn[2][2])
let na = bn.flat()
console.log(na)
console.log("-----------------------------------------------------")

// includes - true

//Action - search the element inside array 
// Boolean -- if found then true else false

let flowers = ["lily",'jasime',"mogra"]
let eh = flowers.includes('Lily')
console.log(eh)
console.log("-----------------------------------------------------")
// join

let sss = flowers.join('--')
console.log(sss)
console.log(typeof sss)

console.log("-----------------------------------------------------")

// // // Methods 
// // //Action -- addition of two numbrs
// // // Return --number

// // function add(x,y){
// //     return x+y
// // }
// // let b = add(12,13)
// // console.log(b)



let namesOne = ["chinmay", "rahul", "mayuri"]
console.log(namesOne[0])


// push 

// Action : - add the element at last 
// Return :- length of array

let aa = namesOne.push("ram")
console.log(aa)
console.log(namesOne)
console.log("-----------------------------------------------------")
//["chinmay","rahul","mayuri","ram"]


// pop

// Action:- removes the element from  last 
// Return :- removed element only
let bb = namesOne.pop()
console.log(bb)
console.log(namesOne)
console.log("-----------------------------------------------------")
// unshift 
// Action : - Add the element at the beginning
// Return : - New length of array


let cc = namesOne.unshift("maria")
console.log(namesOne)
console.log(cc)
console.log("-----------------------------------------------------")
// shift
// Action : - Removes the element from the beginning
// Return : - removed element only

let dd = namesOne.shift()
console.log(namesOne)
console.log(dd)
console.log("-----------------------------------------------------")
let fruitsOne = ["Flowers", "Lotus", "Sunflower", "Lily"]
// Indexof
// Action : - Find the index of element
// Return : - If element found then index else -1

let ee = fruitsOne.indexOf("Lotus")
console.log(ee)

let ff = fruitsOne.indexOf("MaryGold")
console.log(ff)

console.log("-----------------------------------------------------")
// Join

// Action :- joins element of array on parameter 
// return : -  string

let gg = fruitsOne.join("_")
console.log(gg)
console.log(typeof gg)

console.log("-----------------------------------------------------")
// Includes --

// Action :- search for the element 
// return :- if found then true else false (Boolean)

fruitsTwo = ["Flowers", "Lotus", "Sunflower", "Lily"]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 33, 44, 11, 44, 6667, -1]
let hh = fruitsTwo.includes("Lotus")
console.log(hh)
console.log("-----------------------------------------------------")
// sort

let ii = fruitsTwo.sort()
console.log(ii)

numbers.sort()
console.log(numbers)
console.log("-----------------------------------------------------")
// reverse

// Action :- reverse all the elements of the array
// return :- returns the array

let animals = ["cat", "dog", "monkey"]
let jj = animals.reverse()
console.log(animals)
console.log(jj)
console.log("-----------------------------------------------------")

//flat

let twoD = [[1, 2, 3], [44, 55, 66], [99, 67, 88]]
console.log(twoD[1][1])


//Actions  : combines all element into single array
//Returns : array only
let kk = twoD.flat()
console.log(kk)

console.log("-----------------------------------------------------")


///------   Functions --------------------------


// function add(x,y){
//     console.log(x+y)  //??
//     return x + y 
// }

// let g = add(12,13)
// console.log(g)  //?


// let add = 


// fn = add 

// fn = function(x,y){
//     return x+y
// }


// function as a parameter to another function

// function addB(fn){
//     let r =  fn(12,13)
//     return r
// }

// let mm = addB(add)
// console.log(mm)


// console.log(add) // printing function
// add(12,133) // calling function
//pop  push shift unshift reverse indexOf flat join sort includes 

// -----------program one



let birthYear = [1990, 1989, 2001]
let ages = []

//console.log(2021-1990)
// [31,32,20]

for (let i = 0; i < birthYear.length; i++) {
    // console.log(i)
    //console.log(2021 -birthYear[i])
    let age = 2021 - birthYear[i]
    ages.push(age)

}

console.log('---Ages--------')
console.log(ages)

console.log("-----------------------------------------------------")


//-------------------------------------
// program -2 filter


let ages2 = [11, 13, 15, 16, 44, 34, 55, 56, 23, 44, 66]
//[] // obove 
let above25 = []
for (let i = 0; i < ages2.length; i++) {
    if (ages2[i] > 25) {
        above25.push(ages2[i])
    }
}

console.log(above25)
//console.log(7>8)

console.log("-----------------------------------------------------")

// program - 3


let marks = [22, 33, 44]

let sum = 0

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]  // sum --> 22--> 55
}
console.log(sum / marks.length)


console.log("-----------------------------------------------------")




// Map
birthYear = [1990, 1989, 2001]
//[31,32,20]
let xx = birthYear.map(function (el, index, arr) {
    //console.log(el,index,arr)
    return 2021 - el
})
console.log('------Map--------')
console.log(xx)


console.log("-----------------------------------------------------")

// Filter
ages2 = [11, 13, 15, 16, 44, 34, 55, 56, 23, 44, 66]
let rrrr = ages2.filter(function (el, index, arr) {
    return el > 25
})
console.log(rrrr)


console.log("-----------------------------------------------------")

marks = [22, 33, 44]
// Reduce
let jkl = marks.reduce(function (sum, el, index, arr) {
    return sum + el
}, 0)
console.log(jkl / marks.length)

console.log("-----------------------------------------------------")

//------------------------
let transactions = [13, 14, 55, -56, 66, -88, 99, 150, 556, -131]

// deposit 
// withdrawl

// filter and reduce


transactions = [13, 14, 55, -56, 66, -88, 99, 150, 556, -131]

//[13,14,55,66,99,150,556]
//[-56,-88,-131]
// filter reduce


//filter - Array 
// reduce - single

let depoist = transactions.filter(function (el, index, arr) {
    return el > 0
}).reduce(function (acc, el) {
    return el + acc
}, 0)

let withdrawl = transactions.filter(function (el, index, arr) {
    return el < 0
}).reduce(function (acc, el) {
    return el + acc
}, 0)
console.log(depoist, withdrawl)


console.log("-----------------------------------------------------")

//"akshay".toUpperCase().toLowerCase().length.toUpperCase()

// let depoist = transactions.filter((el) => el > 0)
//     .reduce((acc, el) => el + acc, 0)

// let withdrawl = transactions.filter((el) => el < 0)
//     .reduce((acc, el) => el + acc, 0)

// console.log(depoist, withdrawl)

// push pop unshift  shift join filer map reduce reverse sort join indexOf includes

// flat


//forEach

let students = ["Akshay", "akash", "amol", "amit"]
//'Welcome Akshay!'
let jkllk = students.forEach(function (el, index, arr) {
    console.log(`welcome ${el}!`)
})
console.log(jkllk)


console.log("-----------------------------------------------------")
// ---->


let students2 = [

    {
        fullName: 'amol',
        age: 30

    },

    {
        fullName: 'amit',
        age: 27

    },

    {
        fullName: 'akshay',
        age: 28,
        skills: ["python", "javascript", "c++"]


    },

    {
        fullName: 'annie',
        age: 27,
        skills: ["python", "javascript", "c++"],
        parents: {
            father: "eren",
            mother: "lily"
        }

    }

]
console.log(students2[3].parents.mother)
students2[3].parents.sister = "raven"
console.log(students2[3])



console.log("-----------------------------------------------------")

let students3 = [
    { fullName: 'scott', age: 30},
    { fullName: 'angel', age: 23 },
    { fullName: 'amira', age:33 }

]

console.log("-----------------------------------------------------")
// find
let gfgf = students3.find(function(el){
    return el.fullName == "am"
})
console.log(gfgf)

// find

let gfga = students3.findIndex(function(el){
    return el.fullName == "amit"
})
console.log(gfga)
// forEach find findindex


// every some ----> boolean true or false


let numbes = [33,43,55,66,77,23,22]

let rrrrr = numbes.some(function(el,index,arr){
    return el > 70
})
console.log(rrrrr)

let rrrrra = numbes.every(function(el,index,arr){
    return el > 70
})
console.log(rrrrra)

let rrrrrab = numbes.every(function(el,index,arr){
    return el > 10
})
console.log(rrrrrab)


// concat 

let qaq  =  [1,2,3]
let aqa = [4,5,6]
let wew = aqa.concat(qaq)
console.log(wew)

console.log("-----------------------------------------------------")


let ssss = [2,3,5,6,6,7,8]
//sss.slice(startposition,endposition) (not included)
// let rer = sss.slice(1,sss.length)
// console.log(rer)


// splice(startpositon,numofElementsDele,add1, add2)
let hha = ssss.splice(1,2,23,24,34,35,35,35,3555)
console.log(hha)
console.log(ssss)

console.log("-----------------------------------------------------")
// let s = 10
// console.log('s')
// console.log(s)
// console.log(students2[1]['fullName'])
// console.log(students2[1].fullName)
// console.log(students[2].skills.length)


let j = [33,44,55,66,77,88,99]

console.log(j[0])
console.log(j[3])


for(let i = 0 ; i < j.length ; i++ ){
    //console.log(i)
    console.log(j[i])
}


let a = {a:23,b:34}



