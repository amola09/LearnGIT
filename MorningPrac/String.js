let amol = 10
console.log(amol)

let g = "amol"

// string stores the value by index

// 0  1  2  3
// a  m  o  l

console.log(g[0])
console.log(g.length)
console.log(g.length-1)
console.log("-----------------------------------------------")
// object have ---> properties and methods
// and it performs action and always return something

let y = "scott tiger"
let r =y.toUpperCase()
console.log(r)
console.log(typeof(r))


console.log("-----------------------------------------------")


y = "SCOTT TIGER"
r= y.toLowerCase()
console.log(r)

// lets print all string with for loop

let h = "faith"
console.log(h[0])
for(let i = 0; i<5; i++){
   
    console.log(h[i])
}
console.log("-----------------------------------------------")

let browser = "firefox"

// lets print above string as reverse xoferif using for loop

for(let i=6 ; i>=0 ;i--)
{
    //console.log(i) // it prints string index in reverse format
    console.log(browser[i])  // it returns 
    
}

// methods
let gg = " thunderbird "
console.log(gg.length) // returns length of string 11

let nn = gg.trim() // removes leading and trailing spaces of string
console.log(nn)

gg =" learn "
let rr = gg.trimLeft()
console.log(rr.length)

gg =" xray "
let xy = gg.trimRight()
console.log(xy.length)
console.log(gg)

// learned toUppercase() , toLowercase(), trim() , trimRight(), trimLeft()

// methods action return

// object properties and methods

//0  1   2   3   4   5  6  7  8  9  10
//t  h   u   n   d   e  r  b  i  r  d

let browse ="thunderbird"
let ha = browse.indexOf('n')
console.log(ha)

let f = "thunderbird"
let a = f.indexOf('d',3)
console.log(a)

let language ="Marathi"

//0  1   2  3  4  5  6
//M  a   r  a  t  h  i
//-7 -6 -5 -4  -3 -2 -1


console.log(language.length-1)
console.log(language[0])
console.log(language[0].length-1)
// slice
let yy= language.slice(1,5) // returns //arat
console.log(yy)

let yx =language.slice(4,6) // returns th
console.log(yx)
let ab =language.slice(-2,-6) // returns blank output
console.log(ab)

