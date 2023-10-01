/* 
Valid Anagram
https://leetcode.com/problems/valid-anagram/

Basic Solution
Runtime for 'n' test cases : 68ms
Memory for 'n' test cases  : 43.78MB
Author : CrypticSocket
/*

// 
// 
// 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)
        return false

    let map = {}
    for(let letter of s)
    {
        if(!map[letter])
            map[letter] = 1
        else
            map[letter] += 1
    }

    for(let letter of t)
    {
        if(!map[letter])
            return false
        else if(map[letter] > 1)
            map[letter] -= 1
        else if (map[letter] == 1)
            delete(map[letter])
    }

    if(!map.size)
        return true
    return false
};