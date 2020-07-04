//https://leetcode-cn.com/problems/shuffle-an-array/
/**
 * @param {number[]} nums
 */
class Solution{
    constructor(nums) {
        this.originNum=nums;
        this.length=nums.length;
    }
    reset(){
        return this.originNum;
    }
    shuffle(){
        let nums=[...this.originNum];
        for(let i=0;i<this.length;i++){
            let rand=this._getRandomInt(i,n);
            let temp=nums[i];
            nums[i]=nums[rand];
            nums[rand]=temp;
        }
        return nums;
    }
    _getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
      }
}