var numSelected = null;
var tileSelected = null;
var errors = 0;
var board = [];
var solution = [];

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

function generateRandomBoard(fillPercentage) {
    var board = [];
    for (let i = 0; i < 9; i++) {
        let row = "---------"; // Inicializar una fila vacía
        board.push(row);
    }
    
    // Intentar colocar números aleatorios en cada celda
    for (let numAttempts = 0; numAttempts < 100; numAttempts++) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                // Solo intentar colocar un número si la celda está vacía
                if (board[row][col] === '-') {
                    let randomDigit = Math.floor(Math.random() * 9) + 1; // Número aleatorio del 1 al 9
                    if (isValidMove(board, row, col, randomDigit.toString())) {
                        // Si es un movimiento válido, coloca el número en la celda
                        board[row] = board[row].substring(0, col) + randomDigit.toString() + board[row].substring(col + 1);
                    }
                }
            }
        }
    }
    
    return board;
}

function isValidMove(board, row, col, num) {
    return !(
        isRowInvalid(board, row, num) ||
        isColInvalid(board, col, num) ||
        isBoxInvalid(board, row - row % 3, col - col % 3, num)
    );
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
    // Implementa la lógica para resolver un Sudoku aquí
    // Por simplicidad, asumiremos que el tablero proporcionado ya está completo
}

function setGame() {
    // Limpiar el tablero y los dígitos seleccionados
    clearBoard();
    clearSelectedNumber();

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

function clearBoard() {
    document.getElementById("board").innerHTML = "";
}

function clearSelectedNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
        numSelected = null;
    }
}

function selectNumber() {
    clearSelectedNumber();
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
