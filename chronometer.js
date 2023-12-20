let buttonArr = document.getElementsByClassName("chronometer-btn");
let seconds = 0; 
let tens = 0; 
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let chronometerInterval ;

if(tens == 0 && seconds == 0){
       buttonArr[1].classList.add("invisible");
       buttonArr[2].classList.add("invisible");
} 

buttonArr[0].addEventListener("click",() =>{
 
      clearInterval(chronometerInterval);
      chronometerInterval = setInterval(startTimer, 10);
      buttonArr[1].classList.add("left");
      buttonArr[2].classList.add("left");
      buttonArr[0].classList.add("invisible");
      buttonArr[1].classList.remove("invisible");
      buttonArr[2].classList.remove("invisible");
});

buttonArr[1].addEventListener("click",() =>{
  
    clearInterval(chronometerInterval);
  
    buttonArr[0].classList.remove("invisible");
    buttonArr[1].classList.add("invisible");
   
    buttonArr[0].classList.add("left");
    buttonArr[2].classList.add("left");
    
});
buttonArr[2].addEventListener("click",() =>{
    clearInterval(chronometerInterval);
    reset();
    buttonArr[0].classList.remove("invisible");
    buttonArr[1].classList.add("invisible");
    buttonArr[2].classList.add("invisible");
});


function startTimer () {
    tens++; 
    
  
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) { 
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }

function reset () {
  tens=0;
  seconds=0;
  appendSeconds.innerHTML="00";
  appendTens.innerHTML="00";
}
  

