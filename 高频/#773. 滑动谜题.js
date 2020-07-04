//https://leetcode-cn.com/problems/sliding-puzzle/
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
    let queue = [];
    let passed = new Set();
    passed.add(JSON.stringify(board))
    queue.push([board, 0]);
    let doneFlag = -1;
    if(checkWin(board)){
        return 0;
    }
    while (queue.length > 0) {
        let [board, count] = queue.shift();
        boardU = move(board, 'u');
        process(boardU,count);
        if (doneFlag !== -1)
            return doneFlag;
        boardD = move(board, 'd');
        process(boardD,count);
        if (doneFlag !== -1)
            return doneFlag;
        boardL = move(board, 'l');
        process(boardL,count);
        if (doneFlag !== -1)
            return doneFlag;
        boardR = move(board, 'r');
        process(boardR,count);
        if (doneFlag !== -1)
            return doneFlag;
    }
    return -1;
    function process(board, count) {
        if (!passed.has(JSON.stringify(board))) {
            if (checkWin(board)) {
                doneFlag = count + 1;
                return;
            }
            if (board !== -1) {
                queue.push([board, count + 1])
            }
            passed.add(JSON.stringify(board));
        }
        return;
    }
    function checkWin(board) {
        if (board === -1)
            return false;
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                if (i === 1 && j === 2) {
                    continue;
                }
                if (board[i][j] !== i * 3 + j + 1) {
                    return false;
                }
            }
        }
        return true;
    }
    function move(board, direction) {
        board = JSON.parse(JSON.stringify(board));
        let y0, x0;
        l: for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === 0) {
                    y0 = i;
                    x0 = j;
                    break l;
                }
            }
        }
        if (direction === 'u') {
            if (y0 === 0)
                return -1;
            board[y0][x0] = board[y0 - 1][x0];
            board[y0 - 1][x0] = 0;
            return board;
        } else if (direction === 'd') {
            if (y0 === 1)
                return -1;
            board[y0][x0] = board[y0 + 1][x0];
            board[y0 + 1][x0] = 0;
            return board;
        } else if (direction === 'l') {
            if (x0 === 0)
                return -1;
            board[y0][x0] = board[y0][x0 - 1];
            board[y0][x0 - 1] = 0;
            return board;
        } else if (direction === 'r') {
            if (x0 === 2)
                return -1;
            board[y0][x0] = board[y0][x0 + 1];
            board[y0][x0 + 1] = 0;
            return board;
        }
    }
};
console.log(slidingPuzzle([[4, 1, 2], [5, 0, 3]]));
