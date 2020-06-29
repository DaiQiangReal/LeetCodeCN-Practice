//https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length===0)
        return null;
    let obj={};
    obj.val=preorder[0];
    let sliceIndex=inorder.indexOf(preorder[0]);
    obj.left=buildTree(preorder.slice(1,sliceIndex+1),inorder.slice(0,sliceIndex));
    obj.right=buildTree(preorder.slice(sliceIndex+1),inorder.slice(sliceIndex+1))
    return obj;
};
console.log(JSON.stringify(buildTree([1],[1])));
