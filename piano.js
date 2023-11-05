 let blackSound = [
    new Audio('./sounds/key13.mp3'),
    new Audio('./sounds/key15.mp3'),
    new Audio('./sounds/key17.mp3')
 ]
 let whiteSound = [
    new Audio('./sounds/key12.mp3'),
    new Audio('./sounds/key14.mp3'),
    new Audio('./sounds/key16.mp3'),
    new Audio('./sounds/key18.mp3'),
    new Audio('./sounds/key19.mp3')
 ]

 let blackKeyArr = document.querySelectorAll('.black-key');
 let whiteKeyArr = document.querySelectorAll('.white-key');

 whiteKeyArr.forEach((item,index) => {
    let allowPlaying = true;
    let timerId = null;
    item.addEventListener("click",()=>{
        if (allowPlaying) {
            whiteSound[index].load();
            whiteSound[index].play();
        }

        allowPlaying = false;
        if (!timerId) {
            timerId = setTimeout(() => {
                allowPlaying = true;
                timerId = null;
            }, 250);
        }
    })
 });

 blackKeyArr.forEach((item,index) => {
    let allowPlaying = true;
    let timerId = null;
    item.addEventListener("click",()=>{
        if (allowPlaying) {
            blackSound[index].load();
            blackSound[index].play();
        }

        allowPlaying = false;
        if (!timerId) {
            timerId = setTimeout(() => {
                allowPlaying = true;
                timerId = null;
            }, 250);
        }
    })
 });

