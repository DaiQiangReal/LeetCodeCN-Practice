//https://leetcode-cn.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s === "")
        return true;
    let stack = [];
    stack.push(s[0]);
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            let top = stack[stack.length - 1];
            if (s[i] === ')') {
                if (top !== '(')
                    return false;
            } else if (s[i] === ']') {
                if (top !== '[')
                    return false;
            } else if (s[i] === '}') {
                if (top !== '{')
                    return false;
            }
            stack.pop();
            continue;
        }
        stack.push(s[i])
    }
    return stack.length===0;




    //新方法
    // while(s.indexOf('()')!==-1||s.indexOf('{}')!==-1||s.indexOf('[]')!==-1){
    //     s=s.replace('()',"");
    //     s=s.replace('{}',"");
    //     s=s.replace('[]',"");
    // }
    // return s.length===0;
};
console.log(isValid('()[()(]{}'));
