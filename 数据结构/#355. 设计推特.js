//https://leetcode-cn.com/problems/design-twitter/
class Tweet {
    constructor(tweetId, postTime) {
        this.tweetId = tweetId;
        this.postTime = postTime;
        this.next = null;
    }
}
class User {
    constructor(userID) {
        this.id = userID;
        this.followed = new Set();
        this.tweets = new Map();
        this.firstTweet = null;
        this.lastTweet = null;
    }
    follow(userID) {
        this.followed.add(userID);
    }
    unfollow(userID) {
        this.followed.delete(userID);
    }
    postTweet(tweetId, postTime) {
        let tweet = new Tweet(tweetId, postTime)
        this.tweets.set(tweetId, tweet);
        if (this.firstTweet === null) {
            this.firstTweet = tweet;
            this.lastTweet = tweet;
            return;
        }
        if (this.tweets.size === 1) {
            this.firstTweet.next = tweet;
            this.lastTweet = tweet;
        } else {
            this.lastTweet.next = tweet;
            this.lastTweet=tweet;
        }
    }
    getTweets() {
        return this.tweets;
    }
}
class Twitter {
    constructor() {
        this.userGroup = new Map();
        this.time = 0;
    }
    postTweet(userId, tweetId) {
        if (this.userGroup.has(userId)) {
            let user = this.userGroup.get(userId);
            user.postTweet(tweetId, this.time++);
        } else {
            let user = new User(userId);
            user.postTweet(tweetId, this.time++);
            this.userGroup.set(userId, user);
        }
    };
    getNewsFeed(userId) {
        var mergeKLists = function (lists) {
            function merge(list1, list2) {
                if (list1 === null)
                    return list2;
                if (list2 === null)
                    return list1;
                let big = list1.postTime >= list2.postTime ? list1 : list2;
                let small = list1.postTime < list2.postTime ? list1 : list2;
                small.next = merge(small.next, big);
                return small;
            }
            return lists.reduce((list1, list2) => merge(list1, list2), null);
        };
        let newsFeed = [];
        if (this.userGroup.has(userId)) {
            let user = this.userGroup.get(userId);
            if (user.followed.has(userId)) {
                let followed = user.followed;
                let tweetLists = [];
                followed.forEach(element => {
                    if (this.userGroup.has(element)) {
                        tweetLists.push(this.userGroup.get(element).firstTweet);
                    }
                    return;
                });
                tweetLists = JSON.parse(JSON.stringify(tweetLists))

                let sortedList = mergeKLists(tweetLists);
                if (sortedList === null) {
                    return [];
                }
                let count = 1;
                let start = sortedList;
                let end = sortedList;

                while (end.next !== null) {
                    if (count < 10) {
                        end = end.next;
                        count++;
                        continue;
                    }
                    end = end.next;
                    start = start.next;
                }

                while (start !== null) {
                    newsFeed.push(start.tweetId)
                    start = start.next;
                }
                return newsFeed.reverse();
            } else {
                user.follow(user.id);
                let followed = user.followed;
                let tweetLists = [];
                followed.forEach(element => {
                    if (this.userGroup.has(element)) {
                        tweetLists.push(this.userGroup.get(element).firstTweet);
                    }
                    return;
                });
                tweetLists = JSON.parse(JSON.stringify(tweetLists))

                let sortedList = mergeKLists(tweetLists);
                if (sortedList === null) {
                    return [];
                }
                let count = 1;
                let start = sortedList;
                let end = sortedList;

                while (end.next !== null) {
                    if (count < 10) {
                        end = end.next;
                        count++;
                        continue;
                    }
                    end = end.next;
                    start = start.next;
                }

                while (start !== null) {
                    newsFeed.push(start.tweetId)
                    start = start.next;
                }
                user.unfollow(user.id);
                return newsFeed.reverse();
            }
        }
        let user = new User(userId)
        this.userGroup.set(userId, user)
        return [];
    };
    follow(followerId, followeeId) {
        if (!this.userGroup.has(followerId)) {
            let user = new User(followerId);
            this.userGroup.set(followerId, user);
        }
        if (!this.userGroup.has(followeeId)) {
            let user = new User(followeeId);
            this.userGroup.set(followeeId, user);
        }
        let user = this.userGroup.get(followerId);
        user.follow(followeeId);

    };
    unfollow(followerId, followeeId) {
        if (!this.userGroup.has(followerId)) {
            let user = new User(followerId);
            this.userGroup.set(followerId, user);
        }
        if (!this.userGroup.has(followeeId)) {
            let user = new User(followeeId);
            this.userGroup.set(followeeId, user);
        }
        let user = this.userGroup.get(followerId);
        user.unfollow(followeeId);

    };
    log() {
        console.log(this.userGroup);
        this.userGroup.forEach((user, index) => {
            console.log(user.tweets);
        })
    }
}

let twitter = new Twitter();
twitter.postTweet(1,54);
twitter.postTweet(1,554);
twitter.postTweet(1,654);
twitter.postTweet(1,546);
twitter.postTweet(1,534);
twitter.postTweet(1,5455);
twitter.log();
console.log(twitter.getNewsFeed(1));

