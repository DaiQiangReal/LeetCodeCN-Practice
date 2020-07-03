//https://leetcode-cn.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    function dfs(start,end){
        if(start===end){
            if(nums[start]===target){
                return start;
            }
            return -1;
        }
        if(target<=nums[Math.floor((start+end)/2)]){
            return dfs(start,Math.floor((start+end)/2));
        }else{
            return dfs(Math.floor((start+end)/2)+1,end);
        }
    }
    return dfs(0,nums.length-1);
};
console.log(search([-1,0,3,5,9,12],9));
