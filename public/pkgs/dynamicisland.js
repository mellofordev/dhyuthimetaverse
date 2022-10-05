
//Logos Island
const navIslandNo = document.getElementById("top1").childElementCount;
const navIsland = document.getElementById("top1");
const navIsland2=document.getElementById("top2");
const navIsland2Child=navIsland2.children;
const navIslandChildren = navIsland.children;
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
        navIslandChildren[i].children[1].style.display = 'block';
        navIsland2Child[i].children[1].style.display = 'block';
    }
}
window.addEventListener('scroll',function(){
    scrollHeight = this.window.scrollY;
    if(scrollHeight > 0){
        compressIsland();
        
        navIsland.style="display:none;"
        navIsland2.style="display:content;position:fixed;width:200px;"
    }
    if(scrollHeight == 0){
        expandIsland();
        
        if(isMobile==false){
            navIsland.style="display:content;width:500px;"
            
        }else{
            navIsland.style="display:content;width:300px;"
        }
        navIsland2.style="display:none;"
    }
});
navIsland.addEventListener('mouseover',function(){
    expandIsland();
});
navIsland.addEventListener('mouseout',function(){
    compressIsland();
});

