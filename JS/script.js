//objects: gameboard, player, gameController
const game = (()=>{
    let board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
    let used_cells = 0;
    // let row = 3;
    // let col =3; 
    const gameBoard = (() => {
        
        const initializeGame = () => {
            console.log("new game initialized!");
            showGameBoard();
        }

        const showGameBoard = () => {
            for (let row = 0; row < board.length; row++) {
                for (let col = 0; col < board.length; col++) {
                    console.log(board[row][col]);
                    //process.stdout.write(gameBoard[row][col]);
                }
                console.log("*");
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
                console.log(winner);
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




////////////////////////////////////////////////////////////////////////
// let board;
// let used_cells=0;
// function initializeGame(){
//     gameBoard = [["-","-","-"],["-","-","-"],["-","-","-"]];
//     showGameBoard(gameBoard);

// }
// function showGameBoard(){
//         for(let row=0;row<gameBoard.length;row++){
//             for(let col=0;col<gameBoard.length;col++){
//                 // console.log(gameBoard[row][col]);
//                 process.stdout.write(gameBoard[row][col]);
//             }
//             process.stdout.write('\n');
//         }
//         console.log("----------------------------");
// }

// function mark(marker, row, col){
//     if(gameBoard[row][col] == '-'){     
//         if(marker == 1){
//             marker = "X";
//         }
//         else{
//             marker = "O";
//         }
//         gameBoard[row][col] = marker;
//         used_cells++;
//         showGameBoard(gameBoard);
//         winner = checkWinner(gameBoard,row, col, marker, used_cells);   
//         console.log(winner);
//     }
//     else if(gameBoard[row][col] != '-'){
//         console.log("not empty cell!");
//         return winner -1;
//     }
// }

// function checkWinner(gameBoard,row, col,marker, used_cells){
//     let winner,flag;
//     for (let chks = 0; chks < 3; chks++) {
//     flag = 0;
//     //check rows
//     for (let c = 0; c < 3; c++) {
//         if (gameBoard[row][c] == marker) {
//             flag++;
//         }
//     }
//     if (flag == 3) {
//         winner = marker;
//         return winner;

//     } else { flag = 0; }

//     //check cols
//     for (let r = 0; r < 3; r++) {
//         if (gameBoard[r][col] == marker) {
//             flag++;
//         }
//     }
//     if (flag == 3) {
//         winner = marker;
//         return winner;

//     } else { flag = 0; }

//     //check diagnols
//     //top-left
//     for (let r = 0; r < 3; r++) {
//         if (gameBoard[r][r] == marker) {
//             flag++;
//         }
//     }
//     if (flag == 3) {
//         winner = marker;
//         return winner;

//     } else { flag = 0; }
//     //top-right
//     for (let r = 0; r < 3; r++) {
//         if (gameBoard[r][2 - r] == marker) {
//             flag++;
//         }
//     }
//     if (flag == 3) {
//         winner = marker;
//         return winner;

//     } else { flag = 0; }
// }
// // console.log("Reached end of for loop...");
// if(flag!=0){console.log("Winner is" + winner);}
// else{
//     if(used_cells >= 9)
//     {
//         // console.log("draw");
//         winner = "draw";
//         return winner;
//     }
// }
// }
// initializeGame();
// // //draw scenario
// // mark(1, 0, 0)  // X at top-left
// // mark(0, 0, 1)  // O at top-middle
// // mark(1, 0, 2)  // X at top-right
// // mark(0, 1, 1)  // O at center
// // mark(1, 1, 0)  // X at middle-left
// // mark(0, 1, 2)  // O at middle-right
// // mark(1, 2, 1)  // X at bottom-middle
// // mark(0, 2, 0)  // O at bottom-left
// // mark(1, 2, 2)  // X at bottom-right
// // //x winner scenario
// // mark(1, 0, 0)  // X at top-left
// // mark(0, 0, 1)  // O at top-middle
// // mark(1, 1, 1)  // X at center
// // mark(0, 1, 0)  // O at middle-left
// // mark(1, 0, 2)  // X at top-right
// // mark(0, 2, 2)  // O at bottom-right
// // mark(1, 2, 0)  // X at bottom-left
// // mark(0, 1, 2)  // O at middle-right
// // mark(1, 2, 1)  // X at bottom-middle - X wins!
