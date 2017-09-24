/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  //two nodes are null
  if(p==null && q==null)
      return true;

  //one node is null, and the other node is not null
  if(p==null || q==null)
      return false;

  return (p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right) ;

};