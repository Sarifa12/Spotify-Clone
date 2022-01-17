console.log("WELCOME TO SPOTIFY");
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('../songfloder/8.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgresBar = document.getElementById('myProgresBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: "Aashiqui Aa Gayi", filePath: "../songfloder/1.mp3", coverPath: "../cover/1.jpg" },
    { songName: "Dance Meri Rani", filePath: "../songfloder/2.mp3", coverPath: "../cover/4.jpg" },
    { songName: "Kusu Kusu", filePath: "../songfloder/3.mp3", coverPath: "../cover/5.jpg" },
    { songName: "Pal Pal Dill Ke Pass", filePath: "../songfloder/4.mp3", coverPath: "../cover/6.jpg" },
    { songName: "Soch Liyaa", filePath: "../songfloder/5.mp3", coverPath: "../cover/7.jpg" },
    { songName: "Srivalli", filePath: "../songfloder/6.mp3", coverPath: "../cover/3.jpg" },
    { songName: "Taroon ke seher me", filePath: "../songfloder/7.mp3", coverPath: "../cover/2.jpg" },
    { songName: "Tere Siva JAg Me", filePath: "../songfloder/8.mp3", coverPath: "../cover/8.jpg" },
    { songName: "Tip Tip", filePath: "../songfloder/9.mp3", coverPath: "../cover/9.jpg" },
    { songName: "Tip Top 2.0", filePath: "../songfloder/10.mp3", coverPath: "../cover/10.jpg" },

]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//audioElement.play();

//handle play pause events;
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//listen to event;

audioElement.addEventListener('timeupdate', () => {

    // update seekhbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgresBar.value = progress;

})
myProgresBar.addEventListener('change', () => {
    audioElement.currentTime = myProgresBar.value * audioElement.duration / 100;

})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songfloder/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songfloder/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songfloder/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})