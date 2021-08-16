/* for loop*/  // used to run same code multiple times
// for ([imitialization] ; [condition] ; [increment])

var ourArray=[]
for(var i = 0 ; i < 5; i++)
{
   // if (i>2) break; // o/p: [0,1,2]
 ourArray.push(i)

}
console.log(ourArray) // o/p : [0,1,2,3,4]

var arr =[10,9,8,7,6]
 for(var i= 0 ; i < arr.length ; i++)
 { 

    console.log(arr[i])

}


// Multi dimensional array
var arrr1 = [
    [1,2],[3,4],[5,6] // index 0, 1 , 2 
];
for(i=0 ; i< arrr1.length ; i++){
 for(j=0 ; j<arrr1[i].length; j++){
  console.log(arrr1[i][j])
}
}


//-------------------------------------------------------------

//  let is local and var is global

for (var counter =1 ;counter < 5; counter++)

{

console.log('Inside the loop:'+counter)

}
console.log('outside the loop'+counter)


// loop without initialization

var j =1
for (;j < 10; j+=2)  // for loop omits the initialization part
{
  console.log(j)
}

