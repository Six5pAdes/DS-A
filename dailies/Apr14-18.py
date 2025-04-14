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

# Time: O(), Space: O()

print(encode(["neet", "code", "love", "you"]))
print(decode("4#neet4#code4#love3#you"))

print(encode(["we", "say", ":", "yes"]))
print(decode("2#we3#say1#:3#yes"))

# tues

# weds

# thurs

# fri
