/* 
Can Place Flowers
https://leetcode.com/problems/can-place-flowers/

Proper Solution
Runtime for 'n' test cases : 52ms
** Beats 83.55% of users with JavaScript
Memory for 'n' test cases  : 43.90MB
** Beats 83.88% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let placeablePosition = 0
    for(let i = 0; i < flowerbed.length; i++)
    {
        if(!flowerbed[i-1] & !flowerbed[i] & !flowerbed[i+1])
        {
            placeablePosition++
            i++
        }
    }

    return placeablePosition >= n
};
