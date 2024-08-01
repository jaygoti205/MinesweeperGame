let tbl = document.getElementById("tbl");
let easyBtn = document.getElementById("easyBtn"),
    mediumBtn = document.getElementById("mediumBtn"),
    hardBtn = document.getElementById("hardBtn"),
    customBtn = document.getElementById("customBtn"),
    updateBtn = document.getElementById("updateBtn");

let customPanel = document.getElementById("customPanel");
let height = document.getElementById("height"),
    width = document.getElementById("width"),
    mines = document.getElementById("mines");

let replayBtn = document.getElementById("replayBtn");
let timerLabel = document.getElementById("timerLabel");
let array, row, col, mine;
let startTimer, time = 0;

//Create Array of given length with Null ValueF
function setArray(row, col, mine, callSetMine, callSetNumber, callSetOnScreen) {
    array = [];
    for (let i = 0; i < row; i++) {
        array[i] = [];
        for (let j = 0; j < col; j++) {
            array[i][j] = null;
        }
    }
    callSetMine(mine, callSetNumber, callSetOnScreen);
}

//Set mine in array at random position
function setMine(mine, callSetNumber, callSetOnScreen) {
    for (let m = 0; m < mine; m++) {
        let a = Math.floor(Math.random() * row);
        let b = Math.floor(Math.random() * col);
        if (array[a][b] !== null) {
            m--;
        } else {
            array[a][b] = "M";
        }
    }
    callSetNumber(callSetOnScreen);
}

//Set the Count number around Mines
function setNumber(callSetOnScreen) {

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i === 0 && array[i][j] === "M") {
                if (j === 0) {
                    if (array[i][j + 1] !== "M")
                        array[i][j + 1] += 1;
                    if (array[i + 1][j] !== "M")
                        array[i + 1][j] += 1;
                    if (array[i + 1][j + 1] !== "M")
                        array[i + 1][j + 1] += 1;
                }
                else if (j === col - 1) {
                    if (array[i][j - 1] !== "M")
                        array[i][j - 1] += 1;
                    if (array[i + 1][j] !== "M")
                        array[i + 1][j] += 1;
                    if (array[i + 1][j - 1] !== "M")
                        array[i + 1][j - 1] += 1;
                }
                else {
                    if (array[i][j + 1] !== "M")
                        array[i][j + 1] += 1;
                    if (array[i][j - 1] !== "M")
                        array[i][j - 1] += 1;
                    if (array[i + 1][j] !== "M")
                        array[i + 1][j] += 1;
                    if (array[i + 1][j - 1] !== "M")
                        array[i + 1][j - 1] += 1;
                    if (array[i + 1][j + 1] !== "M")
                        array[i + 1][j + 1] += 1;
                }
            }
            else if (i === row - 1 && array[i][j] === "M") {
                if (j === 0) {
                    if (array[i][j + 1] !== "M")
                        array[i][j + 1] += 1;
                    if (array[i - 1][j] !== "M")
                        array[i - 1][j] += 1;
                    if (array[i - 1][j + 1] !== "M")
                        array[i - 1][j + 1] += 1;
                }
                else if (j === col - 1) {
                    if (array[i][j - 1] !== "M")
                        array[i][j - 1] += 1;
                    if (array[i - 1][j] !== "M")
                        array[i - 1][j] += 1;
                    if (array[i - 1][j - 1] !== "M")
                        array[i - 1][j - 1] += 1;
                }
                else {
                    if (array[i][j + 1] !== "M")
                        array[i][j + 1] += 1;
                    if (array[i][j - 1] !== "M")
                        array[i][j - 1] += 1;
                    if (array[i - 1][j] !== "M")
                        array[i - 1][j] += 1;
                    if (array[i - 1][j - 1] !== "M")
                        array[i - 1][j - 1] += 1;
                    if (array[i - 1][j + 1] !== "M")
                        array[i - 1][j + 1] += 1;
                }
            }
            else {
                if (j === 0 && array[i][j] === "M" && i !== 0 && i !== row - 1) {
                    if (array[i][j + 1] !== "M")
                        array[i][j + 1] += 1;
                    if (array[i - 1][j] !== "M")
                        array[i - 1][j] += 1;
                    if (array[i - 1][j + 1] !== "M")
                        array[i - 1][j + 1] += 1;
                    if (array[i + 1][j + 1] !== "M")
                        array[i + 1][j + 1] += 1;
                    if (array[i + 1][j] !== "M")
                        array[i + 1][j] += 1;
                }
                else if (j === col - 1 && array[i][j] === "M" && i !== 0 && i !== row - 1) {
                    if (array[i][j - 1] !== "M")
                        array[i][j - 1] += 1;
                    if (array[i - 1][j] !== "M")
                        array[i - 1][j] += 1;
                    if (array[i - 1][j - 1] !== "M")
                        array[i - 1][j - 1] += 1;
                    if (array[i + 1][j - 1] !== "M")
                        array[i + 1][j - 1] += 1;
                    if (array[i + 1][j] !== "M")
                        array[i + 1][j] += 1;
                }
                else if (j < col - 1 && j > 0 && i > 0 && i < row - 1 && array[i][j] === "M") {
                    if (array[i][j - 1] !== "M")
                        array[i][j - 1] += 1;
                    if (array[i][j + 1] !== "M")
                        array[i][j + 1] += 1;
                    if (array[i - 1][j] !== "M")
                        array[i - 1][j] += 1;
                    if (array[i + 1][j] !== "M")
                        array[i + 1][j] += 1;
                    if (array[i - 1][j - 1] !== "M")
                        array[i - 1][j - 1] += 1;
                    if (array[i + 1][j + 1] !== "M")
                        array[i + 1][j + 1] += 1;
                    if (array[i + 1][j - 1] !== "M")
                        array[i + 1][j - 1] += 1;
                    if (array[i - 1][j + 1] !== "M")
                        array[i - 1][j + 1] += 1;
                }
            }
        }
    }
    callSetOnScreen();
}

