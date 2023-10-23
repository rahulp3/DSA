/* 
Pascal's Triangle
https://leetcode.com/problems/remove-element/

Proper Solution
Runtime for 'n' test cases : 29ms
** Beats 99.99% of users with JavaScript
Memory for 'n' test cases  : 42.00MB
** Beats 40.44% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let start = 0
    for(let i=0; i < nums.length; i++)
    {
        if(nums[i] != val)
        {
            nums[start] = nums[i]
            start++
        }
    }

    return start
};
