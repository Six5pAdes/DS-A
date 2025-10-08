// mon
/* There are n gas stations along a circular route. You are given two integer arrays gas and cost where:
gas[i] is the amount of gas at the ith station.
cost[i] is the amount of gas needed to travel from the ith station to the (i + 1)th station. (The last station is connected to the first station)
You have a car that can store an unlimited amount of gas, but you begin the journey with an empty tank at one of the gas stations.
Return the starting gas station's index such that you can travel around the circuit once in the clockwise direction. If it's impossible, then return -1.
It's guaranteed that at most one solution exists.

Example 1:
Input: gas = [1,2,3,4], cost = [2,2,4,1]
Output: 3
Explanation: Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 1 + 1 = 4
Travel to station 1. Your tank = 4 - 2 + 2 = 4
Travel to station 2. Your tank = 4 - 2 + 3 = 5
Travel to station 3. Your tank = 5 - 4 + 4 = 5

Example 2:
Input: gas = [1,2,3], cost = [2,3,2]
Output: -1
Explanation:
You can't start at station 0 or 1, since there isn't enough gas to travel to the next station.
If you start at station 2, you can move to station 0, and then station 1.
At station 1 your tank = 0 + 3 - 2 + 1 - 2 = 0.
You're stuck at station 1, so you can't travel around the circuit.
*/

// time: O(n), space(1)

function circuitComplete(gas, cost) {
  const n = gas.length;
  let start = n - 1,
    end = 0;
  let tank = gas[start] - cost[start];

  while (start > end) {
    if (tank < 0) {
      start--;
      tank += gas[start] - cost[start];
    } else {
      tank += gas[end] - cost[end];
      end++;
    }
  }

  return tank >= 0 ? start : -1;
}

// console.log(circuitComplete([1, 2, 3, 4], [2, 2, 4, 1]));
// console.log(circuitComplete([1, 2, 3], [2, 3, 2]));

// tues
/* You are given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize.
You want to rearrange the cards into groups so that each group is of size groupSize, and card values are consecutively increasing by 1.
Return true if it's possible to rearrange the cards in this way, otherwise, return false.

Example 1:
Input: hand = [1,2,4,2,3,5,3,4], groupSize = 4
Output: true
Explanation: The cards can be rearranged as [1,2,3,4] and [2,3,4,5].

Example 2:
Input: hand = [1,2,3,3,4,5,6,7], groupSize = 4
Output: false
Explanation: The closest we can get is [1,2,3,4] and [3,5,6,7], but the cards in the second group are not consecutive.
*/

// time: O(n log n), space: O(n)

function isStraight(hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;

  const count = {};
  for (const card of hand) {
    count[card] = (count[card] || 0) + 1;
  }

  hand.sort((a, b) => a - b);
  for (const card of hand) {
    if (count[card] > 0) {
      for (let i = card; i < card + groupSize; i++) {
        if (!count[i]) return false;
        count[i] -= 1;
      }
    }
  }

  return true;
}

// console.log(isStraight([1, 2, 4, 2, 3, 5, 3, 4], 4));
// console.log(isStraight([1, 2, 3, 3, 4, 5, 6, 7], 4));

// weds
/* You are given a 2D array of integers triplets, where triplets[i] = [ai, bi, ci] represents the ith triplet. You are also given an array of integers target = [x, y, z] which is the triplet we want to obtain.
To obtain target, you may apply the following operation on triplets zero or more times:
Choose two different triplets triplets[i] and triplets[j] and update triplets[j] to become [max(ai, aj), max(bi, bj), max(ci, cj)].
* E.g. if triplets[i] = [1, 3, 1] and triplets[j] = [2, 1, 2], triplets[j] will be updated to [max(1, 2), max(3, 1), max(1, 2)] = [2, 3, 2].
Return true if it is possible to obtain target as an element of triplets, or false otherwise.

Example 1:
Input: triplets = [[1,2,3],[7,1,1]], target = [7,2,3]
Output: true
Explanation:
Choose the first and second triplets, update the second triplet to be [max(1, 7), max(2, 1), max(3, 1)] = [7, 2, 3].

Example 2:
Input: triplets = [[2,5,6],[1,4,4],[5,7,5]], target = [5,4,6]
Output: false
*/

// time: O(n), space: O(1)

function mergeTriplets(triplets, target) {
  let x = false,
    y = false,
    z = false;

  for (let t of triplets) {
    x |= t[0] === target[0] && t[1] <= target[1] && t[2] <= target[2];
    y |= t[0] <= target[0] && t[1] === target[1] && t[2] <= target[2];
    z |= t[0] <= target[0] && t[1] <= target[1] && t[2] === target[2];

    if (x && y && z) return true;
  }

  return false;
}

console.log(
  mergeTriplets(
    [
      [1, 2, 3],
      [7, 1, 1],
    ],
    [7, 2, 3]
  )
);
console.log(
  mergeTriplets(
    [
      [2, 5, 6],
      [1, 4, 4],
      [5, 7, 5],
    ],
    [5, 4, 6]
  )
);

// thurs
/* */

// time: O()

function ____() {}

// console.log()

// fri
/* */

// time: O()

function ____() {}

// console.log()
