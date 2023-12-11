let progress = document.getElementById("progress");
let song = document.getElementById("song");

let controlIcon = document.getElementById("control-play-pause");
let forwardIcon = document.getElementById("forward-btn");
let backIcon = document.getElementById("back-btn");
let playBtn = document.getElementById("play-btn");
let pauseBtn = document.getElementById("pause-btn");

let songPhoto = document.getElementById("music-player");
let songName = document.getElementById("song-name");
let songArtist = document.getElementById("song-artist");

let songs = ["sounds/Imagine Dragons - Birds.m4a",
"sounds/The Drums - Days.m4a",
"sounds/River Whyless Michigan Cherry.m4a"];

let songsPhotos = ["photo/Imagine-Dragons-album-photo.jpg",
              "photo/TheDrums-days.jpg",
              "photo/MichiganCherry.jpg"];

let songsNames = ["Birds","Days","Michigan Cherry"];
let artistNames = ["Imagine Dragons","The Drums","River Whyless"];

let colorNames = ["#bbff00","#ff3300","#001aff"];

let songCount = 0; 

song.onloadedmetadata = function(){
    progress.max = song.duration ;
    progress.value = song.currentTime ;
}
setInterval(()=>{
    progress.value = song.currentTime;
},500)

if(songCount == 0 ){
        song.setAttribute('src', `${songs[songCount]}`);
        song.setAttribute('type', 'video/mp4');
        songName.innerText = songsNames[songCount];
        songArtist.innerText = artistNames[songCount];    
        songPhoto.style.backgroundImage = `url("${songsPhotos[songCount]}")`;
        songName.style.color = colorNames[songCount];
        pauseBtn.style.display = "none";
}

playBtn.addEventListener("click",()=>{
        pauseBtn.style.display = "flex";
        playBtn.style.display = "none";
        song.play();
             
});

pauseBtn.addEventListener("click",()=>{
    pauseBtn.style.display="none";
    playBtn.style.display = "flex";
    song.pause();
       
});

backIcon.addEventListener("click",()=>{
    song.pause();
    progress.value = 0;
    song.currentTime = progress.value;
    songCount--; 
    if(songCount < 0){
        songCount = songs.length-1;
    }
    if(songCount > 0){
        song.setAttribute('src', `${songs[songCount]}`);
        song.setAttribute('type', 'video/mp4');
        songPhoto.style.backgroundImage = `url("${songsPhotos[songCount]}")`;
        songName.innerText = songsNames[songCount];
        songArtist.innerText = artistNames[songCount];
        songName.style.color = colorNames[songCount];
        pauseBtn.style.display = "flex";
        playBtn.style.display = "none";
        song.play();
    }else{
        song.setAttribute('src', `${songs[songCount]}`);
        song.setAttribute('type', 'video/mp4');
        songPhoto.style.backgroundImage = `url("${songsPhotos[songCount]}")`;
        songName.innerHTML = songsNames[songCount];
        songArtist.innerHTML = artistNames[songCount];
        songName.style.color = colorNames[songCount]; 
        pauseBtn.style.display = "flex";
        playBtn.style.display = "none";
        song.play();
    }
});

forwardIcon.addEventListener("click",()=>{
        
        song.pause();
        progress.value = 0;
        song.currentTime = progress.value;
        songCount++;
        if(songCount <= songs.length-1){
            if(songCount > 0 ){
                song.setAttribute('src', `${songs[songCount]}`);
                song.setAttribute('type', 'video/mp4');
               
                songPhoto.style.backgroundImage = `url("${songsPhotos[songCount]}")`;
                songName.innerHTML = songsNames[songCount];
                songArtist.innerHTML = artistNames[songCount];
                songName.style.color = colorNames[songCount];
                song.play();
               pauseBtn.style.display = "flex";
               playBtn.style.display = "none";
            }
        }else {
            songCount = 0;
            song.setAttribute('src', `${songs[songCount]}`);
            song.setAttribute('type', 'video/mp4');
          
            songPhoto.style.backgroundImage = `url("${songsPhotos[songCount]}")`;
            songName.innerHTML = songsNames[songCount];
            songArtist.innerHTML = artistNames[songCount];
            songName.style.color = colorNames[songCount];
            song.play();
           
            pauseBtn.style.display = "flex";
            playBtn.style.display = "none";
        }
        
});

progress.addEventListener("change",()=>{
    song.play();
    song.currentTime = progress.value;
    pauseBtn.style.display = "flex";
    playBtn.style.display = "none";
});
