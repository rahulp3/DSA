/* 
Length of Last Word
https://leetcode.com/problems/length-of-last-word/

Proper Solution
Runtime for 'n' test cases : 57ms
** Beats 19.57% of users with JavaScript
Memory for 'n' test cases  : 42.41MB
** Beats 8.39% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.trim().split(' ').filter(word => !!word)
    return (words[words.length - 1]).length
};