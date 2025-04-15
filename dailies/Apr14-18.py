# mon
''' Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
Please implement encode and decode

Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Example 2:
Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]
'''
def encode(strs):
    encoded = ''
    for s in strs:
        encoded += str(len(s)) + '#' + s
    return encoded

def decode(encoded):
    decoded = []
    i = 0
    while i < len(encoded):
        j = encoded.index('#', i)
        length = int(encoded[i:j])
        decoded.append(encoded[j + 1:j + 1 + length])
        i = j + 1 + length
    return decoded

# Time: O(m), Space: O(m+n)

# print(encode(["neet", "code", "love", "you"]))
# print(decode("4#neet4#code4#love3#you"))

# print(encode(["we", "say", ":", "yes"]))
# print(decode("2#we3#say1#:3#yes"))

# tues
'''Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
Each product is guaranteed to fit in a 32-bit integer.
Follow-up: Could you solve it in O(n) time without using the division operation?

Example 1:
Input: nums = [1,2,4,6]
Output: [48,24,12,8]

Example 2:
Input: nums = [-1,0,1,2,3]
Output: [0,-6,0,0,0]
'''

def prodExceptSelf(nums):
    n = len(nums)
    output = [1] * n
    left_product = 1
    right_product = 1

    for i in range(n):
        output[i] *= left_product
        left_product *= nums[i]

    for i in range(n - 1, -1, -1):
        output[i] *= right_product
        right_product *= nums[i]

    return output

# Time: O(n), Space: O(1)

print(prodExceptSelf([1, 2, 4, 6]))
print(prodExceptSelf([-1, 0, 1, 2, 3]))

# weds

# thurs

# fri
