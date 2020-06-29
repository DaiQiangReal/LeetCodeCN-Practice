//https://leetcode-cn.com/problems/recover-binary-search-tree/
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let father=null;
    let errorNode1=null;
    let errorNode2=null;
    function traverse(root){
        if(root===null)
            return;
        traverse(root.left)
        if(father!==null&&father.val>root.val){
            if(errorNode1===null)
                errorNode1=father;
            errorNode2=root;
        }
        father=root;
        traverse(root.right)
    }
    traverse(root);
    let temp=errorNode1.val;
    errorNode1.val=errorNode2.val;
    errorNode2.val=temp;
    return root;
};