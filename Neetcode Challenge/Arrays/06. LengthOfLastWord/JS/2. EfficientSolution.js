/* 
Length of Last Word
https://leetcode.com/problems/length-of-last-word/

Proper Solution
Runtime for 'n' test cases : 50 ms
** Beats 62.47% of users with JavaScript
Memory for 'n' test cases  : 42.1 MB
** Beats 35.91% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let isWordOngoing = false
    let length = 0
    
    for(let i = 0; i < s.length; i++)
    {
        if(s[i] == ' ')
        {
            isWordOngoing = false
            continue
        }
        else
        {
            if(!isWordOngoing)
            {
                isWordOngoing = true
                length = 0
            }
            length += 1
        }
    }
    return length
};