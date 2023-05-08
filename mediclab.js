//Hamburger Menu
let mobileMenu = document.querySelector("#mobile-menu");
let hamburgerLine = document.getElementsByClassName("hamburger-line");
document.getElementById("hamburger-menu").addEventListener("click", function(){
    if(mobileMenu.classList.contains("slidedown") === false ){
        mobileMenu.classList.add("slidedown");
        mobileMenu.style.opacity = 1;
        mobileMenu.style.transform = ("translateY(0vh)");
        hamburgerLine[1].style.width = "2rem";
        hamburgerLine[2].style.width = "1rem";
    }
    else{
        mobileMenu.classList.remove("slidedown");
        mobileMenu.style.opacity = 0;
        mobileMenu.style.transform = ("translateY(-100vh)");
        hamburgerLine[1].style.width = "3rem";
        hamburgerLine[2].style.width = "3rem";
    }
})



// Change header on Scroll
function changeHeaderColor(){
    let navigationBar = document.querySelector("#logoNav");
    let navText = document.querySelectorAll('.nav-text')
    if (window.scrollY >= 32 ){
        navigationBar.style.backgroundColor = "white";
        navText[0].style.color = "#5B5B5B"
        navText[1].style.color = "#5B5B5B"
        navText[2].style.color = "#5B5B5B"
        navText[3].style.color = "#5B5B5B"
        navText[4].style.color = "#5B5B5B"
        navText[5].style.color = "#5B5B5B"
        navText[6].style.color = "#5B5B5B"
    }
    else{
        navigationBar.style.backgroundColor = "#ffffff00";
        navText[0].style.color = "white"
        navText[1].style.color = "white"
        navText[2].style.color = "white"
        navText[3].style.color = "white"
        navText[4].style.color = "white"
        navText[5].style.color = "white"
        navText[6].style.color = "white"
    }
    }
window.addEventListener("scroll", changeHeaderColor);



//Close Mobile Menu on Click
let moblileMenuList = document.querySelectorAll(".mobile-menu-list")
function closeMenu(){
    mobileMenu.classList.remove("slidedown");
    mobileMenu.style.opacity = 0;
    mobileMenu.style.transform = ("translateY(-100vh)");
    hamburgerLine[1].style.width = "3rem";
    hamburgerLine[2].style.width = "3rem";

}
moblileMenuList[0].addEventListener("click", closeMenu)
moblileMenuList[1].addEventListener("click", closeMenu)
moblileMenuList[2].addEventListener("click", closeMenu)
moblileMenuList[3].addEventListener("click", closeMenu)
moblileMenuList[4].addEventListener("click", closeMenu)
moblileMenuList[5].addEventListener("click", closeMenu)
moblileMenuList[6].addEventListener("click", closeMenu)



//Background Image Slider
window.onload = function () {

    function changeImage() {   
        var BackgroundImg=[
            "images/bg1.jpg",
            "images/bg2.jpg",
            "images/bg3.jpg",
            "images/bg4.jpg",
            "images/bg5.jpg",
            "images/bg6.jpg",
            "images/bg7.jpg"
        ];
        var i = Math.floor((Math.random() * 7));
        document.querySelector("header").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 5000);
}



//FAQ Accordion
var accordion = document.querySelectorAll(".accordion");
var panel = document.querySelectorAll(".panel");

function dropdownZero() {
    if (panel[0].classList.contains("slide-down")) {
        panel[0].classList.remove("slide-down")
        panel[0].style.opacity = 0
        panel[0].style.height = 0
    }
    else {
        panel[0].classList.add("slide-down")
        panel[0].style.opacity = 1
        panel[0].style.height = "7rem"
    }
};

function dropdownOne() {
    if (panel[1].classList.contains("slide-down")) {
        panel[1].classList.remove("slide-down")
        panel[1].style.opacity = 0
        panel[1].style.height = 0
    }
    else {
        panel[1].classList.add("slide-down")
        panel[1].style.opacity = 1
        panel[1].style.height = "7rem"
    }
};

function dropdownTwo() {
    if (panel[2].classList.contains("slide-down")) {
        panel[2].classList.remove("slide-down")
        panel[2].style.opacity = 0
        panel[2].style.height = 0
    }
    else {
        panel[2].classList.add("slide-down")
        panel[2].style.opacity = 1
        panel[2].style.height = "7rem"
    }
};

function dropdownThree() {
    if (panel[3].classList.contains("slide-down")) {
        panel[3].classList.remove("slide-down")
        panel[3].style.opacity = 0
        panel[3].style.height = 0
    }
    else {
        panel[3].classList.add("slide-down")
        panel[3].style.opacity = 1
        panel[3].style.height = "7rem"
    }
};

function dropdownFour() {
    if (panel[4].classList.contains("slide-down")) {
        panel[4].classList.remove("slide-down")
        panel[4].style.opacity = 0
        panel[4].style.height = 0
    }
    else {
        panel[4].classList.add("slide-down")
        panel[4].style.opacity = 1
        panel[4].style.height = "auto"
    }
};

function dropdownFive() {
    if (panel[5].classList.contains("slide-down")) {
        panel[5].classList.remove("slide-down")
        panel[5].style.opacity = 0
        panel[5].style.height = 0
    }
    else {
        panel[5].classList.add("slide-down")
        panel[5].style.opacity = 1
        panel[5].style.height = "7rem"
    }
};

function dropdownSix() {
    if (panel[6].classList.contains("slide-down")) {
        panel[6].classList.remove("slide-down")
        panel[6].style.opacity = 0
        panel[6].style.height = 0
    }
    else {
        panel[6].classList.add("slide-down")
        panel[6].style.opacity = 1
        panel[6].style.height = "7rem"
    }
};

function dropdownSeven() {
    if (panel[7].classList.contains("slide-down")) {
        panel[7].classList.remove("slide-down")
        panel[7].style.opacity = 0
        panel[7].style.height = 0
    }
    else {
        panel[7].classList.add("slide-down")
        panel[7].style.opacity = 1
        panel[7].style.height = "auto"
    }
};

function dropdownEight() {
    if (panel[8].classList.contains("slide-down")) {
        panel[8].classList.remove("slide-down")
        panel[8].style.opacity = 0
        panel[8].style.height = 0
    }
    else {
        panel[8].classList.add("slide-down")
        panel[8].style.opacity = 1
        panel[8].style.height = "auto"
    }
};

function dropdownNine() {
    if (panel[9].classList.contains("slide-down")) {
        panel[9].classList.remove("slide-down")
        panel[9].style.opacity = 0
        panel[9].style.height = 0
    }
    else {
        panel[9].classList.add("slide-down")
        panel[9].style.opacity = 1
        panel[9].style.height = "auto"
    }
};
accordion[0].addEventListener("click", dropdownZero);
accordion[1].addEventListener("click", dropdownOne);
accordion[2].addEventListener("click", dropdownTwo);
accordion[3].addEventListener("click", dropdownThree);
accordion[4].addEventListener("click", dropdownFour);
accordion[5].addEventListener("click", dropdownFive);
accordion[6].addEventListener("click", dropdownSix);
accordion[7].addEventListener("click", dropdownSeven);
accordion[8].addEventListener("click", dropdownEight);
accordion[9].addEventListener("click", dropdownNine);
