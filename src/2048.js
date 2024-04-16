var board;
var score = 0;
var rows = 4;
var columns = 4;
var startTime;
var timerInterval;

window.onload = function() {
    setGame();
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000); // Actualiza el temporizador cada segundo

    document.getElementById("restart-button").addEventListener("click", function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario
        restartGame();
    });

    document.addEventListener('keydown', function(event) {
        if (event.code === "ArrowLeft") {
            event.preventDefault(); // Evitar que el navegador maneje la tecla
            slideLeft();
            setTwo();
        }
        else if (event.code === "ArrowRight") {
            event.preventDefault();
            slideRight();
            setTwo();
        }
        else if (event.code === "ArrowUp") {
            event.preventDefault();
            slideUp();
            setTwo();
        }
        else if (event.code === "ArrowDown") {
            event.preventDefault();
            slideDown();
            setTwo();
        }
        document.getElementById("score").innerText = score;
    });
}

function setGame() {
    board = new Array(rows);
    for (let i = 0; i < rows; i++) {
        board[i] = new Array(columns).fill(0);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
    //create 2 to begin the game
    setTwo();
    setTwo();
}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.className = "tile";
    if (num > 0) {
        tile.innerText = num.toString();
        tile.className += " x" + num.toString();
    }
}

function slide(row) {
    row = row.filter(num => num != 0);
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i];
        }
    }
    row = row.filter(num => num != 0);
    while (row.length < columns) {
        row.push(0);
    }
    return row;
}

function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row.reverse();
        row = slide(row);
        row.reverse();
        board[r] = row;
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [];
        for (let r = 0; r < rows; r++) {
            row.push(board[r][c]);
        }
        row = slide(row);
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [];
        for (let r = 0; r < rows; r++) {
            row.push(board[r][c]);
        }
        row.reverse();
        row = slide(row);
        row.reverse();
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function setTwo() {
    if (!hasEmptyTile()) {
        return;
    }
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            board[r][c] = 2;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            tile.innerText = "2";
            tile.className = "tile x2";
            found = true;
        }
    }
}

function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) {
                return true;
            }
        }
    }
    return false;
}

function updateTimer() {
    var elapsedTime = Math.floor((new Date() - startTime) / 1000);
    document.getElementById("timer").innerText = elapsedTime;
}

function restartGame() {
    score = 0;
    document.getElementById("score").innerText = score;
    // Clear the board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            board[r][c] = 0;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            updateTile(tile, 0);
        }
    }
    // Reset tiles
    setTwo();
    setTwo();
    startTime = new Date();
}
