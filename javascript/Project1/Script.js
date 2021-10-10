const Button = document.querySelector("button") 
const body = document.querySelector("body")
const color = ['red','yellow','green','purple']
body.style.backgroundColor='Blue'
Button.addEventListener('click',changeB)
function changeB(){

   const colorIndex = parseInt(Math.random()*color.length)
   body.style.backgroundColor = color[colorIndex]


} 
