// forEach, map , reduce , concate , find , slice

// forEach-  calls function once  for each element in an array - 
//          0        1        2      3
//  fruits=['apple','grapes','banana','mango']

//  let a = fruits.forEach(function(el,index,arr){

//  console.log(`purchased ${el}!`)// 

//  })

// map() -  calls each and every elemnet and return the same array

//  let b = fruits.map(function(el,index,arr){

//     //return el
//     return index
//     //return arr

//  })
// console.log(b)

// Concat - combine multiple array in single array.

// let vegie = ['potato','tommato','onion','carrot']

// console.log(fruits.concat(vegie))


// find -  to find an element from array/object

// let employee =[
// {
//     empID:123,
//     empName:"joel",
 
// },
//   {
//     empID:122,
//     empName:"anie",
//   },
//    {
//    empId:121,
//    empName:"scott",

//    }]

// let c = employee.find(function(el){
//  return el.empId==121
  
// })
// console.log(c)

// slice - required start and end point
//          0       1        2        3
fruits=['apple','grapes','banana','mango']

// console.log(fruits.splice(0,4,'watermelon','orange'))
// console.log(fruits)
//['apple','grapes','banana','mango','watermelon','orange']
console.log("--------------------------")
console.log(fruits)
console.log(fruits.slice(1,3))

