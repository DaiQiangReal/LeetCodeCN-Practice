//https://leetcode-cn.com/problems/sudoku-solver/
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    function isValid(board, y, x) {
        let n = board.length;
        for (let i = 0; i < n; i++) {
            if (i !== x && board[y][i] === board[y][x]) {
                return false;
            }
            if (i !== y && board[i][x] === board[y][x]) {
                return false;
            }
        }
        gridX = Math.floor(x / 3);
        gridY = Math.floor(y / 3);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[gridY * 3 + i][gridX * 3 + j] === board[y][x] && !(gridY * 3 + i === y && gridX * 3 + j === x)) {
                    return false;
                }
            }
        }
        return true;
    }

    let flag = false;
    function dfs(y, x) {
        if (y === 9) {
            flag = true;
            return;
        }
        if (board[y][x] === '.') {
            for (let i = 1; i <= 9; i++) {
                board[y][x] = i + "";
                if (!isValid(board,y,x)){
                    board[y][x] ='.';
                    continue;
                }
                    
                if (x === 8) {
                    dfs(y + 1, 0);
                } else {
                    dfs(y, x + 1)
                }
                if (flag)
                    return;
                board[y][x] ='.';
            }
        }else{
            if (x === 8) {
                dfs(y + 1, 0);
            } else {
                dfs(y, x + 1)
            }
        }
    }
    dfs(0, 0)
    return board;
};
let board=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(solveSudoku(board));
