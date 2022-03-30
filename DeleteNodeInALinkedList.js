/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    if(node == null || node.next == null){
        return null;
    }
    node.val = node.next.val;
    node.next  = node.next.next;
};

/**
 * First check if the node is null or its next is null. If so, we return null.
 * Set the node’s value to its next’s value.
 * Finaly set the node’s next to its next’s next.
 */