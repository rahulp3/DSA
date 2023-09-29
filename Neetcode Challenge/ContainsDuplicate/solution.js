// Proper Solution
// Runtime for 'n' test cases : 70ms
// Memory for 'n' test cases  : 53.3MB

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {}
    let flag = false
    for(let i = 0; i < nums.length; i++)
    {
        if(!map[nums[i]])
            map[nums[i]] = 1
        else
            return true
    }
    return false
};

// JS Hacky Solution (Less code, but less efficient)
// Runtime for 'n' test cases : 83ms
// Memory for 'n' test cases  : 55.17MB

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.length != (new Set(nums)).size
};
