//https://leetcode-cn.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
    let array = new Array();
    array.push([])
    for (let i = 0; i < nums.length; i++) {
        let tempArray = new Array();
        array.forEach((e) => {
            let array = JSON.parse(JSON.stringify(e));
            array.push(nums[i]);
            tempArray.push(array);
        });
        array = [...array, ...tempArray];
    }
    return array
};
console.log(subsets([1, 2, 3]));
