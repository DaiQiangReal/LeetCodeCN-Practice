/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if(envelopes.length===0)
        return 0;
    envelopes.sort((a,b)=>{
        if(a[0]!==b[0]){
            return a[0]-b[0];
        }
        return b[1]-a[1];
    });
    let dp=[];
    dp[0]=1;
    for(let i=1;i<envelopes.length;i++){
        dp[i]=1;
        for(let j=0;j<i;j++){
            if(envelopes[i][1]>envelopes[j][1]){
                dp[i]=Math.max(dp[i],dp[j]+1);
            }
        }
    }
    let max=0;
    dp.map((num)=>{
        if(num>max)
            max=num;
    })
    return max;
};
