/*
 dp[i][j]    s中下标(i, j)的最大回文子串
 dp[i][j] = dp[i-1][j+1] + 2   s[i-1] === s[j]
 dp[i][j] = Math.max(dp[i][j+1], dp[i-1][j])
*/

let longestPalindromeSubseq = function(s) {
  let arr = s.split("")
  let len = arr.length, l, k, p

  let dp = new Array(len)
  for (l = 0; l < len; l++) {
      dp[l] = new Array(len)
  }

  let solve = (i, j) => {
      if (dp[i][j]) {
          return dp[i][j]
      }
      if (i > j) {
          return 0
      }
      if (i == j) {
          return 1
      }

      if (arr[i] === arr[j]) {
          dp[i][j] = solve(i+1, j-1) + 2
      } else {
          dp[i][j] = Math.max(solve(i, j-1), solve(i+1, j))
      }
      return dp[i][j]
  }

  return solve(0, len-1)
};

// Test
let a = longestPalindromeSubseq("aaabab")
console.log(a)