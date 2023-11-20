const fruits = ["🍓", "🍏", "🍇", "🍉","🍊","🥑","🍋"];
let spinContent = document.getElementsByClassName("spin-content");
let message = document.getElementById("spin-message");
let spinBtn = document.querySelector("button");


spinBtn.addEventListener("click",()=>{
    spinBtn.disabled = true;
    let spinListItem ;
    let slot = [];  
    for(let i=0; i < spinContent.length ;i++){
        spinContent[i].innerHTML="";
        spinBtn.innerText = "Spin";
    }
    for(let i=0 ;i<3;i++){

        let spinList = document.createElement('ul');
        spinList.classList.add('spin-list');
            
        spinContent[i].append(spinList);
        spinList.style["-webkit-animation-duration"] = i+2 + "s";

        for(let i=0;i<40;i++){
            spinListItem = document.createElement('li');
            spinListItem.classList.add('spin-list-item');
            spinList.append(spinListItem);
            spinListItem.innerText =  fruits[Math.floor(Math.random() * fruits.length)];           
        }
        slot[i] = spinList.children[1].innerText; 
        
    }
    setTimeout(() => {
        if (slot[0] == slot[1] ) {
            if (slot[0] == slot[2]){
                if (slot[1] == slot[2]){  
                    message.innerText = "Jackpot" ;    
                }    
            } 
                }else{
                    spinBtn.innerText = "Try Again";
                }
                    spinBtn.disabled = false;
    }, 4000);
 });