//https://leetcode-cn.com/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res=[];
    let chosed=[];
    function dfs(chose){
        if(chosed.length===k){
            res.push([...chosed]);
            return;
        }
        if(chose>n){
            return;
        }
        
        for(let i=chose;i<=n;i++){
            chosed.push(i)
            dfs(i+1);
            chosed.pop();
        }
        
    }
    dfs(1);
    return res;
};
console.log(combine(1,2));
