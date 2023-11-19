const fruits = ["🍓", "🍏", "🍇", "🍉","🍊","🥑","🍋"];
let spinContent = document.getElementsByClassName("spin-content");
let message = document.getElementById("spin-message");
let spinBtn = document.querySelector("button");


spinBtn.addEventListener("click",()=>{
    spinBtn.disabled = true;
    for(let i=0 ;i<3;i++){
        let spinList = document.createElement('ul');
        spinList.classList.add('spin-list');
        spinContent[i].append(spinList);
        
        for(let i=0;i<40;i++){
            let spinListItem = document.createElement('li');
            spinListItem.classList.add('spin-list-item');
            spinList.append(spinListItem);
            spinListItem.innerText =  fruits[Math.floor(Math.random() * fruits.length)];
        }

        
    }
 });