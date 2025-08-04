# mon
'''Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
'''

def isPalindrome(x):
    if x < 0:
        return False
    return str(x) == str(x)[::-1]

# Time: O(log x), Space: O(log x)

print(isPalindrome(121)) # True
print(isPalindrome(-121)) # False
print(isPalindrome(10))

# tues
'''You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
'''

def plusOne(digits):
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] == 9:
            digits[i] = 0
        else:
            digits[i] = digits[i] + 1
            return digits
    return [1] + digits

# Time: O(n), Space: O(1)

print(plusOne([1, 2, 3]))
print(plusOne([4, 3, 2, 1]))

# wed
'''Given an integer n, return the number of trailing zeroes in n!.
Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

Example 1:
Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:
Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Example 3:
Input: n = 0
Output: 0
'''
def trailingZeroes(n):
    count = 0
    while n > 0:
        n //= 5
        count += n
    return count

# Time: O(log5n), Space: O(1)

print(trailingZeroes(3))
print(trailingZeroes(5))
print(trailingZeroes(0))

# thurs
'''Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
'''

def sqrRt(x):
    l, r = 0, x

    while l <= r:
        m = l + (r - l) // 2
        s = m * m

        if s == x:
            return m
        elif s < x:
            l = m + 1
        else:
            r = m - 1

    return r

# Time: O(log x), Space: O(1)

print(sqrRt(4))
print(sqrRt(8))

# fri
'''Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
'''

def powXN(x, n):
    if n < 0:
        x = 1 / x
        n = -n

    pow = 1
    while n:
        if n & 1:
            pow *= x
        x *= x
        n >>= 1

    return pow

# Time: O(log n), Space: O(1)

print(powXN(2.00000, 10))
print(powXN(2.10000, 3))
print(powXN(2.00000, -2))
