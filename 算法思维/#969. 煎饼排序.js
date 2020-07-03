//https://labuladong.gitbook.io/algo/suan-fa-si-wei-xi-lie/shao-bing-pai-xu
/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
    let ans=[];
    function helper(n,end){
        let maxIndex;
        let max=-Infinity;
        for(let i=0;i<=end;i++){
            if(n[i]>max){
                max=n[i];
                maxIndex=i;
            }
        }
        ans.push(maxIndex);
        ans.push(end);
        n=n.slice(0,maxIndex+1).reverse().concat(n.slice(maxIndex+1,end+1)).reverse().concat(n.slice(end+1));
        console.log(n);
        
        return n;
    }
    for(let i=A.length-1;i>=1;i--){
        A=helper(A,i);
    }
    ans=ans.map((num)=>num+1)
    return ans
};
console.log(pancakeSort([3,2,4,1]));
