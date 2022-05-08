var accordion = document.querySelector(".accordion");
var panel = document.querySelector(".panel");
function dropdown() {
    if (panel.style.display === "none") {
        panel.style.display = "block"
    }
    else {
        panel.style.display = "none"
    }
};
document.querySelector(".accordion").addEventListener("onclick", dropdown());