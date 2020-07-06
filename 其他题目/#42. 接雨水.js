//https://leetcode-cn.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length===0)
        return 0;
    let leftMax=height[0];
    let rightMax=height[height.length-1];
    let i=0;
    let j=height.length-1;
    let ans=0;
    while(i<=j){
        leftMax=Math.max(leftMax,height[i]);
        rightMax=Math.max(rightMax,height[j])
        if(leftMax<rightMax){
            ans+=leftMax-height[i];
            i++;
        }else{
            ans+=rightMax-height[j];
            j--;
        }
        
    }
    return ans;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
