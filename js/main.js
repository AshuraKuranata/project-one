// # Primary scripting for the main webpage
// ## Start Game Modal Scripting
const startModal = document.querySelector(".modal-box");
const buttons = document.querySelectorAll(".interact");
const playerName = document.querySelector(".character-name");
const gameDisplay = document.querySelector(".game-display");
const start = document.querySelector(".start-game");
const townLoc = document.querySelector(".town");

// ## SECONDARY - Game Scripting
const charaClass = [
    { class: "warrior", maxHP: 30, maxMP: 0, str: 15, mag: 0},
    { class: "rogue", maxHP: 25, maxMP: 10, str: 12, mag: 5},
    { class: "mage", maxHP: 20, maxMP: 20, str: 10, mag: 15},
]
const game = {
    characterInfo: {
        title: {name: null, class: '', level: 1, xp: 0},
        info: {maxHP: 0, currentHP: 0, maxMP: 0, currentMP: 0},
        stats: {str: 0, mag: 0, def: 0},
        equip: {weapon: "Unarmed", armor: "Tunic"},
        items: [],
        magic: {},
    },
}

// Modal Operation
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
        // Build Character once "Start Now" is selected
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
                    document.getElementById("warrior-img").style.display = "block";
                    game.characterInfo.info.maxHP = charaClass[0].maxHP;
                    game.characterInfo.info.currentHP = game.characterInfo.info.maxHP;
                    game.characterInfo.info.maxMP = charaClass[0].maxMP;
                    game.characterInfo.info.currentMP = game.characterInfo.info.maxMP;
                    game.characterInfo.stats.str = charaClass[0].str;
                    game.characterInfo.stats.mag = charaClass[0].mag;
                }
                if (classChoice.classList.contains('rogue-active') === true) {
                    game.characterInfo.title.class = "Rogue";
                    document.getElementById("rogue-img").style.display = "block";  
                    game.characterInfo.info.maxHP = charaClass[1].maxHP;
                    game.characterInfo.info.currentHP = game.characterInfo.info.maxHP;
                    game.characterInfo.info.maxMP = charaClass[1].maxMP;
                    game.characterInfo.info.currentMP = game.characterInfo.info.maxMP;
                    game.characterInfo.stats.str = charaClass[1].str;
                    game.characterInfo.stats.mag = charaClass[1].mag;               
                }
                if (classChoice.classList.contains('mage-active') === true) {
                    game.characterInfo.title.class = "Mage";
                    document.getElementById("mage-img").style.display = "block";
                    game.characterInfo.info.maxHP = charaClass[2].maxHP;
                    game.characterInfo.info.currentHP = game.characterInfo.info.maxHP;
                    game.characterInfo.info.maxMP = charaClass[2].maxMP;
                    game.characterInfo.info.currentMP = game.characterInfo.info.maxMP;
                    game.characterInfo.stats.str = charaClass[2].str;
                    game.characterInfo.stats.mag = charaClass[2].mag;
                }
            })
            // Generate character selection in window
            document.getElementById("playerName").innerHTML = `Name: ${playerName.value}`;
            document.getElementById("playerClass").innerHTML = `Class: ${game.characterInfo.title.class}`
            document.getElementById("characterHP").innerHTML = `HP ${game.characterInfo.info.currentHP}/${game.characterInfo.info.maxHP}`
            document.getElementById("characterMP").innerHTML = `MP ${game.characterInfo.info.currentMP}/${game.characterInfo.info.maxMP}`
            document.getElementById("characterLevel").innerHTML = `Level: ${game.characterInfo.title.level}`
            document.getElementById("characterXP").innerHTML = `XP: ${game.characterInfo.title.xp}`
            document.getElementById("characterStr").innerHTML = `Strength: ${game.characterInfo.stats.str}`
            document.getElementById("characterMag").innerHTML = `Magic: ${game.characterInfo.stats.mag}`
            startModal.style.display = "none";
            start.remove();
            townLoc.style.display = "flex"
        }
    }) 
});

console.log(game)



startModal.addEventListener("click", (event) => {
    if (event.target == startModal) {
        startModal.style.display = "none";
    } else if (event.target.classList.contains("close")){
        startModal.style.display = "none";
    }
})