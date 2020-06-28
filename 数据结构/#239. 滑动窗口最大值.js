//https://leetcode-cn.com/problems/sliding-window-maximum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MonotonicQueue{
    constructor(){
        this.array=new Array();
    }
    push(val) {
        while(this.array.length>0&&this.array[this.array.length-1]<val){
            this.array.pop();
        }
        this.array.push(val);
    }
    pop(val){
        if(this.array.length>0&&this.array[0]===val){
            return this.array.shift();
        }
    }
    getMax(){
        return this.array[0];
    }
    log(){
        console.log("log:",this.array);
    }
}
var maxSlidingWindow = function(nums, k) {
    let queue=new MonotonicQueue();
    let ans=[];
    for(let i=0;i<nums.length;i++){
        if(i<k-1){
            queue.push(nums[i])
        }else{
            queue.push(nums[i]);
            ans.push(queue.getMax());
            queue.pop(nums[i-k+1])
        }
    }
    return ans;
};
console.log(maxSlidingWindow([-7,-8,7,5,7,1,6,0],4));
