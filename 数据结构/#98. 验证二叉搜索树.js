//https://leetcode-cn.com/problems/validate-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root,min,max) {
    if(arguments.left===1)
        return isValidBST(root,null,null);
    if(root===null)
        return true;
    if(min!==null&&root.val<=min){
        return false;
    }
    if(max!==null&&root.val>=max){
        return false;
    }
    return isValidBST(root.left,min,root.val)&&isValidBST(root.right,root.val,max);
};
// let obj={val:10,left:{val:5,left:null,right:null},right:{val:15,left:{val:6,left:null,right:null},right:{val:20,left:null,right:null}}}
let obj={val:3,left:{val:1,left:null,right:null},right:{val:15,left:{val:6,left:null,right:null},right:{val:20,left:null,right:null}}}
console.log(isValidBST(obj));
