// Hacky Solution
// Runtime for 'n' test cases : 82ms
// Memory for 'n' test cases  : 47.86MB

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
};