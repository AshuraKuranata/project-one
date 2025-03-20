// # Primary scripting for the main webpage
// ## Start Game Modal Scripting
const startModal = document.querySelector(".modal-box");
const buttons = document.querySelectorAll(".interact");
const playerName = document.querySelector(".character-name");
const gameDisplay = document.querySelector(".game-display");
const start = document.querySelector(".start-game");
const townLoc = document.querySelector(".town");
const merchLoc = document.querySelector(".merchShop");
const encounterLoc = document.querySelector(".battle");
const mainMenu = document.querySelector(".basic-menu");
const merchMenu = document.querySelector(".merchant");
const encounterMenu = document.querySelector(".encounter");
const battleMenu = document.querySelector(".battle-menu");
const gameOverDisplay = document.querySelector(".game-over")
const dialogBox = document.querySelector(".dialog")
const statsHover = document.querySelector(".characterstats")

// Game Objects
const charaClass = [
    { class: "warrior", maxHP: 30, maxMP: 0, str: 15, mag: 0},
    { class: "rogue", maxHP: 25, maxMP: 10, str: 12, mag: 5},
    { class: "mage", maxHP: 20, maxMP: 20, str: 10, mag: 15},
]

function gameOver() {

    gameOverDisplay.style.display = "flex";
}

function gameText(text) {
    dialogBox.prepend(text)
}

const game = {
    characterInfo: {
        title: {name: null, class: '', level: 1, xp: 0},
        info: {maxHP: 0, currentHP: 0, maxMP: 0, currentMP: 0},
        stats: {str: 0, mag: 0, def: 0, gold: 50},
        equip: {weapon: "", armor: ""},
        items: [{name: "Potion", healHP: 10, quantity: 0, price: 10}],
        magic: {},
    },
}

const encounterRan = {
    enemyRan1: {
    }
}

const enemyList = [
    {name: "Slime", HP: 25, atk: 5, def: 1, gold: 10, xp: 5},
    {name: "SUPER SLIME", HP: 40, atk: 8, def: 1, gold: 20, xp: 10}
]

const shop = {
    weapons: [
        {name: "Wood Sword", atk: 2, price: 40}
    ],
    armor: [
        {name: "Cloth Armor", def: 3, price: 30}
    ],
    item: [
        {name: "Potion", healHP: 10, quantity: 0, price: 10}
    ]
}

