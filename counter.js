const numbers = [0,1,2,3,4,5,6,7,8,9];
let buttonPlus = document.getElementById("plus");
let buttonMinus = document.getElementById("minus");
let numberContent = document.getElementsByClassName("counter-content");
let numberList;
let onesPlace = 0;
let number = 0;
let decimalPlace = 0;
let percentile = 0;
let percentileNum = 0 ;
let thousandsPlace = 0;

for(let i=0 ;i<4;i++){
  numberList = document.createElement("ul");
  

  numberContent[i].append(numberList);
  numberList.classList.add('counter-list');

  for(let i=0;i<10;i++){
    let numberListItem = document.createElement("li");
    numberListItem.classList.add("number-list-item");
    numberListItem.innerText = numbers[i];
    numberList.append(numberListItem);
  }
}



buttonMinus.addEventListener("click",() =>{
 
 onesPlace = (onesPlace-30);
  
  numberContent[3].style.transform =`translateY(${-(onesPlace)}px) `;
  

 

});



buttonPlus.addEventListener("click",() =>{
  onesPlace +=30;
  numberContent[3].style.transform =`translateY(-${onesPlace}px) `;

  if(onesPlace > 270){
    decimalPlace += 30;
    numberContent[2].style.transform =`translateY(-${decimalPlace}px) `; 
    numberContent[3].style.transform =`translateY(-${0}px) `;
    number ++;
    onesPlace = 0;
  }
  if(number == 10){   
    percentile +=30;
    numberContent[2].style.transform =`translateY(-${0}px) `; 
    numberContent[3].style.transform =`translateY(-${0}px) `;
    numberContent[1].style.transform =`translateY(-${percentile}px) `;
    number = 0;
    decimalPlace = 0;
    percentileNum ++;
  }
  if(percentileNum == 10){
    thousandsPlace +=30;
    numberContent[2].style.transform =`translateY(-${0}px) `; 
    numberContent[3].style.transform =`translateY(-${0}px) `;
    numberContent[1].style.transform =`translateY(-${0}px) `;
    numberContent[0].style.transform =`translateY(-${thousandsPlace}px) `;
    
    percentile = 0;
    percentileNum = 0;
  }  
 
});