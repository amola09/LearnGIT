let names=["akshay","amit","amol","chinmay"]
// array also stores the value by index
console.log(names[0])

// for loop to prints every element
console.log('------------------')
for(let i=0 ; i<names.length;i++){

    console.log(names[i])
}


// push
nameg =["akshay","amit","amol","chinmay"]

let h =nameg.push("aviraj") // add element to last
console.log(h) 
console.log(nameg)
console.log("------------------------")
// pop

let g =nameg.pop()  // removes last element
console.log(g)
console.log(nameg)
console.log("------------------------")
// unshift

let e = nameg.unshift("ram","shyam") // add one or more element on starting position and returns length of array
console.log(e)
console.log(nameg)
console.log("------------------------")

// shift
let d = nameg.shift("ram") //remove start element from array and returns removed element to console
console.log(d)
console.log(nameg)


// includes

let browser = ["mozila_firefox","chrome","safari","internet_explorer"]
let r = browser.includes("chrome") // return included element from array list
console.log(r)
 //                    0        1       2          3
browser = ["mozila_firefox","chrome","safari","internet_explorer"]
//                     -4      -3      -2         -1

let gg = browser.indexOf("safari") // shows index of array element

console.log(gg)


console.log(browser.slice(1,3))

console.log(browser.slice(0,2))

console.log(browser.slice(-4,))// returns all element from array 

console.log(browser.slice(-2,-4)) // returns blank because start point

let haa = [11,33,22,2,9]
//let hss = haa.sort()
//console.log(hss)
console.log(haa.sort())

var arr=[2,5,8,1,4]
console.log(arr.sort())  // sort array elements in ascending order
console.log(arr.reverse()) // reverse the given array elements


let j = ["devloper","tester","scrum_master","hr"]

console.log(j.sort())

// sort numbers in ascending
let numbers = [11,2,3,44,32]
numbers.sort(function(a,b){

    return a-b
})

console.log(numbers) //[2,3,11,32,44]
console.log("-------------------------------")

// sort letters in ascending
var letters = ["r","s","a","c","m"]

letters.sort()

console.log(letters)

console.log("-------------------------------")

// desceneding order

var f =[4,5,3,6]

f.sort(function(a,b){

    return b-a
    
})
console.log(f)

console.log("-------------------------------")

// Date: 16.09.2021


//                 0         1             2           3         4 

let festival = ["diwali","dusherra","gudhi_padwa","Christmas","moharam"]
//                 -5         -4        -3            -2      -1

console.log(festival[0])
console.log(festival.indexOf("dusherra"))
console.log(festival.slice(1,4))
console.log(festival.slice(2,5))
console.log(festival.slice(-4,5))
console.log(festival.slice(-5))
console.log(festival.slice(-4,-5))

// pop push shift unshift indexOf includes slice 
// action return 

let fruits = ["mango","grapes","chiku"]

console.log(fruits[0])

for(let i=0; i < 3;i++)
{
    console.log(fruits[i])
}

let userInput="watermelon"

for(let i=0 ; i< fruits.length;i++){

    if(fruits[i]==userInput){

        console.log("fruit is available")
    }

}

console.log(fruits.indexOf('chiku'))

console.log("-----------------")

if(fruits.indexOf(userInput)>=0){

    console.log("fruit available")

}

else{

    console.log("fruit is not available")
}

if(fruits.includes(userInput)){
    console.log('Fruit available')
}
else{
    console.log('Fruit not available')
}


let year = [2000,1999,1989,2003]
let ages = []

for(let i = 0 ; i < year.length ; i++ ){
        let age = 2021-j[i] //21
        ages.push(age)
    }
    console.log(ages)
    

    let ages1 = [ 21, 22, 32, 18 ]

//[21,22,32]

let above = []

for(let i = 0 ; i < ages1.length ; i++){
    if(ages1[i]>18){
        above.push(ages1[i])
    }
}

console.log(above)


let k = [1,21,22,15,16]

let sum = 0

for(let i = 0 ; i < k.length ; i++){
    sum = sum + k[i]
}

console.log(sum)

console.log("-----------------")

//Date: 25.09.2021



let x = 10 
let u = 20   // Number

console.log(typeof u)

let abc =  true
console.log(typeof abc)


//                0         1      2     3       4
let namesOne = ["scott","smith","alen","jones", "martin"]
console.log(namesOne[0])
console.log(namesOne.length)


// object -- 
//human 
//property - age weight height coloe
//method - talk() walking()

// vehicle

//property - color tyre regNo
// method- start stop


let car = ["BMW","INNOVA","FORD","TATA"]
// property 

console.log(car.length)
// function object -- method

// Method

// push ---> push/add elemnt in last position of array

let car1 = car.push("MARUTI")
// Method  - Action 
// Return - array number
console.log(car)
console.log(car1)


// pop 

//Action  - removes the element from the last 
// Return -  array

let car2 = car.pop()
console.log(car2)
console.log(car)

// unshift -->add one or more element to starting pos. in array
//Return - added element
let bike = ["BAJAJ","KTM","TVS","YAMAHA"]
let ua = bike.unshift("ROYAL_ENFIELD","SUZUKI")
console.log(bike)
console.log(ua)

// shift

let yy = bike.shift()
console.log(yy)
console.log(bike)

// push(para)  // pop()  // shift()  // unshift(p)

//    newL     // removedE  // removeE  // newL


let g2 = [1,2,3,4,5]

let hhh = g2.push(66)
console.log(g2)
console.log(hhh)

let jjj = g2.pop()
console.log(g2)
console.log(jjj)

let kkk = g2.shift()
console.log(g2)
console.log(kkk)

// -------------------------- indexOf
let vegetables = ["ladyfinger","potato","cabbage","brinjal"]

let hhha = vegetables.indexOf("potato") // return index of array element
console.log(hhha)

let gga = vegetables.indexOf("chilly")
console.log(gga)

// includes --return true if element availble in array or return false

let ll = vegetables.includes("potato")
console.log(ll)

let lll = vegetables.includes("chilly")
console.log(lll)





// action 
// return 



// function add(x,y){
//     return x + y
// }

// let r = add(23,33)
// console.log(r)




