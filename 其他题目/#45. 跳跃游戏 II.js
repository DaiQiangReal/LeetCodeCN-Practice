//https://leetcode-cn.com/problems/jump-game-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let farthest=0;
    let end=0;
    let jumpCount=0;
    for(let i=0;i<nums.length-1;i++){
        farthest=Math.max(farthest,nums[i]+i);
        if(end===i){
            end=farthest;
            jumpCount++;
            if(end>=nums.length-1)
                return jumpCount;
        }
    }
    return jumpCount;
};
console.log(jump([0]));
