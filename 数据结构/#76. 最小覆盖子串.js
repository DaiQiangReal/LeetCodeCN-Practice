//https://leetcode-cn.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = 0;
    let right = 1;
    let ans = null;
    let tMap = new Map();
    let windowMap = new Map();
    let validCount = 0;
    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1);
        } else {
            tMap.set(t[i], 1);
        }
    }
    windowMap.set(s[0],1);
    if (tMap.get(s[0])===1) {
        validCount++;
    }
    while (left < s.length && right <= s.length) {
        // console.log(left,right,validCount,windowMap);
        if (right - left < t.length) {
            if (windowMap.has(s[right])) {
                windowMap.set(s[right], windowMap.get(s[right]) + 1);
            } else {
                windowMap.set(s[right], 1);
            }
            if (tMap.has(s[right]) && windowMap.get(s[right]) === tMap.get(s[right])) {
                validCount++;
            }
            right++;
            continue;
        }
        //缩小
        if (validCount === tMap.size) {
            if (right - left === t.length)
                return s.slice(left, right);
            if (ans === null || right - left < ans.length) {
                ans = s.slice(left, right);
            }
            if (tMap.has(s[left]) && windowMap.get(s[left]) === tMap.get(s[left])) {
                validCount--;
            }
            windowMap.set(s[left], windowMap.get(s[left]) - 1);
            left++;
            continue;
        }
        //扩大
        if (windowMap.has(s[right])) {
            windowMap.set(s[right], windowMap.get(s[right]) + 1);
        } else {
            windowMap.set(s[right], 1);
        }
        if (tMap.has(s[right]) && windowMap.get(s[right]) === tMap.get(s[right])) {
            validCount++;
        }
        right++;
    };
    return ans === null ? '' : ans;
}
console.log(minWindow("ADOBECODEBANC", "ABC"));
