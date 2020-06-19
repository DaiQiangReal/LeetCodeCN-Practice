//https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let data=[nums[0]];
    for(let i=1;i<nums.length;i++){
        data[i]=Math.max(nums[i]+data[i-1],nums[i])
    }
    let max=-Infinity;
    data.map((n)=>{
        if(n>max)
            max=n;
    })
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
