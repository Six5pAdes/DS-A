// mon

/* You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
The input string s is valid if and only if:
Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:
Input: s = "[]"
Output: true

Example 2:
Input: s = "([{}])"
Output: true

Example 3:
Input: s = "[(])"
Output: false
Explanation: The brackets are not closed in the correct order.
 */

function isValid(s) {
    const stack = []
    const pairs = {
        ")": "(", "}": "{", "]": "["
    }

    for (let c of s) {
        if (pairs[c]) {
            if (stack.length > 0 && stack[stack.length - 1] === pairs[c]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(c)
        }
    }

    return stack.length === 0
}

// Time: O(n), Space: O(n)

console.log(isValid("[]"))
console.log(isValid("([{}])"))
console.log(isValid("[(])"))

// tues
/*
*/

function ____() { }

// Time: O(), Space: O()

// console.log()

// weds
/*
*/

function ____() { }

// Time: O(), Space: O()

// console.log()

// thurs
/*
*/

function ____() { }

// Time: O(), Space: O()

// console.log()

// fri
/*
*/

function ____() { }

// Time: O(), Space: O()

// console.log()
