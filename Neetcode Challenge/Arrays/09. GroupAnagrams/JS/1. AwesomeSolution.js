/* 
Group Anagrams
https://leetcode.com/problems/group-anagrams/

Proper Solution
Runtime for 'n' test cases : 87ms
** Beats 98.23% of users with JavaScript
Memory for 'n' test cases  : 52.26MB
** Beats 89.18% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for(let i = 0; i < strs.length; i++)
    {
        let sortedstr = strs[i].split('').sort().join('')
        map.has(sortedstr) ? map.get(sortedstr).push(strs[i]) : map.set(sortedstr, [strs[i]])
    }
    let ans = []
    for(key of map.keys())
    {
        ans.push(map.get(key))
    }

    return ans
};