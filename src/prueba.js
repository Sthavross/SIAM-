var numSelected = null;
var tileSelected = null;

window.onload = function() {
    setDifficulty('medium');
}

function setDifficulty(difficulty) {
    if (difficulty === 'easy') {
        board = generateRandomBoard(30); // Cambiar el segundo parámetro según la dificultad
    } else if (difficulty === 'medium') {
        board = generateRandomBoard(50); // Cambiar el segundo parámetro según la dificultad
    } else if (difficulty === 'hard') {
        board = generateRandomBoard(70); // Cambiar el segundo parámetro según la dificultad
    }
    solution = solveSudoku(copyBoard(board));
    setGame();
}

var errors = 0;

var board = generateRandomBoard();
var solution = solveSudoku(copyBoard(board));

window.onload = function() {
    setGame();
}

function generateRandomBoard() {
    var board = [];
    for (let i = 0; i < 9; i++) {
        let row = "";
        for (let j = 0; j < 9; j++) {
            row += "-";
        }
        board.push(row);
    }
    return board;
}

function copyBoard(board) {
    // Crea una copia profunda del tablero
    return board.map(row => row.slice());
}

function solveSudoku(board) {
    solveSudokuUtil(board);
    return board;
}

function solveSudokuUtil(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === "-") {
                for (let num = 1; num <= 9; num++) {
                    if (isSafe(board, row, col, num.toString())) {
                        board[row] = board[row].substring(0, col) + num.toString() + board[row].substring(col + 1);
                        if (solveSudokuUtil(board)) {
                            return true;
                        }
                        board[row] = board[row].substring(0, col) + "-" + board[row].substring(col + 1);
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isSafe(board, row, col, num) {
    return !(
        isRowInvalid(board, row, num) ||
        isColInvalid(board, col, num) ||
        isBoxInvalid(board, row - row % 3, col - col % 3, num)
    );
}

function isRowInvalid(board, row, num) {
    return board[row].includes(num);
}

function isColInvalid(board, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) {
            return true;
        }
    }
    return false;
}

function isBoxInvalid(board, startRow, startCol, num) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row + startRow][col + startCol] === num) {
                return true;
            }
        }
    }
    return false;
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}

