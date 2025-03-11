// # Primary scripting for the main webpage
// ## Start Game Modal Scripting
const startModal = document.querySelector(".modal-box");
const buttons = document.querySelectorAll(".interact");
const playerName = document.querySelector(".character-name");
const gameDisplay = document.querySelector(".game-display");
const start = document.querySelector(".start-game")

const game = {
    characterInfo: {
        title: {name: null, class: '', level: 1, xp: 0},
        info: {maxHP: null, currentHP: null, maxMP: null, currentMP: null},
        stats: {str: null, mag: null, def: null},
        equip: {weapon: "Unarmed", armor: "Tunic"},
        items: [],
        magic: {},
    },
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.classList.contains('start-game')){
            console.log(startModal)
            startModal.style.display = "block";
        } else if (event.target.classList.contains("close")){
            startModal.style.display = "none";
        }
        if (event.target.id == "class-select") {
            if (event.target.classList.contains('warrior')) {
                event.target.classList.toggle('warrior-active');
                if (event.target.parentElement.children[1].classList.contains('rogue-active')){
                    event.target.parentElement.children[1].classList.toggle('rogue-active');
                };
                if (event.target.parentElement.children[2].classList.contains('mage-active')){
                    event.target.parentElement.children[2].classList.toggle('mage-active');
                };
            }
            if (event.target.classList.contains('rogue')) {
                event.target.classList.toggle('rogue-active');
                if (event.target.parentElement.children[0].classList.contains('warrior-active')){
                    event.target.parentElement.children[0].classList.toggle('warrior-active');
                };
                if (event.target.parentElement.children[2].classList.contains('mage-active')){
                    event.target.parentElement.children[2].classList.toggle('mage-active');
                };
            }
            if (event.target.classList.contains('mage')) {
                event.target.classList.toggle('mage-active');
                if (event.target.parentElement.children[0].classList.contains('warrior-active')){
                    event.target.parentElement.children[0].classList.toggle('warrior-active');
                };
                if (event.target.parentElement.children[1].classList.contains('rogue-active')){
                    event.target.parentElement.children[1].classList.toggle('rogue-active');
                };
            }
        }
        if (event.target.classList.contains("start-btn")) {
            console.log(playerName.value)
            console.dir(document.getElementsByClassName('warrior-active'))
            if (playerName.value !== '') {
                game.characterInfo.title.name = playerName.value;
                console.log(game.characterInfo)
            } else {
                console.log('Error') // Error message
            }
            buttons.forEach((classChoice) => {
                if (classChoice.classList.contains('warrior-active') === true) {
                    game.characterInfo.title.class = "Warrior";
                }
                if (classChoice.classList.contains('rogue-active') === true) {
                    game.characterInfo.title.class = "Rogue"
                }
                if (classChoice.classList.contains('mage-active') === true) {
                    game.characterInfo.title.class = "Mage"
                }
            })
            startModal.style.display = "none";
            start.remove();
        }
    }) 
});

// start.addEventListener('click', () => {
    
//     console.log('test');
// });

startModal.addEventListener("click", (event) => {
    if (event.target == startModal) {
        startModal.style.display = "none";
    } else if (event.target.classList.contains("close")){
        startModal.style.display = "none";
    }
})


// ## SECONDARY - Game Scripting
// const enemy = require('/enemylist.js')
// const items = require('./itemlist.js')
const main = require('./main.js');
const charaClass = require("./characterclass.js")

