var emp = ["joel","d'souza",10,20]
console.log[emp[1]]
console.log(emp.length)


var empOne ={

      empId:101,
      empName: "anie",
      post:"Tester"


}
// Dot notation
//(Object.propertyname)
// Bracket notation
//Object['firstName']

// Fetching the value from an object
console.log(empOne.empName) // 
console.log(empOne['empId']) // 

// Updating the value for object

empOne.empName="Scott"

console.log(empOne)

// Adding property to object 

empOne.empName="max"
empOne['empName']="stanley"

console.log(empOne)


//---------------------------------------------------------------------

let empThree =[

  {
      empId:101,
      empName: "Eren",
      post:"Tester"
  },
  {
      empId:101,
      empName: "Mark",
      post:"Devloper"

  },
  {
      empId:101,
      empName: "anie",
      post:"Data analyst"
  }
]

console.log(empThree[0].empName)

console.log(empThree[0]['empName'])



