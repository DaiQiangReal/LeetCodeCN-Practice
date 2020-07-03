//https://leetcode-cn.com/problems/n-queens/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let board=[];
    for(let i=0;i<n;i++){
        let temp=new Array(n).fill(".");
        board[i]=temp;
    }
    let ans=[];
    function dfs(y){
        if(y>=n){
            ans.push(board.map(e=>e.join("")));
            return;
        }
        for(let x=0;x<n;x++){
            if(!checkValid(board,y,x))
                continue;
            board[y][x]='Q';
            dfs(y+1);
            board[y][x]='.';
        }
        return;
    }
    dfs(0);
    return ans;
};
function checkValid(way, y, x) {
    let n = way.length;
    for (let i = 0; i < n; i++) {
        if (way[i][x] === 'Q')
            return false;
    }
    let flag = true;
    let p = 1;
    while (flag) {
        flag = false;
        if (way[y - p]!== undefined&&way[y - p][x - p] !== undefined) {
            flag = true;
            if (way[y - p][x - p] === 'Q')
                return false;
        }
        if (way[y - p]!== undefined&&way[y - p][x + p] !== undefined) {
            flag = true;
            if (way[y - p][x + p] === 'Q')
                return false;
        }
        p++;
    }
    return true;
}
console.log(solveNQueens(4));
