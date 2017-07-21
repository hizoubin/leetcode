/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var i, j, k, result, str = ''
    var len = []
    if (s === '') {
        result = 0
        return result
    }

    for (i = 0; i < s.length; i++) {
        str += s[i]
        j = i
        while ((str.indexOf(s[j + 1]) === -1) && (j + 1 < s.length)) {
            str += s[j + 1]
            j++
        }
        len[i] = str.length
        str = ''
    }
    
    result = len[0]
    for (k = 0; k < len.length; k++) {
        if (result < len[k + 1]) 
            result = len[k + 1]
    }
    return result
};