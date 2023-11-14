const fruits = ["🍓", "🍏", "🍇", "🍉","🍊","🥑","🍋"];
let spinContent = document.getElementsByClassName("spin-content");
let message = document.getElementById("spin-message");
let spinBtn = document.querySelector("button");


spinBtn.addEventListener("click",()=>{
   
    spinBtn.disabled = true;
    message.innerHTML="Spinning...";
    console.log (message.innerHTML);
     for(let i=0;i<spinContent.length;i++){
        spinContent[i].innerHTML="";
     }
   
   setTimeout(() => {   
        spinContent[0].innerHTML =   fruits[Math.floor(Math.random() * fruits.length)];  
     
    }, 1000);
   setTimeout(() => { 
        spinContent[1].innerHTML =   fruits[Math.floor(Math.random() * fruits.length)];
    }, 2000);
    setTimeout(() => {
        spinContent[2].innerHTML =   fruits[Math.floor(Math.random() * fruits.length)];
    }, 3000);
    setTimeout(() => {  
        if (spinContent[0].innerHTML == spinContent[1].innerHTML ) {
            if (spinContent[0].innerHTML == spinContent[2].innerHTML){
            if (spinContent[1].innerHTML == spinContent[2].innerHTML){  
                message.innerHTML = "Jackpot" ;
                }    
            } 
        }else{
            message.innerHTML = "Try Again";
            }
        spinBtn.disabled = false;
    }, 3000);  
 });

