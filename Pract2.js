// indcludes

let Fruit = "Apple".toLowerCase()
let fruits = "apple mango banana grapes chiku"

if(fruits.includes(Fruit)){
    console.log('Fruit available')
}
else{
    console.log('fruit not available')
}

// 

let  flower = " sunflower jasmin "
console.log(flower.length)
console.log(flower.trim())
console.log(flower.trim().length)
console.log("-----------------------------")

let browser =" mozilla thunderbird "
console.log(browser.length)
console.log(browser.trim())
console.log(browser.trim().length)

console.log("--------------------------------")
 
let  flowerOne = " sunflower jasmin "
console.log(flowerOne.length)
console.log(flowerOne.trim())
console.log(flowerOne.trimRight().length)


console.log("--------------------------------")

let browserOne =" google chrome "
console.log(browserOne.length)
console.log(browserOne.trim())
console.log(browserOne.trim().length)


let n = " scott maverick "
console.log(n.trim())   //"scott maverick"
console.log(n.trim().split(' ')) // ["scott","maverick"]
console.log(n.trim().split(' ').join("")) //"scottmaverick"


//------------------------------------------->
//indexOf  , includes , trim  , replace

let lan = "I am learning javascript"
let exchange = lan.replace('javascript','python')
console.log(exchange)


let wordTwo = "I am learning javascript and i will search job in javascript"
// let reee = lan2.replace('javascript','python')
// console.log(reee)
wordTwo = wordTwo.split(' ') 
console.log(wordTwo)

for(let i = 0 ; i < wordTwo.length ; i++){
    if(wordTwo[i] === "javascript"){
        wordTwo[i] = "python"
    }
}
console.log(wordTwo.join(' '))

// ---------------------->

let bna = "chinmay"
console.log(bna.repeat(5))
let hhh =  "5a4b3c2e1f"
//"aaaaabbbbcccef"
let ns = hhh.split("")
let hhhh = ""
//'a'.repeat(5)

// Number 
//'b'.repeat(2) // 'bb'

console.log(Number('5'))
console.log(Number('C'))
console.log(ns)

for(let i = 0 ; i < ns.length ; i++){
    if(Number(ns[i])){
        hhhh = hhhh + ns[i+1].repeat(Number(ns[i]))
    }
}
console.log(hhhh)

let k = "aaaaabbbbccceef"
//"5a4b3c2e1f"


// charAt

let lastName = "mozilla"
console.log(lastName.charAt(2))
console.log(lastName.charCodeAt(5))



// Which are considered as true or false
// if(undefined){
//     console.log("hello")
// }

// truthly or falsy
// null undefined 0 false NaN



