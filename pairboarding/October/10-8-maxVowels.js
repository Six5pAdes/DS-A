/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/

function maxVowels(s, k) {
  // identify vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // initialize substring, result
  const sub = [];
  let result = 0;

  //   for loop for navigating the strings
  for (let i = 0; i < s.length; i++) {
    // find all vowels in strings along index; if they exist, push to substrings
    if (vowels.includes(s[i])) {
      sub.push(s[i]);
      result++;
      console.log(sub);
    }
  }

  //   for loop that limits strings to k max
  for (let j = k; j < s.length; j++) {}

  return Math.max(result);
}

// /*
console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2
// */

/*
    let target = ['a', 'e', 'i', 'o', 'u'];
    let substr = [];
    let n = 0;
    let result = 0;
    for (let i = 0; i < k; i++) {
        if (target.includes(s[i])) {
            substr.push(true)
            n++
        } else {
            substr.push(false)
        }
    }
    result = n;
    for (let i = k; i < s.length; i++) {
        let first = substr.shift();
        substr.push(target.includes(s[i]));
        if (first) {
            n--;
        };
        if (target.includes(s[i])) {
            n++;
        };
        result = Math.max(result, n);
    }
    return result;
    */
