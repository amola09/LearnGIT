(function(){

  const buttons = document.querySelectorAll('.counterBtn') // target class .counterBtn

  let count = 0  // value is always 0 at start

  buttons.forEach(function(button){
  button.addEventListener('click',function(){
  if (button.classList.contains('prevBtn')){
  count--  // when we click prev btn the value will be decreased

  }
  else if (button.classList.contains('nextBtn')){
   count++  // when we click prev btn the value will be decreased


  }
const counter = document.querySelector('#counter')
counter.textContent = count

if(count < 0){
 counter.style.color = 'red'

}
else if(count > 0){
    counter.style.color = 'green'
   
   }
else{

    counter.style.color = '#333333'
    }

})



  });


}) ()