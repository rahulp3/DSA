/* 
Replace Elements With Greatest Element On Right Side
https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

Proper Solution
Runtime for 'n' test cases : 126ms
** Beats 99.29% of users with JavaScript
Memory for 'n' test cases  : 51.00MB
** Beats 73.24% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if(!arr || !arr.length) return arr

    let max = arr[arr.length - 1]
    for(let i = arr.length-1; i >= 0; i--)
    {
        if(arr[i] > max)
        {
            let temp = max
            max = arr[i]
            arr[i] = temp
        }
        else
        {
            arr[i] =  max
        }
    }
    arr[arr.length - 1] = -1
    return arr
};