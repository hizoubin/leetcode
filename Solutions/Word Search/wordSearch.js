var board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
]

// var word = 'ABCCED'
var word = 'ABCB'

var exist = function(board, word) {

    var visited = new Array(board.length)
    for (var i = 0; i < visited.length; i++) {
        visited[i] = new Array(board[0].length)
        for (var j = 0; j < board[0].length; j++) {
            visited[i][j] = false
        }
    }

    var search = function(board, word, i, j, idx) {
        if (idx === word.length) {
            return true
        }

        if (i >= board.length || i < 0 || j >= board[0].length || j < 0 ||
            board[i][j] !== word.charAt(idx) || visited[i][j]) {
            return false
        }

        visited[i][j] = true

        if (search(board, word, i+1, j, idx+1) ||
            search(board, word, i-1, j, idx+1) ||
            search(board, word, i, j+1, idx+1) ||
            search(board, word, i, j-1, idx+1)
        ) {
            return true
        }

        visited[i][j] = false
        return false
    }

    for (var m = 0; m < board.length; m++) {
        for (var n = 0; n < board[0].length; n++) {
            if ((word.charAt(0) === board[m][n]) &&
                (search(board, word, m, n, 0))) {
                return true
            }
        }
    }

    return false
};