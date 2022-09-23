let landing = document.querySelector(".landing");
let backchanger;
let backinterval;
//how to change background to random image
function setRandomBack(){
  backinterval =  setInterval(() => {
    document.querySelector(".landing").style.backgroundImage = `url("../imgs/educ${Math.floor(Math.random()*7)}.jpg")`;
    }, 3000);  
}



let stgbtn = document.querySelector(".fa-gear");
let stg = document.querySelector(".settings");
stgbtn.onclick = function(){
  stg.classList.toggle("open");
  stgbtn.classList.toggle("fa-spin");
}



//change color 
let liColors = document.querySelectorAll(".colors li");

liColors.forEach(li => {
  li.addEventListener("click",(e)=>{
    document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
    localStorage.setItem("color-option",e.target.dataset.color);

    liColors.forEach((l)=>{
      l.classList.remove("active");
    });

    li.classList.add("active");

    localStorage.setItem("myel",li);
  })



});
//Set saved color 
if(localStorage.getItem("color-option")){
  document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-option"));
  addActiveClass(liColors);
  
}

//btns background changer
let mybtnsback = document.querySelectorAll(".set-background .box-changeback span");

mybtnsback.forEach((span) => {
  span.addEventListener("click",()=>{
    if(span.classList.contains("backtrue")){
      backchanger = true;
      setRandomBack();
      localStorage.setItem("backoption",true);
    }
    else{
      backchanger = false;
      clearInterval(backinterval);
      localStorage.setItem("backoption",false);
    }
  });
})
addActiveClass(mybtnsback);

if(localStorage.getItem("backoption") === "true" || localStorage.getItem("backoption") === "false" ){
  if(localStorage.getItem("backoption") === "true"){
    mybtnsback.forEach(btn=>{
      btn.classList.remove("active");
    })
    document.querySelector(".backtrue").classList.add("active");

    setRandomBack();
  }
  else {
    clearInterval(backinterval);
    mybtnsback.forEach(btn=>{
      btn.classList.remove("active");
    })
    document.querySelector(".backfalse").classList.add("active");
  }
}

let ourgallery = document.querySelectorAll(".img-box img");


ourgallery.forEach((e)=>{
  e.addEventListener("click",(el)=>{
    console.log(el.target);
    let overlayimg = document.createElement("div");
    overlayimg.className = "overlay-img";

    let imgbox = document.createElement("div");
    imgbox.className = "img-box";
    
    let elimg = document.createElement("img");
    elimg.src = el.target.src;

    let clsbtn = document.createElement("span");
    clsbtn.className = "close-btn";
    clsbtn.appendChild(document.createTextNode("X"));

    imgbox.append(elimg);
    
    imgbox.append(clsbtn);

    overlayimg.append(imgbox);
    document.body.append(overlayimg);
  })
})

document.addEventListener("click",function(e){

  if(e.target.className == "close-btn"){
    e.target.parentNode.remove();
    this.documentElement.querySelector(".overlay-img").remove();
  }
})



//counter
let myscnds = document.querySelector(".seconds");
let myminutes = document.querySelector(".minutes");
let myhrs = document.querySelector(".hours");
let mydays = document.querySelector(".days");

let countTime = new Date("Nov 03,2022 00:00:00").getTime();;
// console.log(countTime);


let counter = setInterval(() => {
  let datenow = new Date().getTime();
  let differTime = countTime - datenow;

  let days = Math.floor(differTime / (1000*60*60*24));
  let hours = Math.floor((differTime % (1000*60*60*24)) / (1000*60*60) );
  let munites = Math.floor((differTime % (1000*60*60)) / (1000*60) );
  let seconds = Math.floor((differTime % (1000*60)) / (1000) );
  mydays.textContent = days;
  myhrs.textContent = hours;
  myminutes.innerHTML = munites;
  myscnds.innerHTML = seconds;

}, 1000);




//function to scroll into section
function GotoSection(elemnts){
  elemnts.forEach ((elemnt)=>{
    elemnt.addEventListener("click",(e)=>{
      e.preventDefault(); 
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
}
let mybulletsContainer = document.querySelector(".nav-bullets");
let mybullets = document.querySelectorAll(".nav-bullets");
GotoSection(mybullets);

let myLinks = document.querySelectorAll(".links a");
GotoSection(myLinks);

let mybullets1 = document.querySelectorAll(".nav-bullets div");


addActiveClass(mybullets1);
//function add class active
function addActiveClass(elemnts){
  elemnts.forEach((el)=>{
    el.addEventListener("click",()=>{
      elemnts.forEach((e)=>{
        e.classList.remove("active");
      });
      el.classList.add("active");
    });
  });
}

//bullets
let bulletsSection ;
let mybtnbullet = document.querySelectorAll(".set-background .box-bullets span");

mybtnbullet.forEach((span) => {
  span.addEventListener("click",()=>{
    if(span.classList.contains("bultrue")){
      bulletsSection = true;
      mybulletsContainer.style.display = "block";
      localStorage.setItem("buloption",true);
    }
    else{
      localStorage.setItem("buloption",false);
      bulletsSection = false;
      mybulletsContainer.style.display = "none";
    }
  });
})
addActiveClass(mybtnbullet);

if(localStorage.getItem("buloption") === "true" || localStorage.getItem("buloption") === "false" ){
  if(localStorage.getItem("buloption") === "true"){
    mybtnbullet.forEach(btn=>{
      btn.classList.remove("active");
    })
    document.querySelector(".bultrue").classList.add("active");
    mybulletsContainer.style.display = "block";
  }
  else {
    mybulletsContainer.style.display = "none";
    mybtnbullet.forEach(btn=>{
      btn.classList.remove("active");
    })
    document.querySelector(".bulfalse").classList.add("active");
  }
}

mybtnbullet.forEach((bul)=>{
  bul.addEventListener("click",()=> {
    if(bul.classList.contains("bultrue")){
      mybulletsContainer.style.display = "block";
    }
    else if(bul.classList.contains("bulfalse")){
      mybulletsContainer.style.display = "none";
    }
  })
})


let resetbtn = document.querySelector(".reset-options");


resetbtn.addEventListener("click",()=>{
  localStorage.removeItem("color-option");
  localStorage.removeItem("backoption");
  localStorage.removeItem("buloption");
  location.reload();
})



// Testing Map


// function initMap(){
//   var location = {lat :32.504528 ,lng: -6.698547};
//   var map = new google.maps.Map(document.getElementById("map"),{
//     zoom : 4,
//     center: location
//   });
//   var marker = new google.maps.Marker({
//     position : location,
//     map: map

//   });
// }


//toggle menu
let toggleMenu = document.querySelector(".toogle-menu");
let toggleLinks = document.querySelector(".links");
toggleMenu.addEventListener("click",(e)=>{
  e.stopPropagation();
  toggleLinks.classList.toggle("show-links");
  toggleMenu.classList.toggle("show-sahm");
})

document.addEventListener("click",(e)=> {
  if(e.target !== toggleMenu && toggleLinks.classList.contains("show-links")){
    toggleLinks.classList.toggle("show-links");
    toggleMenu.classList.toggle("show-sahm");
  }
})
toggleLinks.onclick =function(e){
  e.stopPropagation();
}