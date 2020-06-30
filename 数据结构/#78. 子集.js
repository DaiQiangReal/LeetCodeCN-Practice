//https://leetcode-cn.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
    // let array = new Array();
    // array.push([])
    // for (let i = 0; i < nums.length; i++) {
    //     let tempArray = new Array();
    //     array.forEach((e) => {
    //         let array = JSON.parse(JSON.stringify(e));
    //         array.push(nums[i]);
    //         tempArray.push(array);
    //     });
    //     array = [...array, ...tempArray];
    // }
    // return array

    let res=[[]];
    let chosed=[];
    function dfs(chose){
        if(chose>nums.length){
            return;
        }
        for(let i=chose;i<nums.length;i++){
            chosed.push(nums[i])
            res.push([...chosed]);
            dfs(i+1);
            chosed.pop();
        }
    }
    dfs(0);
    return res;
};
console.log(subsets([1, 2, 3]));
