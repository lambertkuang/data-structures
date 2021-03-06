var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = list.tail = Node(value);
      //list.tail.next = Node(value);
      //list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    if (list.head !== null) {
        var temp = list.head.value;
        list.head = list.head.next;
        return temp;
    }
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode !== null){
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
  //we finished
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
