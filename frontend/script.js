const play =  document.getElementById("play");
const music = document.querySelector("audio");
const img  = document.querySelector("img");
const forward =  document.getElementById("forward");
const backward =  document.getElementById("backward");
const title = document.getElementById("Title");
const author = document.getElementById("Author");
//array of objects
let flag = false;
const musicList  = [
    {
     name:"music-1",
     title:"music-1",
     author:"pavan-1"
    },
    {
   name:"music-2",
   title:"music-2",
   author:"pavan-2"
    }
    ,
    {
   name:"music-3",
   title:"music-3",
   author:"pavan-3"
    },
    {
   name:"music-4",
   title:"music-4",
   author:"pavan-4"
    },
    {
   name:"music-5",
   title:"music-5",
   author:"pavan-5"
    },
    {
   name:"music-6",
   title:"music-6",
   author:"pavan-6"
    },
    {
   name:"music-7",
   title:"music-7",
   author:"pavan-7"
    },
    {
   name:"music-8",
   title:"music-8",
   author:"pavan-8"
    },
    {
   name:"music-9",
   title:"music-9",
   author:"pavan-9"
    }
]


const musicPlay = ()=>{
flag =  true;
    music.play();
    img.classList.add("anime");
    play.classList.replace("fa-play" , "fa-pause");

}

const pause = ()=>{
    flag = false;
    music.pause()
    img.classList.remove("anime");
    play.classList.replace("fa-pause" , "fa-play");
}

const loadsong = (musicList)=>{
    title.textContent = musicList.title;
    author.textContent = musicList.author;
    music.src = `music/${musicList.name}.mp3`;
    musicPlay()
}

play.addEventListener("click" , ()=>{
     if(flag){
         pause();
     }
     else{
         musicPlay();
     }
});

let indexNum = 0;

forward.addEventListener("click" , ()=>{
    indexNum = (indexNum +1)%musicList.length;
    loadsong(musicList[indexNum]);
})

backward.addEventListener("click" , ()=>{
    indexNum = (indexNum-1+musicList.length)%musicList.length;
    loadsong(musicList[indexNum]);
})