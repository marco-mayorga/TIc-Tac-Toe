const board = document.querySelector("#board-container");
const boardPieces = document.querySelectorAll(".board-piece");


// Modules
const gameBoard = (() => {

    return { board }
})();



// Factory Functions
const Player = (sign) => {
    return {
        sign,
    }
};


const GameFlow = () => {

};



for (let i = 0; i < boardPieces.length; i++) {
    boardPieces[i].addEventListener("click", () => {
        boardPieces[i].innerHTML = "0"
    });
};

const winStates =
    [
        [0, 1, 2], [3, 4, 5],
        [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ]


// Check For winners algorithm
let xMoves = [3, 4, 5];
for (let num in xMoves) {
    for (let num2 in winStates[num]) {
        if (xMoves[num] === winStates[num][num2]) {
            console.log("Win");
        }
    }
}





