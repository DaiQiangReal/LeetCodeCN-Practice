//https://leetcode-cn.com/problems/coin-lcci/

/**
 * @param {number} n
 * @return {number}
 */

let data = [];
let coin=[1,5,10,25]
var waysToChange = function (n) {
    for(let i=0;i<=n;i++){
        data[i]=1;
    }
    for(let i of coin){
        for(let v=0;v<=n;v++){
            if(i===1)
                continue;
                
                
            if(v>=i)
                data[v]=(data[v]+data[v-i])%1000000007
        }
    }
    return data[n]
};

console.log(waysToChange(10));



