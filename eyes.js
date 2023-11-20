let pupils = document.getElementsByClassName("pupil");


addEventListener("mousemove", (event) => {
    let x = event.clientX*135/window.innerWidth + "%";
    let y = event.clientY*100/window.innerHeight + "%";
    //console.log (x +"--"+y);
    for (let i=0 ; i<2 ;i++){
        pupils[i].style.top = y;
        pupils[i].style.left = x;
        pupils[i].style.transform="translate(-" + x +",-"+ y +")";
    }
});

