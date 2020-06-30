//https://leetcode-cn.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    let temp=[];
    function dfs() {
        if(temp.length===nums.length){
            result.push([...temp]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if(temp.indexOf(nums[i])!==-1)
                continue;
            temp.push(nums[i]);
            dfs();
            temp.pop();
        }
        return;
    }
    dfs();
    return result;

};
console.log(permute([1, 2, 3]));
