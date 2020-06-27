//https://leetcode-cn.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (q === null && p === null)
        return true;
    try {
        if (p.val !== q.val)
            return false;
    } catch (e) {
        return false;
    }
    return isSameTree(q.left, p.left) && isSameTree(q.right, p.right);
};