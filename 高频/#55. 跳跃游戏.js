//https://leetcode-cn.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {number}
 */
var canJump = function(nums) {
    if(nums.length===1)
        return true;
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]===0){
            let ok=false;
            for(let j=i-1;j>=0;j--){
                if(nums[j]>i-j){
                    ok=true;
                    break;
                }
            }
            if(ok===false){
                return false;
            }
        }
    }
    return true;
};
console.log(canJump([2,0,0]));
