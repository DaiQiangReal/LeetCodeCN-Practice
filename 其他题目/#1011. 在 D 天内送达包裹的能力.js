//https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let sum=0;
    let max=0;
    weights.map(num=>{
        sum+=num;
        if(num>max)
            max=num;
    })
    let left=Math.max(Math.floor(sum/D),max);
    let right=sum+1;
    while(left<right){
        let mid=Math.floor((left+right)/2);
        if(canAllDone(mid)){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    return left;
    function canAllDone(weight){
        let day=1;
        let temp=0;
        for(let i=0;i<weights.length;i++){
            if(temp+weights[i]<=weight){
                temp+=weights[i];
            }else{
                if(day>=D)
                    return false;
                day++;
                temp=weights[i];
            }
        }
        return true;
    }
};
console.log(shipWithinDays([1,2,3,1,1],4));
