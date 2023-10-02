/* 
Two Sum
https://leetcode.com/problems/two-sum/

Proper Solution
Runtime for 'n' test cases : 61ms
** Beats 64.60% of users with JavaScript
Memory for 'n' test cases  : 44.64MB
** Beats 9.81% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    
    for(let i = 0; i < nums.length; i++)
    {
        map[nums[i]] = i
    }

    for(let i = 0; i < nums.length; i++)
    {
        let remains = target - nums[i]
        if(!!map[remains] && map[remains] != i)
            return [i, map[remains]]
    }
};