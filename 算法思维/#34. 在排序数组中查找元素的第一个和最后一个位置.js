//https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let left=-1,right=-1;
    function dfs(start, end) {
        if (start === end) {
            if (nums[start] === target) {
                if(nums[start-1]!==target){
                    left=start;
                }
                if(nums[start+1]!==target){
                    right=start;
                }
            }
            return;
        }
        if (target < nums[Math.floor((start + end) / 2)]) {
            dfs(start, Math.floor((start + end) / 2));
            return;
        } 
        if (target > nums[Math.floor((start + end) / 2)]) {
            dfs(Math.floor((start + end) / 2) + 1, end);
            return;
        } 
        if(target === nums[Math.floor((start + end) / 2)])
        {
            dfs(start, Math.floor((start + end) / 2));
            dfs(Math.floor((start + end) / 2) + 1, end);
            return;
        }
    }
    dfs(0, nums.length - 1);
    return [left,right]
};
console.log(searchRange([12,3,6],6));
