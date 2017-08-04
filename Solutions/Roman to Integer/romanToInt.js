/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var hash = {};
    hash['I'] = 1;
    hash['V'] = 5;
    hash['X'] = 10;
    hash['L'] = 50;
    hash['C'] = 100;
    hash['D'] = 500;
    hash['M'] = 1000;

    var len = s.length;
    var sum = hash[s[len - 1]];

    for (var i = len - 1; i > 0; i--) {    
        if (hash[s[i]] <= hash[s[i - 1]] ) {
            sum += hash[s[i - 1]];
        } else {
            sum -= hash[s[i - 1]];
        }
    }
    
    return sum;
}

romanToInt('MMMCMXCIX');