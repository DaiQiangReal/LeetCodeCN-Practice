//https://leetcode-cn.com/problems/count-primes/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let boolData=new Array(n+1).fill(true);
    let sqrtN=Math.sqrt(n);
    for(let i=2;i<=sqrtN;i++){
        if(boolData[i]){
            for(let j=i*i;j<n;j=j+i){
                boolData[j]=false;
            }
        }
    }
    let count=0;
    for(let i=2;i<n;i++){
        if(boolData[i])
            count++;
    }
    return count;
};
console.log(countPrimes(10));
