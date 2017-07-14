/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode*p = l1, *q = l2, *L, *temp;
    
    while (p && q) {     
        q->val = p->val = q->val + p->val;
        p = p->next;
        q = q->next;
    }
    
    L = (p) ? l1 : l2;  //l1和l2相比，哪个长度更长
    
    temp = L;
    while (temp) {
        if (temp->val >= 10) {
            if (!temp->next) temp->next = (struct ListNode*)calloc(1, sizeof(struct ListNode));
            temp->val -= 10;
            temp->next->val +=1;
        }
        temp = temp->next;
    }
    return L;
}
