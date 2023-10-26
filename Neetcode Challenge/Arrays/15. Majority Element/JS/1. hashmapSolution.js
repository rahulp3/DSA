/* 
Majority Element
https://leetcode.com/problems/majority-element/

Hashmap Solution
Runtime for 'n' test cases : 58ms
** Beats 60.90% of users with JavaScript
Memory for 'n' test cases  : 43.8MB
** Beats 57.89% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    let maxFrequency = nums[0]
    for(n of nums)
    {
        if(!map[n])
        {
            map[n] = 0
        }
        map[n]++
        if(map[n] > map[maxFrequency])
        {
            maxFrequency = n
        }
        if(map[maxFrequency] > nums.length/2) break
    }

    return maxFrequency
};