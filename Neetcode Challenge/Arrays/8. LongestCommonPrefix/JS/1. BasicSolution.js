/* 
Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/

Proper Solution
Runtime for 'n' test cases : 58ms
** Beats 39.34% of users with JavaScript
Memory for 'n' test cases  : 42.34MB
** Beats 54.50% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lengthLimit = Math.min(...strs.map(s => s.length))
    let prefix = ""
    strs.sort()
    for(let i = 0; i < lengthLimit; i++)
    {
        if(strs[0][i] == strs[strs.length - 1][i])
        {
            prefix += strs[0][i]
        }
        else break;
    }
    return prefix
};