// Button operation for the whole program
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Modal Operation
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
        // Build Character when "Start Now" is selected
        if (event.target.classList.contains("start-btn")) {
            buttons.forEach((classChoice) => {
                if (classChoice.classList.contains('warrior-active') === true) {
                    game.characterInfo.title.class = "Warrior";
                }
                if (classChoice.classList.contains('rogue-active') === true) {
                    game.characterInfo.title.class = "Rogue";           
                }
                if (classChoice.classList.contains('mage-active') === true) {
                    game.characterInfo.title.class = "Mage";
                }
            })
            if (playerName.value !== '' && game.characterInfo.title.class !== '') {
                game.characterInfo.title.name = playerName.value;
            } else {
                // Prevent from continuing without Name and Class Selection
                return
            }
            // Generate character selection in window
            if (game.characterInfo.title.class === "Warrior") {
                document.getElementById("warrior-img").style.display = "block";
                game.characterInfo.info.maxHP = charaClass[0].maxHP;
                game.characterInfo.info.currentHP = game.characterInfo.info.maxHP;
                game.characterInfo.info.maxMP = charaClass[0].maxMP;
                game.characterInfo.info.currentMP = game.characterInfo.info.maxMP;
                game.characterInfo.stats.str = charaClass[0].str;
                game.characterInfo.stats.mag = charaClass[0].mag;
            }
            if (game.characterInfo.title.class === "Rogue") {
                document.getElementById("rogue-img").style.display = "block";  
                game.characterInfo.info.maxHP = charaClass[1].maxHP;
                game.characterInfo.info.currentHP = game.characterInfo.info.maxHP;
                game.characterInfo.info.maxMP = charaClass[1].maxMP;
                game.characterInfo.info.currentMP = game.characterInfo.info.maxMP;
                game.characterInfo.stats.str = charaClass[1].str;
                game.characterInfo.stats.mag = charaClass[1].mag;               
            }
            if (game.characterInfo.title.class === "Mage") {
                document.getElementById("mage-img").style.display = "block";
                game.characterInfo.info.maxHP = charaClass[2].maxHP;
                game.characterInfo.info.currentHP = game.characterInfo.info.maxHP;
                game.characterInfo.info.maxMP = charaClass[2].maxMP;
                game.characterInfo.info.currentMP = game.characterInfo.info.maxMP;
                game.characterInfo.stats.str = charaClass[2].str;
                game.characterInfo.stats.mag = charaClass[2].mag;
            }
            document.getElementById("playerName").innerHTML = `Name: ${playerName.value}`;
            document.getElementById("playerClass").innerHTML = `Class: ${game.characterInfo.title.class}`
            document.getElementById("characterHP").innerHTML = `HP ${game.characterInfo.info.currentHP}/${game.characterInfo.info.maxHP}`
            document.getElementById("characterMP").innerHTML = `MP ${game.characterInfo.info.currentMP}/${game.characterInfo.info.maxMP}`
            document.getElementById("characterLevel").innerHTML = `Level: ${game.characterInfo.title.level}`
            document.getElementById("characterXP").innerHTML = `XP: ${game.characterInfo.title.xp}`
            document.getElementById("characterStr").innerHTML = `Strength: ${game.characterInfo.stats.str}`
            document.getElementById("characterMag").innerHTML = `Magic: ${game.characterInfo.stats.mag}`
            document.getElementById("characterArmor").innerHTML = `Armor: ${game.characterInfo.stats.def}`
            document.getElementById("characterGold").innerHTML = `Money: ${game.characterInfo.stats.gold}gp`
            startModal.style.display = "none";
            start.remove();
            townLoc.style.display = "flex";
            mainMenu.style.display = "flex";
            const text = document.createElement('li');
            text.id = "text"
            text.innerHTML = `Welcome ${game.characterInfo.title.name} to Primers Town. You have chosen ${game.characterInfo.title.class}.  Good Luck!`
            gameText(text);
        }

    // Game Action Buttons 
        // Shop Interaction
        if (event.target.id == "shop") {
            townLoc.style.display = "none";
            mainMenu.style.display = "none";
            merchMenu.style.display = "flex";
            merchLoc.style.display = "flex"
            const text = document.createElement('li');
            text.id = "text"
            text.innerHTML = `You have entered the market square. You hear the sounds of many hawkers selling their wares.`
            gameText(text);
        }
        if (event.target.id == "buy") {
            merchMenu.style.display = "none";
            document.getElementById("stock").style.display = "flex";
            const text = document.createElement('li');
            text.id = "text"
            text.innerHTML = `What're you buying?`
            gameText(text);
        }
        if (event.target.classList.contains('purchase')) {
            if (event.target.id == "wood-sword") {
                if (game.characterInfo.stats.gold >= shop.weapons[0].price) {
                    const text = document.createElement('li');
                    text.id = "text"
                    text.innerHTML = `A Wood Sword. Good choice.`
                    gameText(text);
                    game.characterInfo.stats.gold = game.characterInfo.stats.gold - shop.weapons[0].price
                    document.getElementById("characterGold").innerHTML = `Money: ${game.characterInfo.stats.gold}gp`
                    game.characterInfo.equip.weapon = shop.weapons[0];
                    document.getElementById("equipWeapon").innerHTML = `${game.characterInfo.equip.weapon.name}`
                    document.getElementById("wood-sword").remove();
                    game.characterInfo.stats.str = game.characterInfo.stats.str + game.characterInfo.equip.weapon.atk;
                    document.getElementById("characterStr").innerHTML = `Strength: ${game.characterInfo.stats.str}`
                } else {
                    const text = document.createElement('li');
                    text.id = "text"
                    text.innerHTML = `You don't have enough gold.`
                    gameText(text);
                }
            }
            if (event.target.id == "cloth-armor") {
                if (game.characterInfo.stats.gold >= shop.armor[0].price) {
                    const text = document.createElement('li');
                    text.id = "text"
                    text.innerHTML = `Cloth Armor. Keeps you from dying to those slimes.`
                    gameText(text);
                    game.characterInfo.stats.gold = game.characterInfo.stats.gold - shop.armor[0].price
                    document.getElementById("characterGold").innerHTML = `Money: ${game.characterInfo.stats.gold}gp`
                    game.characterInfo.equip.armor = shop.armor[0];
                    document.getElementById("equipArmor").innerHTML = `${game.characterInfo.equip.armor.name}`
                    document.getElementById("cloth-armor").remove();
                    game.characterInfo.stats.def = game.characterInfo.stats.def + game.characterInfo.equip.armor.def;
                    document.getElementById("characterArmor").innerHTML = `Armor: ${game.characterInfo.stats.def}`
                } else {
                    const text = document.createElement('li');
                    text.id = "text"
                    text.innerHTML = `You don't have enough gold.`
                    gameText(text);
                }
            }
            if (event.target.id == "potion") {
                if (game.characterInfo.stats.gold >= shop.item[0].price) {
                    const text = document.createElement('li');
                    text.id = "text"
                    text.innerHTML = `Potions, will keep you alive in a fight.`
                    gameText(text);
                    game.characterInfo.stats.gold = game.characterInfo.stats.gold - shop.item[0].price;
                    document.getElementById("characterGold").innerHTML = `Money: ${game.characterInfo.stats.gold}gp`
                    game.characterInfo.items[0].quantity += 1;
                    document.getElementById("items").innerHTML = `Potions: ${game.characterInfo.items[0].quantity}`
                } else {
                    const text = document.createElement('li');
                    text.id = "text"
                    text.innerHTML = `You don't have enough gold.`
                    gameText(text);
                }
            }
        }
        if (event.target.id == "return-merch-menu") {
            const text = document.createElement('li');
            text.id = "text"
            text.innerHTML = `Anything else?`
            gameText(text);
            merchMenu.style.display = "flex";
            document.getElementById("stock").style.display = "none";
        }
        // Any menu that returns to Main Menu
        if (event.target.classList.contains('return')) {  
            merchLoc.style.display = "none"
            townLoc.style.display = "flex"
            mainMenu.style.display = "flex"
            merchMenu.style.display = "none"
            encounterLoc.style.display = "none";
            encounterMenu.style.display = "none";
            document.getElementById('slime').style.display = "none";
            battleMenu.style.display = "none";
            const text = document.createElement('li');
            text.id = "text"
            text.innerHTML = `You return to the town square.`
            gameText(text);
        }
        // Encounter Actions
        if (event.target.id == "encounter") {
            townLoc.style.display = "none";
            mainMenu.style.display = "none";
            encounterLoc.style.display = "flex";
            encounterMenu.style.display = "flex";
            const text = document.createElement('li');
            text.id = "text"
            text.innerHTML = `You head out to fight some monsters.`
            gameText(text);
        }
        if (event.target.classList.contains('random')) {
            document.getElementById('slime').style.display = "flex";
            encounterMenu.style.display = "none";
            battleMenu.style.display = "flex";
            encounterRan.enemyRan1 = structuredClone(enemyList[Math.floor(Math.random() * enemyList.length)])
            const text = document.createElement('li');
            text.id = "text"
            text.innerHTML = `You have encountered a ${encounterRan.enemyRan1.name}.`
            gameText(text);
        }
        // Battle Buttons
        if (event.target.classList.contains('use-item')) {
            if (game.characterInfo.items[0].quantity > 0 && game.characterInfo.info.currentHP < game.characterInfo.info.maxHP) {
                game.characterInfo.info.currentHP += 10;
                game.characterInfo.items[0].quantity -= 1;
                document.getElementById("items").innerHTML = `Potions: ${game.characterInfo.items[0].quantity}`
                document.getElementById("characterHP").innerHTML = `HP ${game.characterInfo.info.currentHP}/${game.characterInfo.info.maxHP}`
                if (game.characterInfo.info.currentHP > game.characterInfo.info.maxHP) {
                    const text = document.createElement('li');
                    text.id = "text"
                    text.innerHTML = `You heal ${(game.characterInfo.info.maxHP - game.characterInfo.info.currentHP) + 10} HP.`
                    gameText(text);
                    game.characterInfo.info.currentHP = game.characterInfo.info.maxHP
                    game.characterInfo.info.currentHP = game.characterInfo.info.currentHP - (encounterRan.enemyRan1.atk - game.characterInfo.stats.def)
                    const text2 = document.createElement('li');
                    text2.id = "text"
                    text2.innerHTML = `You are hit for ${encounterRan.enemyRan1.atk - game.characterInfo.stats.def}.`
                    gameText(text2);
                    document.getElementById("characterHP").innerHTML = `HP ${game.characterInfo.info.currentHP}/${game.characterInfo.info.maxHP}`
                    if (game.characterInfo.info.currentHP <= 0) {
                        gameOver();
                    }
                } else {
                const text = document.createElement('li');
                text.id = "text"
                text.innerHTML = `You heal for 10 HP.`
                gameText(text);
                game.characterInfo.info.currentHP = game.characterInfo.info.currentHP - (encounterRan.enemyRan1.atk - game.characterInfo.stats.def)
                    const text2 = document.createElement('li');
                    text2.id = "text"
                    text2.innerHTML = `You are hit for ${encounterRan.enemyRan1.atk - game.characterInfo.stats.def}.`
                    gameText(text2);
                    document.getElementById("characterHP").innerHTML = `HP ${game.characterInfo.info.currentHP}/${game.characterInfo.info.maxHP}`
                    if (game.characterInfo.info.currentHP <= 0) {
                        gameOver();
                    }
                }
            } else if (game.characterInfo.items[0].quantity <= 0) {
                const text = document.createElement('li');
                text.id = "text"
                text.innerHTML = `You don't have enough potions.`
                gameText(text);
                return;
            } else if (game.characterInfo.info.currentHP === game.characterInfo.info.maxHP) {
                const text = document.createElement('li');
                text.id = "text"
                text.innerHTML = `You are at full life`
                gameText(text);
                return;
            }
        }
        if (event.target.id == "attack") {
            encounterRan.enemyRan1.HP = encounterRan.enemyRan1.HP - (game.characterInfo.stats.str - encounterRan.enemyRan1.def)
            const text = document.createElement('li');
            text.id = "text"
            text.innerHTML = `You attack the ${encounterRan.enemyRan1.name} for ${game.characterInfo.stats.str - encounterRan.enemyRan1.def}.`
            gameText(text);
            game.characterInfo.info.currentHP = game.characterInfo.info.currentHP - (encounterRan.enemyRan1.atk - game.characterInfo.stats.def)
            const text2 = document.createElement('li');
            text2.id = "text"
            text2.innerHTML = `You are hit for ${encounterRan.enemyRan1.atk - game.characterInfo.stats.def}.`
            gameText(text2);
            document.getElementById("characterHP").innerHTML = `HP ${game.characterInfo.info.currentHP}/${game.characterInfo.info.maxHP}`
            if (game.characterInfo.info.currentHP <= 0) {
                gameOver();
            }
            if (encounterRan.enemyRan1.HP <= 0) {
                game.characterInfo.title.xp += encounterRan.enemyRan1.xp;
                document.getElementById("characterXP").innerHTML = `XP: ${game.characterInfo.title.xp}`
                game.characterInfo.stats.gold += encounterRan.enemyRan1.gold;
                document.getElementById("characterGold").innerHTML = `Money: ${game.characterInfo.stats.gold}gp`
                const text = document.createElement('li');
                text.id = "text"
                text.innerHTML = `You win! You earned ${encounterRan.enemyRan1.gold}gp and ${encounterRan.enemyRan1.xp}xp.`
                gameText(text);
                encounterRan.enemyRan1 = {};
                console.log(encounterRan)
                merchLoc.style.display = "none"
                townLoc.style.display = "flex"
                mainMenu.style.display = "flex"
                merchMenu.style.display = "none"
                encounterLoc.style.display = "none";
                encounterMenu.style.display = "none";
                document.getElementById('slime').style.display = "none";
                battleMenu.style.display = "none";
            }
        }
        // Rest function
        if (event.target.id == "rest") {
            game.characterInfo.info.currentHP = game.characterInfo.info.maxHP;
            game.characterInfo.info.currentMP = game.characterInfo.info.maxMP;
            document.getElementById("characterHP").innerHTML = `HP ${game.characterInfo.info.currentHP}/${game.characterInfo.info.maxHP}`
            document.getElementById("characterMP").innerHTML = `MP ${game.characterInfo.info.currentMP}/${game.characterInfo.info.maxMP}`
            const text = document.createElement('li');
            text.id = "text"
            text.innerHTML = `You feel refreshed and rejuvenated.  Your HP & MP are restored to max.`
            gameText(text);
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

document.querySelector(".character").addEventListener("mouseover", (hover) => {
    if (hover.target.classList.contains("characterstats") || hover.target.classList.contains("statswindow")) {
        document.querySelector(".statswindow").style.display = "flex";        
    }
})

document.querySelector(".character").addEventListener("mouseout", (hover) => {
    if (hover.target.classList.contains("characterstats") || hover.target.classList.contains("statswindow" )) {
        document.querySelector(".statswindow").style.display = "none";        
    }
})



