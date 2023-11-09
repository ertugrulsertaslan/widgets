const interval = setInterval(() => {
    const date = new Date(); 

    let secondsPoint = document.querySelector(".seconds");
    let minutesPoint = document.querySelector(".minutes");
    let hoursPoint = document.querySelector(".hours");     

    let secPosition = date.getSeconds()*6 ;
    let minPosition = date.getMinutes()*6 ;
    let hourPosition = date.getHours()*30 ;
    if(secPosition == 0) {
        secondsPoint.style.transition ="";
    }else {
        secondsPoint.style.transition = "0.25s";
    }
    if(minPosition  == 0) {
        minutesPoint.style.transition ="";
    }else {
        minutesPoint.style.transition = "0.25s";
    }
    if(hourPosition  == 0) {
        hoursPoint.style.transition ="";
    }else {
        hoursPoint.style.transition = "0.25s";
    }
        secondsPoint.style.transform = `rotate(${secPosition - 180 }deg) `;
        minutesPoint.style.transform = `rotate(${minPosition - 180 }deg) `; 
        hoursPoint.style.transform = `rotate(${hourPosition - 180 }deg) `;  
},1000);