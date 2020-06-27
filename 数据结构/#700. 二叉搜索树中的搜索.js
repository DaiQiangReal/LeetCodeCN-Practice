//https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return root===null?null:(root.val===val?root:(val>root.val?searchBST(root.right,val):searchBST(root.left,val)));
};