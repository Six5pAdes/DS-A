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

// console.log(isValid("[]"))
// console.log(isValid("([{}])"))
// console.log(isValid("[(])"))

// tues
/* Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
Each function should run in O(1) time.

Example 1:
Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]
Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
*/

class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val) {
        this.stack.push(val)

        val = Math.min(val,
            this.minStack.length === 0 ?
                val :
                this.minStack[this.minStack.length - 1]
        )

        this.minStack.push(val)
    }

    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    top() {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}

// Time: O(1), Space: O(n)

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
console.log(minStack)

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
