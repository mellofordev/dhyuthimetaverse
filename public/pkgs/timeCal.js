var days=document.getElementById("days");
var hours=document.getElementById("hours");
var mins=document.getElementById("mins");
var secs =document.getElementById("secs");
//todo : change this to more readable format make a map object and iterate over each objs
//rn read,low 
var get_d_circle1=document.getElementById("d1");
var get_m_circle1=document.getElementById("m1");
var get_d_circle2=document.getElementById("d2");
var get_m_circle2=document.getElementById("m2");
var get_d_circle3=document.getElementById("d3");
var get_m_circle3=document.getElementById("m3");
var get_d_circle4=document.getElementById("d4");
var get_m_circle4=document.getElementById("m4");
const endTime= new Date("2022-11-11 18:00:00");
    
function timeCal(){
    const date = new Date();
    currentDateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    var difference = (endTime - currentDateTime)/1000;
    var dayValue = Math.floor(difference/(60*60*24));
    var dayRemainder = difference%(60*60*24);
    var hourValue = Math.floor(dayRemainder/(60*60));
    var hourRemainder = difference%(60*60);
    var minsValue = Math.floor(hourRemainder/60);
    var minsRemainder = difference%60;
    var secsValue = Math.floor(minsRemainder);
    days.innerHTML = dayValue;
    hours.innerHTML = hourValue;
    mins.innerHTML = minsValue;
    secs.innerHTML = secsValue;
    get_d_circle1.setAttribute("stroke-dasharray",`${dayValue},240`);
    get_m_circle1.setAttribute("stroke-dasharray",`${dayValue},240`);
    get_d_circle2.setAttribute("stroke-dasharray",`${hourValue},240`);
    get_m_circle2.setAttribute("stroke-dasharray",`${hourValue},240`);
    get_d_circle3.setAttribute("stroke-dasharray",`${minsValue},240`);
    get_m_circle3.setAttribute("stroke-dasharray",`${minsValue},240`);
    //get_d_circle4.setAttribute("stroke-dasharray",`${secsValue},240`);
    //get_m_circle4.setAttribute("stroke-dasharray",`${secsValue},240`);
}
setInterval(timeCal,1000)