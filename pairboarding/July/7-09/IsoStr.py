# Overview: For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character to get string B. The order of the characters must be preserved. There must be one-to-one mapping for every char of string A to every char of string B.

# paper and title would return true. egg and sad would return false. dgg and add would return true.

def isoStr(w1, w2):
    if len(w1) != len(w2):
        return False

    d = {}
    for i in range(len(w1)):
        if w1[i] in d:
            if d[w1[i]] != w2[i]:
                return False
        else:
            if w2[i] in d.values():
                return False
            d[w1[i]] = w2[i]
    return True

print(isoStr("paper", "title"))
print(isoStr("egg", "sad"))
print(isoStr("dgg", "add"))
print(isoStr("dgg", "ada"))
