//https://leetcode-cn.com/problems/super-pow/
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    let base=1337;
    
    function pow(a,b){
        let ans=1;
        a=a%base;
        for(let _=0;_<b;_++){
            ans*=a;
            ans=ans%base;
        }
        return ans;
    }
    if(b.length===0)
        return 1;
    let last=b.splice(b.length-1,1);
    return (pow(superPow(a,b),10)*(pow(a,last)))%1337;
};

console.log(superPow(2,[1,0]));
