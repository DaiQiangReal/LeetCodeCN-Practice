//https://leetcode-cn.com/problems/count-complete-tree-nodes/
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

var countNodes = function(root) {
    //如果是满二叉树
    let OriginRoot=root;
    let lLayerCount=0;
    let rLayerCount=0;
    while(root!==null){
        lLayerCount++;
        root=root.left;
    }
    root=OriginRoot;
    while(root!==null){
        rLayerCount++;
        root=root.right;
    }
    root=OriginRoot;
    if(lLayerCount===rLayerCount){
        return Math.pow(2,lLayerCount)-1;
    }
    //如果是完全二叉树
    function  countCompleteTreeNodes(root){
        if(root===null){
            return 0;
        }
        return countCompleteTreeNodes(root.left)+countCompleteTreeNodes(root.right)+1;
    }
    return countCompleteTreeNodes(root);
};




//灵活写法
// var countNodes = function(root) {
//     let str=JSON.stringify(root);
//     let count=0;
//     let index=0;
//     while(true){
//         if(2===(index=str.indexOf("val",index)+3)){
//             break;
//         }
//         count++;
//     }
//     return count;
// };