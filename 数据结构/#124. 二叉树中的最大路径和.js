//https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let max=-Infinity;
    function dfs(root){
        if(root===null)
            return 0;
        let left=Math.max(0,dfs(root.left));
        let right=Math.max(0,dfs(root.right));
        max=Math.max(max,root.val+left,root.val+right,root.val+left+right,root.val);
        return Math.max(root.val+left,root.val+right);
    }
    dfs(root);
    return max;
};
console.log(maxPathSum({val:-10,left:{val:9,left:null,right:null},right:{val:20,left:{val:15,left:null,right:null},right:{val:7,left:null,right:null}}}));
console.log(maxPathSum({val:0,left:null,right:null}));

