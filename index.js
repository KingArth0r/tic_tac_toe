/**
 * 
 * @param {1D array representing current state} state 
 * @returns 0 if no winner, 1 if player 1 wins, 2 if player 2 has won
 */
function isEnd(state) {
    // check vertical
    for (let i = 0; i < 3; i++) {
        if (state[i] != 0 && state[i] == state[i + 3] && state[i] == state[i + 6]) return state[i];
    }

    // check horizontal
    for (let i = 0; i < 9; i += 3) {
        if (state[i] == 0 && state[i] == state[i + 1] && state[i] == state[i + 2]) return state[i];
    }

    // check diagonals
    if (
        (state [0] != 0 && state[0] == state[4] && state[4] == state[8])
        || (state[2] != 0 && state[2] == state[4] && state[4] == state[6])
    ) return state[4];
}

function placePiece(state, player, index) {
    console.log("HI");
    state[index] = player;
    document.getElementById(index.toString()).removeEventListener("click", () => placePiece(state, player, i));
    displayBoard(state);
}

function displayWinner(player) {
    document.getElementsByClassName("gameStatus")[0].innerHTML = `Player ${player} wins!`;
}

function clearBoard(state) {
    state = Array(9).fill(0);
    for (let i = 0; i < state.length; i++) {
        document.getElementById(i.toString()).removeEventListener("click", () => placePiece(state, player, i));
    }
    displayBoard(state);
}

function displayBoard(state) {
    for (let i = 0; i < state.length; i++) {
        if (state[i] == 0) {
            document.getElementById(i.toString()).innerHTML = ""
        }
        else if (state[i] == 1) {
            document.getElementById(i.toString()).innerHTML = "X";
        } else if (state[i] == 2) {
            document.getElementById(i.toString()).innerHTML = "O";
        }
    }
}

function playGame() {
    let state = Array(9).fill(0);
    let player = 1;
    for (let i = 0; i < state.length; i++) {
        document.getElementsByClassName("box")[i].addEventListener("click", (e) => {console.log(e); placePiece(state, player, i)});
    }
    document.getElementsByClassName("playButton")[0].addEventListener("click", () => clearBoard(state));
    displayWinner(1);
}

playGame();