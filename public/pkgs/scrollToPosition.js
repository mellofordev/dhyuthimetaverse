//back-to-top button 
const home = document.querySelector("#home");
const goToHome = () => {
    home.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};


//go to about section code
const about = document.querySelector(".about");
const goToAbout = () => {
    about.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};


//go to teams section code
const campusambassador = document.querySelector("#campus");
const goToCA = () => {
    campusambassador.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};


//go to events section code
const contact = document.querySelector(".footer");
const goToContact = () => {
    contact.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};
