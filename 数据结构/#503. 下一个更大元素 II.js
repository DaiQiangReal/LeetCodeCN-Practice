//https://leetcode-cn.com/problems/next-greater-element-ii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums2) {
    let stack = new Array();
    let ans =[] ;
    let nums2Len = nums2.length;
    for (let i = nums2.length * 2 - 1; i >= 0; i--) {
        if (stack.length !== 0) {
            while (stack.length > 0 && (stack[stack.length - 1] <= nums2[i % nums2Len])) {
                stack.pop();
            }
            ans[i % nums2Len] = stack[stack.length - 1]===undefined?-1:stack[stack.length - 1];
            stack.push(nums2[i % nums2Len]);
        } else {
            stack.push(nums2[i % nums2Len]);
            ans[i % nums2Len]=-1
        }
    }
    return ans;
};

console.log(nextGreaterElements([100,1,11,1,120,111,123,1,-1,-100]));
