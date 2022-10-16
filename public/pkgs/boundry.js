//Trying to set a boundry to the environment 
//by calling out the enviroment entity from immersive 
//and converting it to corresponding threejs api;
AFRAME.registerComponent('boundry-set',{
    schema:{
        matrixW:{
            dimensions:[0,0,0,0]
        }
    },
    init:function(){
        var get_environment =document.getElementById("environment").object3D;
        var get_camera= document.getElementById("cam").object3D;
        console.log(get_camera);
    }
})