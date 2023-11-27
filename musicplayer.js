let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("stop-play-btn");
let forwardIcon = document.getElementById("forward-btn");
let backIcon = document.getElementById("back-btn");

let play = 0;

song.onloadedmetadata = function(){
    progress.max = song.duration ;
    progress.value = song.currentTime ;
}

controlIcon.addEventListener("click",()=>{
    
    if(play == 0){ 
        controlIcon.innerHTML="⏸️";
       
        song.play();
        play--;
    }else if(play < 0){
        controlIcon.innerHTML="▶️";
      
        song.pause();
        play = 0;
    }
    
});

backIcon.addEventListener("click",()=>{
    controlIcon.innerHTML="▶️";
    song.pause();
    progress.value = 0;
    song.currentTime =progress.value;  
});

forwardIcon.addEventListener("click",()=>{
        controlIcon.innerHTML="▶️";
        song.pause();
        progress.value = 400;
        song.currentTime = progress.value;
});

if(play == 0 ){
        setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}
progress.addEventListener("change",()=>{
    song.play();
    song.currentTime = progress.value;
    controlIcon.innerHTML="⏸️";
});