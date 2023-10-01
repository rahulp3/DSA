/* 
Length of Last Word
https://leetcode.com/problems/length-of-last-word/

Proper Solution
Runtime for 'n' test cases : 45ms
** Beats 86.30% of users with JavaScript
Memory for 'n' test cases  : 41.93MB
** Beats 46.63% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {string} s
 * @return {number}
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let isWordOngoing = false
    let length = 0
    
    for(let i = s.length - 1; i >= 0; i--)
    {
        if(s[i] == ' ')
        {
            if(isWordOngoing) break
            continue
        }
        else
        {
            isWordOngoing = true
            length += 1
        }
    }
    return length
};