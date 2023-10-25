/* 
Unique Email Address
https://leetcode.com/problems/unique-email-addresses/

Proper Solution
Runtime for 'n' test cases : 66ms
** Beats 66.31% of users with JavaScript
Memory for 'n' test cases  : 49.00MB
** Beats 18.73% of users with JavaScript

Author : CrypticSocket
/*

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let uniqueEmails = new Set()
    for(email of emails)
    {
        let [name, domain] = email.split('@')
        if(!domain) continue
        let positionOfPlus = name.indexOf('+')
        if(positionOfPlus > 0) name = name.slice(0, name.indexOf('+'))
        name = name.split('').filter(x => x!='.').join('')
        uniqueEmails.add(name+'@'+domain)
    }

    return uniqueEmails.size
};