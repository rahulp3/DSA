/* 
Two Sum
https://leetcode.com/problems/two-sum/

Proper Solution
Runtime for 'n' test cases : 52ms
** Beats 88.58% of users with JavaScript
Memory for 'n' test cases  : 45.05MB
** Beats 7.10% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    
    for(let i = 0; i < nums.length; i++)
    {
        map.set(nums[i], i)
    }

    for(let i = 0; i < nums.length; i++)
    {
        let remains = target - nums[i]
        if(map.has(remains) && map.get(remains) != i)
            return [i, map.get(remains)]
    }
};