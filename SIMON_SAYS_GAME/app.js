let h3 = document.querySelector('h3');
//storing buttons classes
let btns = ["button1", "button2", "button3", "button4"];
// store sequence 
let gameSeq = [];
let userSeq = [];


//starting the game
let level = 0;
let started = false;
document.addEventListener("keydown", () => {
    if (!started) {
        started = true;
        levelUP();



    }
});

// making button flash
function Gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

//user click button flash
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

//level up
function levelUP() {

    //clear the user input
    userSeq = [];
    level++;

    h3.innerText = `Level ${level}`;

    //choising a random index
    let randomIDX = Math.floor(Math.random() * btns.length);
    let randomColor = btns[randomIDX];

    //pushing the sequence in to gameSq
    gameSeq.push(randomColor);
    //accessing the button
    let randomBtn = document.querySelector(`.${randomColor}`);
    //making it flash
    Gameflash(randomBtn);
}
function btnpress() {
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkUserInput(userSeq.length - 1);
}
//accessing the all button in html
let btnAll = document.querySelectorAll('.btn');
for (btn of btnAll) {
    btn.addEventListener("click", btnpress);
}

function checkUserInput(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUP, 500);
        }
    } else {
        h3.innerHTML = `game over! <br> your level is <b>${level}</b>. <br>press any key to start!`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 100)
        reset();
    }

}

//reset for new game
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}