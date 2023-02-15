

var deleteDuplicates = function (head) {
  var cur = head;
  while (cur && cur.next) {
    console.log(cur.next);
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}

console.log(deleteDuplicates([1, 4, 1, 2, 3, 3]));