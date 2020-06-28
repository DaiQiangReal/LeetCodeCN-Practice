//https://leetcode-cn.com/problems/design-twitter/
class Tweet{
    constructor(tweetId,postTime){
        this.tweetId=tweetId;
        this.postTime=postTime;
        this.left=null;
        this.right=null;
    }
}
class User{
    constructor(userID){
        this.id=userID;
        this.followed=new Set();
        this.tweets=new Map();
        this.firstTweet=null;
        this.lastTweet=null;
    }
    follow(userID){
        this.followed.add(userID);
    }
    unfollow(userID){
        this.followed.delete(userID);
    }
    postTweet(tweetId,postTime){
        let tweet=new Tweet(tweetId,postTime)
        this.tweets.set(tweetId,tweet);
        if(this.firstTweet===null){
            this.firstTweet=tweet;
            this.lastTweet=tweet;
        }
        if(this.tweets.size===1){
            this.firstTweet.right=tweet;
            tweet.left=this.firstTweet;
        }
        if(this.lastTweet===null)
            this.lastTweet=tweet;
        else{
            tweet.left=this.lastTweet;
            this.lastTweet.right=tweet;
            this.lastTweet=tweet;
        }
    }
    getTweets(){
        return this.tweets;
    }
}
class Twitter{
    constructor(){
        this.userGroup=new Map();
        this.time=0;
    }
    postTweet(userId, tweetId) {
        if(this.userGroup.has(userId)){
            let user=this.userGroup.get(userId);
            user.postTweet(tweetId,this.time++);
        }else{
            let user=new User(userId);
            user.postTweet(tweetId,this.time++);
            this.userGroup.set(userId,user);
        }
    };
    getNewsFeed(userId) {
        function mergeSortedList(){
            let lists=arguments;
            function merge(list1,list2){
                if(list1===null){
                    return list2;
                }
                if(list2===null)
                    return list1;
                let old=list1.time<list2.time?list1:list2;
                let newd=list1.time>list2.time?list1:list2;
                let other=merge(oldRight,newd.right);
                old.right=newd;
                newd.left=old;
                newd.right=other;
                other.left=newd;
                return old;
            }
            let sortedList=lists.reduce((list1,list2)=>merge(list1,list2),new Tweet(-1,-1));
            // while(sortedList.right!==null){
            //     sortedList=sortedList.right;
            // }
            // while(sortedList!==null){
            //     let temp=sortedList.left;
            //     sortedList.left=sortedList.right;
            //     sortedList.right=temp;
            //     sortedList=sortedList.left;
            // }
            return sortedList;
        }
        let newsFeed=[];
        if(this.userGroup.has(userId)){
            let user=this.userGroup.get(userId);
            if(user.followed.has(userId)){
                let followed=user.followed;
                followed.forEach(element => {
                    
                });
            }else{

            }
        }
    };
    follow(followerId, followeeId) {
        if(this.userGroup.has(followerId)&&this.userGroup.has(followeeId)){
            let user=this.userGroup.get(followerId);
            user.follow(followeeId);
        }
    };
    unfollow(followerId, followeeId) {
        if(this.userGroup.has(followerId)&&this.userGroup.has(followeeId)){
            let user=this.userGroup.get(followerId);
            user.unfollow(followeeId);
        }
    };
}