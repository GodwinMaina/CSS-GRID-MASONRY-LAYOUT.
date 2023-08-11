const tenets = [

    { 
        id:1,
        name:"Tenet 1",
        author:"Andrew Tate",
        img:"Tenets/Tenet 1.jpg"
    
    },

     {
        id:2,
        name:"Tenet 2",
        author:"Tate",
        img:"./Tenets/Tenet 2.jpg"
    

    },
    
    {
        id:3,
        name:"Tenet 3",
        author:"Andrew",
        img:"./Tenets/Tenet 3.jpg"
    
    },

     {
        id:4,
        name:"Tenet 4",
        author:"Andrew G",
        img:"./Tenets/Tenet 4.jpg"
    
    },

     {
        id:5,
        name:"Tenet 5",
        author:"Top G",
        img:"./Tenets/Tenet 5.jpg"
    },
    {
        id:6,
        name:"Tenet 6",
        author:"Top G",
        img:"./Tenets/Tenet 6.jpg"
    },
    {
        id:7,
        name:"Tenet 7",
        author:"Andrew",
        img:"./Tenets/Tenet 7.jpg"
    },{
        id:8,
        name:"Tenet 8",
        author:"Tate G",
        img:"./Tenets/Tenet 8.jpg"
    },{
        id:9,
        name:"Tenet 9",
        author:"Top Andrew",
        img:"./Tenets/Tenet 9.jpg"
    },
    {
        id:10,
        name:"Tenet 10",
        author:"Top G",
        img:"./Tenets/Tenet 10.jpg"
    }

];


const person = document.getElementById("name");
const img = document.getElementById("image");
const author = document.getElementById("author");

const prevbtn = document.querySelector(".prev-btn");
const nxtbtn = document.querySelector(".nxt-btn");
const randombtn = document.querySelector(".btn-random");

//starting tenet indexed 0
let currentTenet = 6;

window.addEventListener("DOMContentLoaded",function(){
    // console.log("hello")    
    tenet();

});

function tenet() {

const item = tenets[currentTenet];
   img.src = item.img;
   person.textContent=item.name;
   author.textContent = item.author;
 
};

nxtbtn.addEventListener('click',function(){
    currentTenet++;
  
    if(currentTenet > tenets.length-1){
        currentTenet=0;
    }
    tenet();
});

prevbtn.addEventListener('click',function(){
    currentTenet--;
    if(currentTenet < 0){
        currentTenet =tenets.length-1;
    }
    tenet();
});

randombtn.addEventListener('click',function(){
    currentTenet = Math.floor(Math.random()*tenets.length);
    tenet();
})
