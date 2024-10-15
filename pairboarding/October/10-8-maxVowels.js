/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/

function maxVowels(s, k) {
  // identify vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // initialize substring, n, and result
  const sub = [];
  let n = 0;
  let result = 0;

  /*
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
  for (let i = k; j < s.length; i++) {
    //   if the first element of substring is a vowel, remove it
    if (vowels.includes(sub.shift())) {
      result--;
    }
    //   if the next element is a vowel, add it to substring
    if (vowels.includes(s[j])) {
      sub.push(s[j]);
      result++;
    }
  }
    */

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      sub.push(true);
      n++;
    } else {
      sub.push(false);
    }
  }

  result = n;
  for (let i = k; i < s.length; i++) {
    let first = sub.shift();
    sub.push(vowels.includes(s[i]));
    if (first) {
      n--;
    }
    if (vowels.includes(s[i])) {
      n++;
    }
    result = Math.max(result, n);
  }

  return Math.max(result);
}

// /*
console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2
// */
