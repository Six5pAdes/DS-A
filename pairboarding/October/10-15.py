'''
Write a function that takes in a string and that returns its longest substring without duplicate characters. Assume that there will only be one longest substring without duplication.
'''

def singleLongestSubstring(str):
    # initialize {} for duplicates
    duplicate = {}
    # initialize variables for start index and length/range
    longest = [0, 1]
    start = 0

    # iterate (for loop) through string
    for i in range(len(str)):
        char = str[i]

        # add s to duplicate and check existence
        if char in duplicate != None and duplicate[char] >= start:
            # reinitialize start to duplicate[s]
            start = duplicate[char] + 1
        # checking distance between longest length and start
        if (longest[1] - longest[0] < i + 1 - start):
            # reinitialize longest to start and index
            longest = [start, i + 1]
        # redefine s to i
        duplicate[char] = i
        # print(duplicate, start)


    # return substring
    return str[longest[0] : longest[1]]


print(singleLongestSubstring("clementisacap")) #"mentisac"
