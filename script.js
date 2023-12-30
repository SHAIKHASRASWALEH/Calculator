(function(){

  let screen=document.querySelector('.screen');
  let buttons=document.querySelectorAll('.buto');
  let clears = document.querySelector('.buto-clear');
  let equals = document.querySelector('.buto-equal');

  buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value=e.target.dataset.num;
        screen.value+=value;
    })
  });
  clears.addEventListener('click',function(e){
    screen.value="";
  })
  equals.addEventListener('click', function(e){
    if(screen.value==" ")
    {
        screen.value="";
    }
    else
    {
    
            let answer = eval(screen.value);
            if (isNaN(answer)) {
                screen.value = "Error";
            } else {
                screen.value = answer;
            }
        
    }

  });
  


})();
