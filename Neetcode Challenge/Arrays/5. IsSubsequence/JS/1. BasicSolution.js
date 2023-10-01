/* 
Is Subsequence
https://leetcode.com/problems/is-subsequence/

Proper Solution
Runtime for 'n' test cases : 57ms
Memory for 'n' test cases  : 42.37MB

Author : CrypticSocket
/*

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0
    for(let i = 0; i < t.length; i++)
    {
        if(t[i] == s[j]) j++
    }
    if(j == s.length) return true
    return false
};