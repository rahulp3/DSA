/* 
Concatenation of Array
https://leetcode.com/problems/concatenation-of-array/

Proper Solution
Runtime for 'n' test cases : 62ms
Memory for 'n' test cases  : 46.57MB
Author : CrypticSocket
/*

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums, ...nums]
};