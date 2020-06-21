//https://leetcode-cn.com/problems/unique-binary-search-trees/
/**
 * @param {number} n
 * @return {number}
 */
let data=new Map();
var numTrees = function(n) {
    if(data.has(n))
        return data.get(n);
    if(n===0)
        return 1;
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=numTrees(i-1)*numTrees(n-i);
    }
    data.set(n,sum);
    return sum;
};

console.log(numTrees(3));