//Set the table in Display Screen 
function setOnScreen() {
    let tableBody = document.getElementById("tableBody");

    for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < col; j++) {
            let td = document.createElement("td");
            td.setAttribute("class", "boxCover");
            td.setAttribute("id", `${i}-${j}`);
            td.setAttribute("onclick", `removeCover(this,${i},${j})`);
            if (array[i][j] == null) {
                array[i][j] = "";
            }
            td.textContent = `${array[i][j]}`;
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

//Check the targeted point around any blank space or not & open the box
function checkBlank(id, a, b) {
    let currentId = document.getElementById(id);
    let allClass = document.querySelectorAll(".boxCover");

//Check Index Is Out of Range or Not
    if (a < 0 || a > row - 1 || b < 0 || b > col - 1) {
        return;
    }
    else if (currentId.className.includes("boxCover")) {
        currentId.classList.remove('boxCover');
        text = currentId.innerText;
        allClass = document.querySelectorAll(".boxCover");
        //Check winning scenario
        if (allClass.length == mine) {
            tbl.style.pointerEvents = "none";
            gameMsg.textContent = "Winner";
            replayBtn.style.display = "block";
            endCountDown();
        }
    } else {
        return;
    }

    if (text === "") {
        checkBlank(a.toString() + "-" + (b - 1).toString(), a, b - 1);
        checkBlank(a.toString() + "-" + (b + 1).toString(), a, b + 1);
        checkBlank((a - 1).toString() + "-" + (b - 1).toString(), a - 1, b - 1);
        checkBlank((a - 1).toString() + "-" + b.toString(), a - 1, b);
        checkBlank((a - 1).toString() + "-" + (b + 1).toString(), a - 1, b + 1);
        checkBlank((a + 1).toString() + "-" + (b - 1).toString(), a + 1, b - 1);
        checkBlank((a + 1).toString() + "-" + b.toString(), a + 1, b);
        checkBlank((a + 1).toString() + "-" + (b + 1).toString(), a + 1, b + 1);
    }
}

//Click on any box this function Are called
//Check clicked element are mine Or not
function removeCover(current, i, j) {
    let gameMsg = document.getElementById("gameMsg");
    startCuntDown();

    //Check current Clicked Box are Mine or Not
    if (current.innerText == "M") {
        tbl.style.pointerEvents = "none";
        gameMsg.textContent = "Game Over";
        replayBtn.style.display = "block";
        endCountDown();

        //Open all Mines
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (array[i][j] === "M") {
                    let mineId = document.getElementById(i.toString() + "-" + j.toString())
                    mineId.classList.remove("boxCover");
                }
            }
        }
    } else {
        checkBlank(current.id, i, j);
    }
}

//When the EasyLevel button are clicked This function Are called
function easyLevel() {
    row = 10;
    col = 10;
    mine = 10;
    playGame();
}

//When the mediumLevel button are clicked This function Are called
function mediumLevel() {
    row = 16;
    col = 16;
    mine = 40;
    playGame();
}

//When the hardLevel button are clicked This function Are called
function hardLevel() {
    row = 25;
    col = 25;
    mine = 99;
    playGame();
}

//When the customLevel button are clicked This function Are called
function customLevel() {
    row = 7;
    col = 7;
    mine = 7;
    playGame();
    height.value = row;
    width.value = col;
    mines.value = mine;
    customPanel.style.display = "block";
}

//When the Update Button Click this function are Triggered
function updatedLevel() {
    row = height.value;
    col = width.value;
    mine = mines.value;
    mine = mine >= row * col ? Math.floor((row * col) / 2) : mine;
    mines.value = mine;
    playGame();
    customPanel.style.display = "block";
}

//This function are call every time when click on any level 
function playGame() {
    let minesLabel = document.getElementById("minesLabel")
    tableBody.innerHTML = "";
    gameMsg.textContent = "";
    minesLabel.textContent = (mine < 10 ? "00" : mine < 100 ? "0" : "") + mine;
    endCountDown();
    timerLabel.textContent = "000";
    replayBtn.style.display = "none";
    customPanel.style.display = "none";
    setArray(row, col, mine, setMine, setNumber, setOnScreen);
    tbl.style.pointerEvents = "auto";
}

//Start timer Countdown
function startCuntDown() {
    if (!startTimer) {
        startTimer = setInterval(setSeconds, 1000);
    }
}

//Set time on the screen
function setSeconds() {
    time += 1;
    timerLabel.textContent = (time < 10 ? "00" : time < 100 ? "0" : "") + time;
}

//Stop timer Countdown
function endCountDown() {
    clearInterval(startTimer);
    startTimer = null;
    time = 0
}

easyLevel();
easyBtn.addEventListener("click", easyLevel);
mediumBtn.addEventListener("click", mediumLevel);
hardBtn.addEventListener("click", hardLevel);
customBtn.addEventListener("click", customLevel);
updateBtn.addEventListener("click", updatedLevel);
replayBtn.addEventListener("click", playGame);
