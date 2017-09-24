/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var ugly = []
  ugly[1] = 1

  var idx2 = 1, idx3 = 1, idx5 = 1
  var mul2 = 2, mul3 = 3, mul5 = 5

  for (var i = 2; i <= n; i++) {
      var min = Math.min(Math.min(mul2, mul3), mul5)
      ugly[i] = min

      if (mul2 == min) {
          mul2 = 2 * ugly[++idx2]
      }
      if (mul3 == min) {
          mul3 = 3 * ugly[++idx3]
      }
      if (mul5 == min) {
          mul5 = 5 * ugly[++idx5]
      }
  }

  return ugly[n]
};

