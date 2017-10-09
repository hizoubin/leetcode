/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  
      // 单链表节点值存储在数组中
      let convertToArray = (l) => {
          let res = []
          while (l) {
              res.push(l.val)
              l = l.next
          }
  
          return res
      }
  
      // 两个数组值累加得出结果，再存入新单链表并返回
      let addTwoArray = (a1, a2) => {
          let dummy = new ListNode(0), node = null
          let len1 = a1.length -1, len2 = a2.length - 1, sum = 0
  
          while (len1 >= 0 || len2 >= 0 || sum) {
              if (len1 >= 0) sum += a1[len1--]
              if (len2 >= 0) sum += a2[len2--]
  
              node = new ListNode(sum % 10)
              sum = parseInt(sum / 10)
              node.next = dummy.next
              dummy.next = node
          }
          return dummy.next
      }
  
      return addTwoArray(convertToArray(l1), convertToArray(l2))
  
  };