let nameOne ="scott"

// 0  1  2  3  4
// s  c  o  t  t

console.log(nameOne[0])
console.log(nameOne[1])
console.log(nameOne.length)


let nameTwo = "tiger"
console.log(nameTwo[0])
console.log(nameTwo[3])

// // Object ---  property , methods

let a= "henry"

console.log(a.length)
console.log(a.toUpperCase())
console.log(a.toLowerCase())

let radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());



// Method --- action 
// Return --- String 


// //  0   1   2   3   4   5
// //  s   e   c   u   r   e
// // -6  -5  -4  -3  -2  -1        

let rr = "Secure"

// //string.slice(startpoint, endpoint)// End point not included
// // end point should be ahead start point 

let j = rr.slice(0,6)
console.log(j)


let na = rr.slice(3,5)
console.log(na)


let k = rr.slice(1,2)
console.log(k)

let browserType = 'mozilla';
browserType.length;
console.log(browserType.replace('moz','van'));


// ------------------
let m = "leopard"
// 0  1  2  3  4  5  6
// l  e  o  p  a  r  d
console.log(m[0])

// // for(intilaization ; condition ; increment){
// //     // statments
// // }

for(let i = 0 ; i < 7 ; i++){  //i ---1  i ---2 -- 3 ---
   // console.log(i) // 0  1 2  3   4
   console.log(m[i])
 }

console.log('--------------------')
let browser = 'google chrome'
let count  = 0

for(let i = 0 ; i < browser.length ; i++){    // for finding o count form given string
    if(browser[i] == 'o'){
        count  = count + 1
    }
}
console.log(count)

let browserOne = 'mozilla firefox'
let count2  = 0

for(let i = 0 ; i < browserOne.length ; i++){        //for finding vowels from given string
   if(browserOne[i] == 'a' || browserOne[i] == 'e' ||browserOne[i] == 'i' || browserOne[i] == 'o' ||browserOne[i] == 'u'){
       count2  = count2 + 1
   }
}
console.log(count2)
console.log('-------------------------')
let n = "amol"  // loma
let rev = ""
for(let i = 3 ; i >=0 ; i-- ){ // 2  1
    //console.log(nnaa[i])
    rev = rev+n[i]   //loma
}
console.log(rev)

let kkqaqa= ["I learning am javascript,html,css3"]



let jaaaa = "amol"
console.log(jaaaa[0].toUpperCase()+jaaaa.slice(1,jaaaa.length))

console.log('--------------------')
// person ---
//  weight height age 
//  walk()  talk()

// properties -
// wheel , reg , color
// action start() stop()



// string 



let firstName = "amol"
console.log(firstName.length)   // return length 4 for string amol
console.log('--------------------')

// object -- properties and methods
//   0  1  2  3
//   a  m  o  l 

console.log(firstName[0])    // return a from given string
console.log(firstName[firstName.length-2])  // return o from string amol



for(let i = 0 ; i < 4 ; i++){
     console.log(i)
     console.log(firstName[i])     // return string index and string letters
}
console.log('--------------------')

for(let i = firstName.length-1 ; i >= 0 ; i--){
    console.log(i)
    console.log(firstName[i]) // return given string in reverse format
}


// Method---

// Method ------Action 
// Return --

console.log('Hello I am new to javascript')
console.log("Hello I am new to javascript")
console.log('Hello I am "new" to javascript')
console.log("Hello I am new's to javascript")


//old way 
let firstName2  = "Scott"
let lastName2 = "tiger"
console.log("My firstname is "+firstName2+" My lastName is "+lastName2)

// String interpolation - back ticks
// console.log(`My firstName is ${firstName2} and My lastName is ${lastName2}`)
// It also solves the expression
console.log(`Addition of 11 and 2 is ${11+2}`)

// String

// string + string --> string 
// string + number --> string 
// number + string --> string 
// number + number --> number

let ab = 10
let bc = 20
let cd ='amol'
console.log(ab+bc+cd)
console.log(bc+cd+ab)
console.log(ab+bc)

// Methods 


// function add(x,y){
//     return x + y
// }

function add(x,y) {

    return x+y
}

console.log(add(11,12))

// user defined function  and  inbuilt functions


let q = console.log('hello') // 
console.log(q)

// Action -- printing to console whatever we pass
// Return type 

// Methods

let fruits = "Watermelon"
console.log(typeof fruits)


let upper = fruits.toUpperCase()

// Action - convert to uppercase
// Return type  - string

console.log(upper)
console.log(typeof upper)

let lower = fruits.toLowerCase()
//Action - convert to lower
//Return type  - string
console.log(lower)
console.log(typeof lower)

// Method chaining 
let out = fruits.toLowerCase().toUpperCase().length
console.log(out)
console.log(typeof out)
console.log('--------------------------------')


let key = "Thunderbird"

//  0   1   2  3  4  5  6  7 8 9 10
//  t   h   u  n  d  e  r  b i r d
// -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
//qwerty.slice(startingPosition ,endposition)

let abc = key.slice(1,5) 
console.log(abc)         // hund
console.log(key.slice(5)) // erbird  returns all strig after 5 index
console.log(key.slice(-2)) // rd  returns -2 and -1 position string 
console.log(key.slice(-5,6)) //
console.log(key.slice(-3,-4))
// ------------------------------------
let y = "amol"
console.log(y[0].toUpperCase()+ y.slice(1)) // first letter capital using method chaining

// first letter capital using for loop
let capitalize = ""
for(let i = 0 ; i < y.length ;i++){
    if(i == 0){
        capitalize = capitalize +y[i].toUpperCase()
    } 
    else {
        capitalize = capitalize +y[i]
    }
}
console.log(capitalize)