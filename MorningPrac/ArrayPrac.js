let birthyear = [2011,2002,2009,1993]
// [10,19,12,28]

let years = []

for(let i = 0 ; i < birthyear.length ; i++){
    years.push(2021-birthyear[i])
}

console.log(years)

console.log("-------------------")

// push pop shift unshift indexOf ,includes,slice,sort



// map


birthyear = [2000,1999,2001,1998]

let fgf = birthyear.map(function(el,index,arr){
    console.log(el,index,arr)
})


