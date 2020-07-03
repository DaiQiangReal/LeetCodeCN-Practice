//https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s==="")
        return 0;
    let windowSet=new Set();
    let left=0;
    let right=1;
    let repeatChar=null;
    let longest=1;
    windowSet.add(s[0]);
    while(left<s.length&&right<=s.length){
        if(repeatChar!==null){
            if(s[left]===repeatChar){
                repeatChar=null;
            }else{
                windowSet.delete(s[left])
            }
            left++;
            continue;
        }
        if(windowSet.has(s[right])){
            if(right-left>longest){
                longest=right-left;
            }
            repeatChar=s[right];
            right++;
        }else{
            windowSet.add(s[right]);
            right++;
        }
        
    }
    longest=Math.max(longest,right-1-left);
    return longest;
};
console.log(lengthOfLongestSubstring("au"));
