/* 
Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings/

Proper Solution
Runtime for 'n' test cases : 78ms
** Beats 10.18% of users with JavaScript
Memory for 'n' test cases  : 43.94MB
** Beats 29.93% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = {}, map2 = {}
    if(s.length != t.length) return false
    for(let i = 0; i < s.length; i++)
    {
        if(!map1[s[i]] && !map2[t[i]])
        {
            map1[s[i]] = t[i]
            map2[t[i]] = s[i]
        }
        else if(map1[s[i]] != t[i] || map2[t[i]] != s[i])
        {
            return false
        }
    }
    return true
};