var reverseList = function (head) {
  let cur = head // 当前节点
  let prev = null // 当前节点的前一个节点
  // 一次循环是把当前的节点的next指向prev 周而复始
  // 千万不要想着 一次循环是两个节点位置的互换
  // 按照这个去理解null<-1<-2<-3
  while (cur) {
    let nextTemp = cur.next // 保留剩余未反转的链表
    cur.next = prev // 当前节点的next指向prev
    prev = cur // 做完上面一步后 把当前的节点设置为prev，供下次迭代作为prev使用
    cur = nextTemp // 将当前指针指向剩余未反转的链表
  }
  return prev
};
console.log(reverseList([1, 2, 3, 4, 5]));