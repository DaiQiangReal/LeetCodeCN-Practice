//https://leetcode-cn.com/problems/next-greater-element-i/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack=new Array();
    let ansObj={};
    for(let i=nums2.length-1;i>=0;i--){
        if(stack.length!==0){
            while(stack.length>0&&stack[stack.length-1]<=nums2[i]){
                stack.pop();
            }
            ansObj[nums2[i]]=stack[stack.length-1]
            stack.push(nums2[i]);
        }else{
            stack.push(nums2[i]);
        }
    }
    let ansArray=[];
    nums1.map((num,index)=>ansArray[index]=ansObj[num]===undefined?-1:ansObj[num]);
    return ansArray;
};
console.log(nextGreaterElement([2,4],[1,2,3,4]));
