// # Primary scripting for the main webpage

// ## Start Game Modal Scripting
let startModal = document.getElementById("modal");
let startBtn = document.getElementById("start-game");
let span = document.getElementsByClassName("close")[0];

document.addEventListener("click", modal(event.target)) 


function modal(event) {
    if (event.target == startBtn) {
        startModal.style.display = "block";
    }
    if (event.target == span) {
        startModal.style.display = "none";
    }
    if (event.target == modal) {
        startModal.style.display = "none";
    }
}