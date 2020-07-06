//https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let sorted = qsort(nums);
    return sorted[sorted.length - k];
};

// 浪费空间
// function qsort(nums){
//     if(nums.length===0)
//         return [];
//     let mid=Math.floor(nums.length/2);
//     let left=[];
//     let right=[];
//     for(let i=0;i<nums.length;i++){
//         if(i===mid)
//             continue;
//         if(nums[i]<nums[mid]){
//             left.push(nums[i]);
//         }else{
//             right.push(nums[i]);
//         }
//     }
//     let temp=qsort(left);
//     temp.push(nums[mid]);
//     return temp.concat(qsort(right));
// }

function qsort(nums, start, end) {
    if (start >= end)
        return nums;
    if (nums.length === 0)
        return nums;
    if (start === undefined) {
        start = 0;
        end = nums.length - 1;
    }

    let i = start;
    let j = end;
    while (i < j) {
        while (i < j && nums[j] >= nums[start]) {
            j--;
        }
        while (i < j && nums[i] <= nums[start]) {
            i++;
        }
        
        if (i < j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    let temp = nums[start];
    nums[start] = nums[i];
    nums[i] = temp;
    qsort(nums, start, i - 1);
    qsort(nums, i + 1, end);
    return nums;
}
console.log(qsort([3,2,3,1,2,4,5,5,6]));
