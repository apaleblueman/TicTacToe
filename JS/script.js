let gameBoard;
function initializeGame(){
    gameBoard = [["-","-","-"],["-","-","-"],["-","-","-"]];
    showGameBoard(gameBoard);

}
function showGameBoard(){
        for(let row=0;row<gameBoard.length;row++){
            for(let col=0;col<gameBoard.length;col++){
                //console.log(gameBoard[row][col]);
                process.stdout.write(gameBoard[row][col]);
            }
            process.stdout.write('\n');
        }
        console.log("----------------------------");
}

function mark(marker, row, col){
    if(gameBoard[row][col] == '-'){     
        if(marker == 1){
            marker = "X";
        }
        else{
            marker = "O";
        }
        gameBoard[row][col] = marker;
        showGameBoard(gameBoard);
        checkWinner(gameBoard,row, col, marker);   
    }
    else if(gameBoard[row][col] != '-'){
        console.log("not empty cell!");
        return -1;
    }
}

function checkWinner(gameBoard,row, col, marker){
    let winner;
    for(let chks=0;chks<3;chks++){
    let flag = 0;
    //check rows
    for(let c=0;c<3;c++){
        if(gameBoard[row][c] == marker){
            flag++;
        }
    }
    if(flag==3){
        winner = marker;
    }else{ flag = 0;}
    
    //check cols
    for(let r=0;r<3;r++){
        if(gameBoard[r][col] == marker){
            flag++;
        }
    }
    if(flag==3){
        winner = marker;
    }else{ flag = 0;}
    
    //check diagnols
    for(let r=0;r<3;r++){
        if(gameBoard[r][col] == marker){
            flag++;
        }
    }
    if(flag==3){
        winner = marker;
    }else{ flag = 0;}
    
    }
    console.log("Winner is" + winner);   
}
initializeGame();
mark(1,0,0);
mark(1,0,1);
mark(1,0,2);
