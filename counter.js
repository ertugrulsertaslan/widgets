let buttonPlus = document.getElementById("plus");
let buttonMinus = document.getElementById("minus");
let numberContent = document.getElementById("numbers");
let number = 0;

buttonMinus.addEventListener("click",() =>{
  number--;
  numberContent.innerHTML = String(number);
});

buttonPlus.addEventListener("click",() =>{
  number++;
  numberContent.innerHTML = String(number);
});