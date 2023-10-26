/* 
Majority Element
https://leetcode.com/problems/majority-element/

Moore's Candidate Voting Algorithm Solution
Runtime for 'n' test cases : 65ms
** Beats 27.29% of users with JavaScript
Memory for 'n' test cases  : 43.83MB
** Beats 57.89% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums[0]
    let count = 0
    for(n of nums)
    {
        if(n == majority)
        {
            count++
        }
        else
        {
            count--
            if(count == 0)
            {
                majority = n
                count++
            }
        }
    }

    count = 0
    for(n of nums)
    {
        if(n == majority)
        {
            count++
        }
    }
    if(count > nums.length/2) return majority
    return -1

};