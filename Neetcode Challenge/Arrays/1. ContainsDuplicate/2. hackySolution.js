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
