let names = ["amol","akshay","amit"]

console.log(names[0])
console.log(names[1])
console.log(names[2])

console.log("-----------------------")

// // Loop -- repetative action 

//1-10

console.log(1)
console.log(2)

console.log("-----------------------")

for(let i = 1 ; i <=10 ; i++){  // i -> 2 // i -> 3 // 1-10 // i-11

    console.log(i)  // 1  2 3  10

}

console.log("-----------------------")

// for(// intialization ; conditionCheck ; increment/decrement){

//     // statments

// }

//10 ---------1 

// Loop 

// for(let i = 10 ; i >= 0 ; i--){  // i - 9   - 0  -1
//     console.log(i)  // 10  // 9 //0
// }


let names2 = ["amol","akshay","ram","amit"]  // length
console.log(names2[0]) // returns 1st index from an array
console.log("---------------------")
//  0 - 2
console.log(names2.length)  // returns all array length

console.log("---------------------")

// Printing all the elements of an arrray 
for(let i = 0 ; i < names2.length;i++){
    console.log(i)  // 0  1  2
    console.log(names2[i])
}
console.log("---------------------")

// Reversing the array

for(let i = names2.length -1; i >=0;i--){
    console.log(names2[i])
}
