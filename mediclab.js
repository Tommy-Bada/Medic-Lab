var accordion = document.getElementsByClassName("accordion");
var panel = document.querySelector(".panel");
function dropdown() {
    if (panel.style.display === "none") {
        panel.style.display = "block"
    }
    else {
        panel.style.display = "none"
    }
};
function testing(){
    console.log("Tomiwa")
}
accordion[0].addEventListener("click", dropdown);
accordion[1].addEventListener("click", dropdown);
accordion[2].addEventListener("click", dropdown);
accordion[3].addEventListener("click", dropdown);