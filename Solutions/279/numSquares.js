/*
*    dp[0] = 0
     dp[1] = dp[0]+1 = 1
     dp[2] = dp[1]+1 = 2
     dp[3] = dp[2]+1 = 3
     dp[4] = Min{ dp[4-1*1]+1, dp[4-2*2]+1 }
         = Min{ dp[3]+1, dp[0]+1 }
         = 1
     dp[5] = Min{ dp[5-1*1]+1, dp[5-2*2]+1 }
         = Min{ dp[4]+1, dp[1]+1 }
         = 2
     ...
     dp[n] = Min{ dp[n - i*i] + 1 },  n - i*i >=0 && i >= 1
* */

const MaxN = 10000

let numSquares = function (n) {
    let dp = []
    dp[0] = 0, dp[1] = 1, dp[2] = 2, dp[3] = 3
    for (let l = 4; l <= n; l++) {
        dp[l] = MaxN
    }

    for (let k = 4; k <= n; k++) {
        for (let i = 1; i * i <= k; i++) {
            dp[k] = Math.min(dp[k], dp[k - i * i] + 1)
        }
    }

    return dp[n]
};

let a = numSquares(29)
console.log(a)