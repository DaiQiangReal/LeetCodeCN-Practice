//https://leetcode-cn.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(N) {
    
    // let ans=new Set();
    // let temp=['(',')']
    // function dfs(n){ 
    //     if(n>N){
    //         ans.add(temp.join(""));
    //         return;
    //     }
    //     for(let i=1;i<=temp.length;i++){
    //         let originTemp=temp;
    //         let temp1=temp.slice(0,i);
    //         let temp2=temp.slice(i);
    //         temp1.push("(");
    //         temp1.push(")");
    //         temp=temp1.concat(temp2);
    //         dfs(n+1);
    //         temp=originTemp;
    //     }
    // }
    // dfs(2);
    // return Array.from(ans);
    let leftLeft=N;
    let rightLeft=N;
    let temp=[];
    let ans=[];
   
    function dfs(){
        if(leftLeft===0&&rightLeft===0){ 
                ans.push(temp.join(""));
        }
        if(leftLeft>0){
            temp.push('(');
            leftLeft-=1;
            dfs();
            temp.pop();
            leftLeft+=1;
        }
        if(rightLeft>0&&rightLeft>leftLeft){
            temp.push(')');
            rightLeft-=1;
            dfs();
            temp.pop();
            rightLeft+=1;   
        }
    }
    dfs();
    return ans;
};
console.log(generateParenthesis(3));
