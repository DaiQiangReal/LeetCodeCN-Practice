//https://leetcode-cn.com/problems/multiply-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let sum=[];
    if(num1==="0"||num2==="0")
        return "0"
    num1=num1.split("").reverse().join("");
    num2=num2.split("").reverse().join("");
    for(let i=0;i<num2.length;i++){
        for(let j=0;j<num1.length;j++){
            sum[j+i]=sum[j+i]?(sum[j+i]+num2[i]*num1[j]):num2[i]*num1[j];
        }
    }
    for(let i=0;i<sum.length;i++){
        if(sum[i]>9){
            sum[i+1]=sum[i+1]?(sum[i+1]+Math.floor(sum[i]/10)):Math.floor(sum[i]/10);
            sum[i]=sum[i]%10;
        }
    }
    return sum.reverse().join("")
};