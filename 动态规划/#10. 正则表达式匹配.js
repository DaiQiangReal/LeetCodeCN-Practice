//https://leetcode-cn.com/problems/regular-expression-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

    let memo = new Map();
    function dp(s, p) {
        function oldDp(s, p) {
            if (s === '' || p === '') {
                if (p[1] === "*")
                    return dp(s, p.slice(2));
                return s === '' && p === '';
            }
            if (p[0] === '.') {
                if (p[1] === '*') {
                    //匹配多次，匹配一次，匹配零次 下同
                    return dp(s.slice(1), p) || dp(s.slice(1), p.slice(2)) || dp(s, p.slice(2));
                }
                else {
                    return dp(s.slice(1), p.slice(1));
                }
            }

            if (s[0] === p[0]) {
                if (p[1] === "*") {
                    return dp(s.slice(1), p) || dp(s.slice(1), p.slice(2)) || dp(s, p.slice(2));
                } else {
                    return dp(s.slice(1), p.slice(1));
                }
            }
            if (s[0] !== p[0]) {
                if (p[1] === "*")
                    return dp(s, p.slice(2));
                return false;
            }
        }

        if (memo.has(s + "," + p))
            return memo.get(s + "," + p);
        else {
            let ans = oldDp(s, p);
            memo.set(s + "," + p, ans);
            return ans;
        }
    }

    return dp(s, p)
};
console.log(isMatch("", "c*c*"));

