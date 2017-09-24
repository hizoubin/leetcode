/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (maxChoosableInteger >= desiredTotal || desiredTotal == 0) {
      return true
  }

  if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) {
      return false
  }

  var choosen = 0, win = new Array(1 << maxChoosableInteger)
  var solve = function (n, total, cur) {
      if (win[choosen] != null) {
          return win[choosen]
      }

      if (cur >= total) {
          win[choosen] = false
          return false
      }

      for (var i = 1; i <= n; i++) {
          var bit  = 1 << (i - 1)
          if ((choosen & bit) == 0) {
              choosen ^= bit

              var ulose = !solve(n, total, cur + i)

              choosen ^= bit

              if (ulose) {
                  win[choosen] = true
                  return true
              }
          }
      }

      win[choosen] = false
      return false
  }

  return solve(maxChoosableInteger, desiredTotal, 0)
};