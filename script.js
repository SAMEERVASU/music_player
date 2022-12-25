const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let progress = document.getElementById("progress");
let current_time = document.getElementById("current_time");
let total_duration = document.getElementById("duration");
const progress_div=document.getElementById("progress_div");

const songs = [{
    name: "song-1",
    title: "Tere sanam",
    artist: "sameer",
},
{
    name: "song-2",
    title: "Mere sanam",
    artist: "sameer",
}, {
    name: "song-3",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-4",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-5",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-6",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-7",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-8",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-9",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-10",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-11",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-12",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-13",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-14",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-15",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-16",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-17",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-18",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-19",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-20",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-21",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-22",
    title: "Main Hu..",
    artist: "sameer",
},
{
    name: "song-23",
    title: "Main Hu..",
    artist: "sameer",
},


]
let isplaying = false;

const playMusic = () => {

    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
const pauseMusic = () => {

    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    isplaying ? pauseMusic() : playMusic();
});

const loadsong = (songs) => {
    // title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.mp3`;
    // music.src=`music/${songs.name}.m4v`;
    img.src = `images/${songs.name}.png`;
};


songIndex = 0;

const nextsong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadsong(songs[songIndex]);
    playMusic();

}
const prevsong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadsong(songs[songIndex]);
    playMusic();

}


music.addEventListener("timeupdate", (event) => {
    const { currentTime, duration } = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;

    let duration_min = Math.floor(duration / 60);
    let duration_sec = Math.floor(duration % 60);

    if (duration_sec < 10) {

        duration_sec = `0${duration_sec}`;

    }

    if (duration_min < 10) {
        duration_min = `0${duration_min}`;

    }
    let tot_duration_time = `${duration_min}:${duration_sec}`;

    if (duration) {
        total_duration.textContent = `${tot_duration_time}`;

    }
    let currentTime_min = Math.floor(currentTime / 60);
    let currentTime_sec = Math.floor(currentTime % 60);
    if (currentTime_sec < 10) {
        currentTime_sec = `0${currentTime_sec}`;

    }
    let tot_current_time = `${currentTime_min}:${currentTime_sec}`;

    current_time.textContent = `${tot_current_time}`;
}
);

music.addEventListener('ended',nextsong);


progress_div.addEventListener('click',(event) => { 
    const {  duration } = music;
  
    let move_progress=(event.offsetX/event.srcElement.clientWidth)*duration;
    music.currentTime=move_progress;
 })
next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong)
// loadsong(songs);