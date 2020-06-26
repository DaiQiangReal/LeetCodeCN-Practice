//https://leetcode-cn.com/problems/house-robber-iii/
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
let memo = new Map();
var rob = function (root) {
    let stringify = JSON.stringify(root);
    if (memo.has(stringify))
        return memo.get(stringify);
    if (root === null)
        return 0;

    let rlll = 0, rllr = 0, rlrl = 0, rlrr = 0, rrll = 0, rrlr = 0, rrrl = 0, rrrr = 0, rll = 0, rlr = 0, rrl = 0, rrr = 0;
    function get(str) {
        try {
            return rob(eval(str));
        } catch (e) {
            return 0;
        }
    }
    rlll = get('root.left.left.left');
    rllr = get('root.left.left.right');
    rlrl = get('root.left.right.left');
    rlrr = get('root.left.right.right');
    rrll = get('root.right.left.left');
    rrlr = get('root.right.left.right');
    rrrl = get('root.right.right.left');
    rrrr = get('root.right.right.right');
    rll = get('root.left.left');
    rlr = get('root.left.right');
    rrl = get('root.right.left');
    rrr = get('root.right.right');
    let rlv = root.left !== null ? root.left.val : 0;
    let rrv = root.right !== null ? root.right.val : 0;
    let ans = Math.max(rlv + rlll + rllr + rlrl + rlrr + rrv + rrll + rrlr + rrrl + rrrr,
        rlv + rlll + rllr + rlrl + rlrr + rrl + rrr,
        rrv + rrll + rrlr + rrrl + rrrr + rll + rlr,
        root.val + rll + rlr + rrl + rrr);
    
    //即等于:(上方利用try catch 简写null情况代码)
    // let ans=Math.max(
    //     root.left.val+
    //     rob(root.left.left.left)+
    //     rob(root.left.left.right)+
    //     rob(root.left.right.left)+
    //     rob(root.left.right,right)+
    //     root.right.val+
    //     rob(root.right.left.left)+
    //     rob(root.right.left.right)+
    //     rob(root.right.right.left)+
    //     rob(root.right.right.right),
    //     root.val+
    //     rob(root.left.left)+
    //     rob(root.left.right)+
    //     rob(root.right.left)+
    //     rob(root.right.right)
    // )
    memo.set(stringify, ans);
    return ans;
};

let root={
    val:2,
    left:{val:3,left:null,right:{val:5,left:null,right:{val:4,left:null,right:null}}},
    right:{val:1,left:null,right:null}
}
console.log(rob(root));

