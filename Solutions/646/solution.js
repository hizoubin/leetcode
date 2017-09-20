/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  // 先对pairs排序 将pairs中第二个数小的排在前
  var temp
  for (var i = 0; i < pairs.length; i++) {
      for (var j = i + 1; j < pairs.length; j++) {
          if (pairs[i][1] > pairs[j][1]) {
              temp = pairs[i]
              pairs[i] = pairs[j]
              pairs[j] = temp
          }
      }
  }
  
  var num = 1, m = 0
  for (var n = 1; n < pairs.length; n++) {
      if (pairs[n][0] > pairs[m][1]) {
          m = n
          num++
      }
  }
  
  return num

};