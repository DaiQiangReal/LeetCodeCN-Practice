//https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root===null){
        let node={val,left:null,right:null};
        return node;
    }
    if(val<root.val){
        root.left=insertIntoBST(root.left,val);
        return root;
    }
    if(val>root.val){
        root.right=insertIntoBST(root.right,val);
        return root;
    }
};