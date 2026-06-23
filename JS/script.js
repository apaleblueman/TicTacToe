let gameBoard;

function initializeGame(){
    gameBoard = [["-","-","-"],["-","-","-"],["-","-","-"]];
    
}
function showGameBoard(){
        for(let row=0;row<gameBoard.length;row++){
        for(let col=0;col<gameBoard.length;col++){
            console.log(gameBoard[row][col]);
        }
    }
}

function mark(marker, row, col){
    if(marker!=0 && marker!=1){
        console.log("Unknown marker type");
        return;
    }
    gameBoard[row][col] = marker;
}

function checkWinner(gameBoard){
    
}

initializeGame();