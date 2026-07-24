const game = (()=>{
    let board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
    let used_cells = 0;
    // let row = 3;
    // let col =3; 
    const gameBoard = (() => {
        
        const initializeGame = () => {
            console.log("new game initialized!");
            board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
            showGameBoard();
        }

        const showGameBoard = () => {
            for (let row = 0; row < board.length; row++) {
                for (let col = 0; col < board.length; col++) {
                    console.log(board[row][col]);
                    // process.stdout.write(board[row][col]);
                }
                // console.log();
                // process.stdout.write('\n');
            }
            console.log("----------------------------");
        }
        return { showGameBoard, initializeGame};
    })();

    const player = (() => {
        const checkWinner = (row,col,marker)=>{
                let winner, flag;
                for (let chks = 0; chks < 3; chks++) {
                    flag = 0;
                    //check rows
                    for (let c = 0; c < 3; c++) {
                        if (board[row][c] == marker) {
                            flag++;
                        }
                    }
                    if (flag == 3) {
                        winner = marker;
                        return winner;

                    } else { flag = 0; }

                    //check cols
                    for (let r = 0; r < 3; r++) {
                        if (board[r][col] == marker) {
                            flag++;
                        }
                    }
                    if (flag == 3) {
                        winner = marker;
                        return winner;

                    } else { flag = 0; }

                    //check diagnols
                    //top-left
                    for (let r = 0; r < 3; r++) {
                        if (board[r][r] == marker) {
                            flag++;
                        }
                    }
                    if (flag == 3) {
                        winner = marker;
                        return winner;

                    } else { flag = 0; }
                    //top-right
                    for (let r = 0; r < 3; r++) {
                        if (board[r][2 - r] == marker) {
                            flag++;
                        }
                    }
                    if (flag == 3) {
                        winner = marker;
                        return winner;

                    } else { flag = 0; }
                }
                // console.log("Reached end of for loop...");
                if (flag != 0) { console.log("Winner is" + winner); }
                else {
                    if (used_cells >= 9) {
                        // console.log("draw");
                        winner = "draw";                        
                        return winner;
                    }
                }
            }

        const mark = (row,col,marker)=>{
            if(board[row][col] == '-'){     
                if(marker == 1){
                    marker = "X";
                }
                else{
                    marker = "O";
                }
                board[row][col] = marker;
                used_cells++;
                gameBoard.showGameBoard(board);
                winner = checkWinner(row,col,marker);   
                if(winner != undefined)
                {
                    console.log(winner);
                    gameBoard.initializeGame();
                }
                // else{}
            }
            else if(board[row][col] != '-'){
                console.log("not empty cell!");
                return -1;
            }
        }      
        
        
        return { mark }
    })();
    return {gameBoard, player};
})();

//Choose X or O
// const startButton = 
document.getElementById("startgame").addEventListener('click',()=>{
    const value = document.querySelector('input[name="radio"]:checked').value;
    // console.log(value)
})

//reset game

//marking a symbol and check for end round

