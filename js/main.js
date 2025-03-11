// # Primary scripting for the main webpage

// ## Start Game Modal Scripting

const startModal = document.querySelector(".modal-box");
const buttons = document.querySelectorAll(".interact");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.classList.contains('start-game')){
            console.log(startModal)
            startModal.style.display = "block";
        } else if (event.target.classList.contains("close")){
            startModal.style.display = "none";
        }
    }) 
});

startModal.addEventListener("click", (event) => {
        if (event.target == startModal) {
            startModal.style.display = "none";
        } else if (event.target.classList.contains("close")){
            startModal.style.display = "none";
        }
    })