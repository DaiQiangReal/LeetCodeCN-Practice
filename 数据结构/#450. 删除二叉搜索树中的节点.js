//https://leetcode-cn.com/problems/delete-node-in-a-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root===null)
        return null;
    function getMinNode(root){
        if(root.left===null){
            return root;
        }
        return getMinNode(root.left);
    }
    if(root.val===key){
        if(root.left===null&&root.right===null){
            return null;
        }
        if(root.left===null&&root.right!==null){
            return root.right;
        }
        if(root.left!==null&&root.right===null){
            return root.left;
        }
        if(root.left!==null&&root.right!==null){
            let rightMinNode=getMinNode(root.right);
            root.val=rightMinNode.val;
            root.right=deleteNode(root.right,rightMinNode.val);
            return root;
        }
    }
    if(root.val>key){
        root.left=deleteNode(root.left,key);
    }
    if(root.val<key){
        root.right=deleteNode(root.right,key);
    }
    return root;
};