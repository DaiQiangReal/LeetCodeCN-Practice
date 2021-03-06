//https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s2, s1) {
    let ans=[];
    let validCount=0;
    let windowMap=new Map();
    let s1Map=new Map();
    for(let char of s1){
        if(s1Map.has(char))
            s1Map.set(char,s1Map.get(char)+1);
        else
            s1Map.set(char,1);
        windowMap.set(char,0);
    }
    let left=0;
    let right=s1.length;
    for(let i=0;i<s1.length;i++){
        if(windowMap.has(s2[i])){
            windowMap.set(s2[i],windowMap.get(s2[i])+1);
            if(windowMap.get(s2[i])===s1Map.get(s2[i]))
                validCount++;
        }
    } 
    while(right<=s2.length){
        if(validCount===s1Map.size){
            ans.push(left);
        }
        if(windowMap.has(s2[right])){
            windowMap.set(s2[right],windowMap.get(s2[right])+1);
            if(windowMap.get(s2[right])===s1Map.get(s2[right]))
                validCount++;
        }
        if(windowMap.get(s2[left])!==undefined&&windowMap.get(s2[left])===s1Map.get(s2[left]))
                validCount--;
        windowMap.set(s2[left],windowMap.get(s2[left])-1);
        left++;
        right++;
    }
    return ans;
};
console.log(findAnagrams("abab",'ab'));
