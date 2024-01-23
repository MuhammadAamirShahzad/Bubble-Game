
var clutter= '';     // All saved bubbles will be stored in this
var timer = 60 ; // initiated with 60, so that time will start decreasing from 60.
var hitNum = 0 ;
var score = 0;


function bubbleMaking(){
for (var i =0; i<=125; i++){
var random=Math.floor(Math.random()*10)// for creation of random number b/w 1-10
    clutter +=`<div class="bubble">${random}</div>` ;

    document.querySelector(".pbotom").innerHTML=clutter;
}
return;
};
    

function updatedHit(){
     hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hitnumber").innerHTML=hitNum;
};

function increeaseScore(){
    score+=10;
    document.querySelector("#scre").textContent= score;
    console.log("barh gya");
};


function timeDisplay(){
    var timeValue = setInterval(function(){
        if (timer > 0){
        timer-- ;
        if(timer<10 ){
            blink(timeValue);}
        
        document.querySelector("#timeTeller").textContent=timer;
       
    
        document.querySelector("#timeTeller").textContent=timer;
    }
    else{
    clearInterval(timeValue);
    document.querySelector(".pbotom").innerHTML= `<div id="endG" ><h1>Game Over</h1></div>`;
         }
    }
    
    , 1000)
    

};

function blink(){
    document.querySelector("#timeTeller").style.color = "#ffff00";

     setInterval(blinkNow,750);
    
    blinkNow();


    function blinkNow(){
          let a = document.querySelector("#timeTeller");
          let b = document.querySelector("#timeWord");

          if(((!a.style.visibility || a.style.visibility === "visible")) &&(timer>0)){
            a.style.visibility="hidden"
            
          }
          else 
          a.style.visibility="visible"
    };
    
};
function startGame() {
    try {
        var contentElement = document.querySelector(".content");
        var videoElement = document.querySelector("#myVideo");
        var mainElement = document.querySelector(".main");

        if (contentElement) {
            contentElement.style.display = "none";
            console.log("Content element hidden");
        } else {
            console.error("Content element not found");
        }

        if (videoElement) {
            videoElement.style.display = "none";
            console.log("Video element hidden");
        } else {
            console.error("Video element not found");
        }

        if (mainElement) {
            mainElement.style.width = "90%"; // Set the width property to 90%
            mainElement.style.height = "85%"; // Set the height property to 85%
            console.log("Main element dimensions set");
        } else {
            console.error("Main element not found");
        }

        console.log("Game started successfully");
        timer=60;
    } catch (error) {
        console.error("An error occurred:", error);
    }
    
};

 function chalo (){
 bubbleMaking();
updatedHit();
 increeaseScore();
 return;
 };



timeDisplay();
bubbleMaking();
updatedHit();



document.querySelector(".pbotom").addEventListener("click", function(chawal){
    var clickedNum = Number(chawal.target.textContent);
    console.log(clickedNum)
    if(clickedNum === hitNum){
        chalo();
        bubbleMaking();updatedHit();
    }
    else{
        bubbleMaking();updatedHit();
    }
        return; });
