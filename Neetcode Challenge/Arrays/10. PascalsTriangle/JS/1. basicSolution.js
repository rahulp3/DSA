/* 
Pascal's Triangle
https://leetcode.com/problems/pascals-triangle/

Proper Solution
Runtime for 'n' test cases : 58ms
** Beats 24.88% of users with JavaScript
Memory for 'n' test cases  : 42.01MB
** Beats 70.17% of users with JavaScript

Author : CrypticSocket
/*


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let triangle = []

    for(let i = 1; i <= numRows; i++)
    {
        let line = []
        for(let j = 0; j < i; j++)
        {
            if(j == 0 || j == i - 1)
            {
                line.push(1)
            }
            else
            {
                line.push(triangle[i-2][j-1] + triangle[i-2][j])
            }
        }
        triangle.push(line)
    }

    return triangle
};