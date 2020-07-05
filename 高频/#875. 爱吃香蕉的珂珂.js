//https://leetcode-cn.com/problems/koko-eating-bananas/
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    
    let right=0;
    let sum=0;
    piles.map(num=>{
        sum+=num;
        if(num>right)
            right=num;
    });
    right++;
    let left=Math.floor(sum/H);
    while(left<right){
        let mid=Math.floor((left+right)/2);
        if(canEatAll(mid)){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    return left;
    function canEatAll(k){
        let day=0;
        for(let i=0;i<piles.length;i++){
            day+=eatPileDay(piles[i]);
        }
        return day<=H;
        function eatPileDay(pile){
            return Math.floor(pile/k)+(pile%k!==0?1:0);
        }
    } 
};
console.log(minEatingSpeed([30,11,23,4,20],6));

