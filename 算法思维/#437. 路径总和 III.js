//https://leetcode-cn.com/problems/path-sum-iii/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    //
    // function dfs(root,sum){
    //     if(root===null)
    //         return 0;
    //     return (root.val===sum?1:0)+dfs(root.left,sum-root.val)+dfs(root.right,sum-root.val)
    // }
    // if(root===null){
    //     return 0;
    // }
    // return dfs(root,sum)+pathSum(root.left,sum)+pathSum(root.right,sum)
   
    if(root === null)
        return 0;
    let map = new Map();
    map.set(0,1)
    return dfs(root,0);
    function dfs(node,pathSum){
        if(node === null)
            return 0;
        let res = 0;
        pathSum += node.val;
        if(map.has(pathSum - sum)){
            res += map.get(pathSum - sum);
        }
        if(map.has(pathSum))
            map.set(pathSum,map.get(pathSum)+1);
        else
            map.set(pathSum,1);
        res += dfs(node.left, pathSum);
        res += dfs(node.right, pathSum);
        map[pathSum] --;
        return res;
    }
};