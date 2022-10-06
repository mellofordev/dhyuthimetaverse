
//Logos Island
//below is the code written for dev branch !  i mean the commented one
/*const navIslandNo = document.getElementById("top1").childElementCount;
const navIsland = document.getElementById("top1");
const navIsland2=document.getElementById("top2");
const navIsland2Child=navIsland2.children;
const navIslandChildren = navIsland.children;
//sound parts 
const sound_island = document.getElementById("sound1");
const sound_island2 =document.getElementById("sound2");
const isMobile = navigator.userAgentData.mobile;
var navIslandState = 'expanded';
var scrollHeight;
function compressIsland(){
    var i;
    for (i = 0; i< navIslandNo; i++){
        navIslandChildren[i].children[1].style.display = 'none';
        navIsland2Child[i].children[1].style.display='none';
    }
}
function expandIsland(){
    var i;
    for (i = 0; i< navIslandNo; i++){
        navIslandChildren[i].children[1].style="display:content;";
        navIsland2Child[i].children[1].style="display:content;";
    }
}
window.addEventListener('scroll',function(){
    scrollHeight = this.window.scrollY;
    if(scrollHeight > 0){
        compressIsland();
        
        navIsland.style="display:none;"
        navIsland2.style="display:content;position:fixed;width:200px;"
        sound_island.style="display:none;";
        sound_island2.style="display:block;margin-right:105px;position:fixed;";
    }
    if(scrollHeight == 0){
        expandIsland();
        
        navIsland.style="display:content;"
        navIsland2.style="display:none;"
        sound_island.style="display:content";
        sound_island2.style="display:none";

    }
});
navIsland.addEventListener('mouseover',function(){
    expandIsland();
});
navIsland.addEventListener('mouseout',function(){
    compressIsland();
});

*/

// Music Island 
const music = document.querySelector('.sound-container').children;
const child1 = music[0];
const child2 = music[1];
const child3 = music[2];
const maxHeight = 25;
const minHeight = 15;
var musicState = 'On';
var intervalId;
var song = document.getElementById('song');
//Play
function on(){
    song.play();
    function randomheights(){
        var randomInteger = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;
        return randomInteger;
    }

    function changeHeights(){
        child1.style.height = randomheights() + 'px';
        child2.style.height = randomheights() + 'px';
        child3.style.height = randomheights() + 'px';
    }
    musicState = 'On';
    intervalId = setInterval(changeHeights,500);
}
//Mute
function off(){
    song.pause();
    musicState = 'Off';
    clearInterval(intervalId);
    child1.style.height = minHeight + 'px';
    child2.style.height = minHeight + 'px';
    child3.style.height = minHeight + 'px';
}

on();

//Switch States
document.querySelector('.sound-container').addEventListener('click',function(){
    if(musicState === 'On'){
        off();
    }
    else{
        on();
    }
});


//Logos Island
const navIslandNo = document.querySelector('.logos-island').childElementCount;
const navIsland = document.querySelector('.logos-island');
const navIslandChildren = document.querySelector('.logos-island').children;
const isMobile = navigator.userAgentData.mobile;
var navIslandState = 'expanded';
var scrollHeight;
function compressIsland(){
    var i;
    for (i = 0; i< navIslandNo; i++){
        navIslandChildren[i].children[1].style.display = 'none';
    }
}
function expandIsland(){
    var i;
    for (i = 0; i< navIslandNo; i++){
        if(isMobile==false){
            navIslandChildren[i].children[1].style.display = 'block';
        }else{
            navIslandChildren[i].children[1].style.display = 'none';   
        }
       
    }
}
window.addEventListener('scroll',function(){
    scrollHeight = this.window.scrollY;
    if(scrollHeight > 0){
        compressIsland();
    }
    if(scrollHeight == 0){
        expandIsland();
    }
});
navIsland.addEventListener('mouseover',function(){
    expandIsland();
});
navIsland.addEventListener('mouseout',function(){
    compressIsland();
});

