class emp{  

//     empId= null
    empName = null
    salary = null

}

//Setting the object properties outside the class
let amol = new emp()
amol.empId = 123
amol.empName = "Scott"
amol.salary = 5000
console.log(amol)

console.log("------------------------------------------")
amol['empId'] = 321
amol['empName'] = "mike"
amol['salary'] = 7000
console.log(amol)



// we can create multiple objects
 let akshay = new emp()
 let amit= new emp()
 
 
 console.log("------------------------------------------")
 
 