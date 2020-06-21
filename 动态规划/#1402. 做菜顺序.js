//https://leetcode-cn.com/problems/reducing-dishes/
/**
 * @param {number[]} satisfaction
 * @return {number}
 */

function calculateLoveTime(queue){
    let loveTime=0;
    queue.map((satisfaction,index)=>{
        loveTime+=satisfaction*(index+1);
    })
    return loveTime;
}
var maxSatisfaction = function(satisfaction) {

    satisfaction.sort((a,b)=>b-a)
    let queue=[];
    let max=0;
    for(let food of satisfaction){
        if(food>=0){
            queue.unshift(food);
            max=calculateLoveTime(queue);
            continue;
        }
        queue.unshift(food);
        max=Math.max(max,calculateLoveTime(queue));        
    }
    return max;
    
};

console.log(maxSatisfaction([-2,5,-1,0,3,-3]));
