AFRAME.registerComponent('mobilecontroller',{
    schema:{
        velocity:{type:"number",default:20},
        threshold:{type:"number",default:-40}

    },
    init:function(){
        
        var camera = document.querySelector("[camera]").components["mobilecontroller"];
        camera.componentName="mobilecontroller";
        var canvas =document.querySelectorAll('.a-canvas');
        var upkey =document.getElementById("up");
        var downkey=document.getElementById("down");
        var leftkey =document.getElementById("left");
        var rightkey=document.getElementById("right");
        console.log(camera.data);

    },
    thick:function(){

    },
    update:function(){
        if(this.el.components["mobilecontroller"]!==undefined){
            this.el.components["wasd-controls"].data.acceleration=this.data.velocity;

        }
    },
    play:function(){},
    pause:function(){},
    remove:function(){
        if(this.el.components["wasd-controls"]==undefined){
            this.el.removeAttribute("wasd-controls");
        }
    }
});