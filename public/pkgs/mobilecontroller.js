//add friction to make smooth movements ;

AFRAME.registerComponent('mobilecontroller',{
    schema:{
        velocity:{type:"number",default:20},
        threshold:{type:"number",default:-40}

    },
    init:function(){
        var get_camera =document.getElementById("cam");
        var upkey =document.getElementById("up");
        var downkey=document.getElementById("down");
        var leftkey =document.getElementById("left");
        var rightkey=document.getElementById("right");
        console.log(get_camera.object3D);
        upkey.addEventListener('touchstart',()=>{
         var position_ =get_camera.getAttribute("position");
         
         position_.z-=0.154; //change it to some another value for smooth movement may use math.sin 

         get_camera.setAttribute("position",position_);
         console.log(get_camera.getAttribute("position"))
        })
        downkey.addEventListener('touchstart',()=>{
            
            var position_ =get_camera.getAttribute("position");
            
            position_.z+=0.154;
   
            get_camera.setAttribute("position",position_);
            console.log(get_camera.getAttribute("position"))
           })
        leftkey.addEventListener('touchstart',()=>{
            var position_ =get_camera.getAttribute("position");
            var rotation_ =get_camera.getAttribute("rotation");

            position_.x-=0.154;
            get_camera.setAttribute("position",position_);
            console.log(get_camera.getAttribute("position"))
        })
        rightkey.addEventListener('touchstart',()=>{
            var position_ =get_camera.getAttribute("position");
            
            position_.x+=0.154;
   
            get_camera.setAttribute("position",position_);
            console.log(get_camera.getAttribute("position"))
        })
    },

});