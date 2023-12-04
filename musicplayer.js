let progress = document.getElementById("progress");
let song = document.getElementById("song");

let controlIcon = document.getElementById("stop-play-btn");
let forwardIcon = document.getElementById("forward-btn");
let backIcon = document.getElementById("back-btn");
songs = ["sounds/Imagine Dragons - Birds.m4a",
"sounds/The Drums - Days.m4a",
"sounds/River Whyless Michigan Cherry.m4a"];

let songPhoto = document.getElementById("song-photo-content");
let songName = document.getElementById("song-name");
let songArtist = document.getElementById("song-artist");
let PlayStopButton = document.getElementById("img-btn");


songsPhotos = ["photo/Imagine-Dragons-album-photo.jpg",
              "photo/TheDrums-days.jpg",
              "photo/MichiganCherry.jpg"];

songsNames = ["Birds","Days","Michigan Cherry"];
artistNames = ["Imagine Dragons","The Drums","River Whyless"];



let play = 0;
let songCount = 0; 

song.onloadedmetadata = function(){
    progress.max = song.duration ;
    progress.value = song.currentTime ;
}

if(songCount == 0 ){
        song.setAttribute('src', `${songs[songCount]}`);
        song.setAttribute('type', 'video/mp4');
        songName.innerText = songsNames[songCount];
        songArtist.innerText = artistNames[songCount];
        songPhoto.setAttribute('src', `${songsPhotos[songCount]}`);
}

controlIcon.addEventListener("click",()=>{
  
    if(play == 0){ 
        PlayStopButton.setAttribute('src','photo/pause.png');
        song.play();
        play--;
    }else if(play < 0){
        PlayStopButton.setAttribute('src','photo/play.png');
       
        song.pause();
        play = 0;
    }
    
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

        songPhoto.setAttribute('src', `${songsPhotos[songCount]}`);

        songName.innerText = songsNames[songCount];
        songArtist.innerText = artistNames[songCount];
        song.play();
        PlayStopButton.setAttribute('src','photo/pause.png');
    }else{
        song.setAttribute('src', `${songs[songCount]}`);
        song.setAttribute('type', 'video/mp4');
        songPhoto.setAttribute('src', `${songsPhotos[songCount]}`);
        songName.innerHTML = songsNames[songCount];
        songArtist.innerHTML = artistNames[songCount];
        song.play();
        PlayStopButton.setAttribute('src','photo/pause.png');
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
                songPhoto.setAttribute('src', `${songsPhotos[songCount]}`);
                songName.innerHTML = songsNames[songCount];
                songArtist.innerHTML = artistNames[songCount];
                song.play();
                PlayStopButton.setAttribute('src','photo/pause.png');
            }
        }else {
            songCount = 0;
            song.setAttribute('src', `${songs[songCount]}`);
            song.setAttribute('type', 'video/mp4');
            songPhoto.setAttribute('src', `${songsPhotos[songCount]}`);
            songName.innerHTML = songsNames[songCount];
            songArtist.innerHTML = artistNames[songCount];
            song.play();
            PlayStopButton.setAttribute('src','photo/pause.png');
        }
        
});

if(play == 0 ){
        setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}
progress.addEventListener("change",()=>{
    song.play();
    song.currentTime = progress.value;
    PlayStopButton.setAttribute('src','photo/pause.png');
});