// mon
/* Implement a simplified version of Twitter which allows users to post tweets, follow/unfollow each other, and view the 10 most recent tweets within their own news feed.
Users and tweets are uniquely identified by their IDs (integers).

Implement the following methods:
Twitter() Initializes the twitter object.
void postTweet(int userId, int tweetId) Publish a new tweet with ID tweetId by the user userId. You may assume that each tweetId is unique.
List<Integer> getNewsFeed(int userId) Fetches at most the 10 most recent tweet IDs in the user's news feed. Each item must be posted by users who the user is following or by the user themselves. Tweets IDs should be ordered from most recent to least recent.
void follow(int followerId, int followeeId) The user with ID followerId follows the user with ID followeeId.
void unfollow(int followerId, int followeeId) The user with ID followerId unfollows the user with ID followeeId.

Example 1:
Input:
["Twitter", "postTweet", [1, 10], "postTweet", [2, 20], "getNewsFeed", [1], "getNewsFeed", [2], "follow", [1, 2], "getNewsFeed", [1], "getNewsFeed", [2], "unfollow", [1, 2], "getNewsFeed", [1]]
Output:
[null, null, null, [10], [20], null, [20, 10], [20], null, [10]]

Explanation:
Twitter twitter = new Twitter();
twitter.postTweet(1, 10); // User 1 posts a new tweet with id = 10.
twitter.postTweet(2, 20); // User 2 posts a new tweet with id = 20.
twitter.getNewsFeed(1);   // User 1's news feed should only contain their own tweets -> [10].
twitter.getNewsFeed(2);   // User 2's news feed should only contain their own tweets -> [20].
twitter.follow(1, 2);     // User 1 follows user 2.
twitter.getNewsFeed(1);   // User 1's news feed should contain both tweets from user 1 and user 2 -> [20, 10].
twitter.getNewsFeed(2);   // User 2's news feed should still only contain their own tweets -> [20].
twitter.unfollow(1, 2);   // User 1 follows user 2.
twitter.getNewsFeed(1);   // User 1's news feed should only contain their own tweets -> [10].
 */

// time: O(n log n) (getNewsFeed()), O(1) (other methods); space: O((N * m) + (N * M) + n)

class Twitter {
  constructor() {
    this.count = 0;
    this.tweetMap = new Map();
    this.followMap = new Map();
  }

  postTweet(userId, tweetId) {
    if (!this.tweetMap.has(userId)) {
      this.tweetMap.set(userId, []);
    }

    this.tweetMap.get(userId).push([this.count, tweetId]);
    this.count -= 1;
  }

  getNewsFeed(userId) {
    const res = [];
    if (!this.followMap.has(userId)) {
      this.followMap.set(userId, new Set());
    }

    this.followMap.get(userId).add(userId);
    const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);

    for (const followeeId of this.followMap.get(userId)) {
      if (this.tweetMap.has(followeeId)) {
        const tweets = this.tweetMap.get(followeeId);
        const idx = tweets.length - 1;
        const [cnt, tweetId] = tweets[idx];
        minHeap.enqueue([cnt, tweetId, followeeId, idx - 1]);
      }
    }

    while (!minHeap.isEmpty() && res.length < 10) {
      const [cnt, tweetId, followeeId, nextIdx] = minHeap.dequeue();
      res.push(tweetId);
      if (nextIdx >= 0) {
        const [oldCnt, oldTwtId] = this.tweetMap.get(followeeId)[nextIdx];
        minHeap.enqueue([oldCnt, oldTwtId, followeeId, nextIdx - 1]);
      }
    }

    return res;
  }

  follow(followerId, followeeId) {
    if (!this.followMap.has(followerId)) {
      this.followMap.set(followerId, new Set());
    }

    this.followMap.get(followerId).add(followeeId);
  }

  unfollow(followerId, followeeId) {
    if (this.followMap.has(followerId)) {
      this.followMap.get(followerId).delete(followeeId);
    }
  }
}

/*
const twitter = new Twitter();

twitter.postTweet(1, 10); // User 1 posts tweet 10
twitter.postTweet(2, 20); // User 2 posts tweet 20

console.log(twitter.getNewsFeed(1)); // Should print: [10]
console.log(twitter.getNewsFeed(2)); // Should print: [20]

twitter.follow(1, 2); // User 1 follows user 2

console.log(twitter.getNewsFeed(1)); // Should print: [20, 10]
console.log(twitter.getNewsFeed(2)); // Should print: [20]

twitter.unfollow(1, 2); // User 1 unfollows user 2

console.log(twitter.getNewsFeed(1)); // Should print: [10]
*/

// tues
/* */

// time: O(); space: O()

// weds
/* */

// time: O(); space: O()

// thurs
/* */

// time: O(); space: O()

// fri
/* */

// time: O(); space: O()
