function Node(){  
  this.next = null;
  this.getNext = function(){
    return this.next;
  };
  this.setNext = function (node) {
    this.next = node;
  };
}

function loop_size(node){
  var size = 0, nxt = node.getNext();
  while (node != nxt){    
    node = node.getNext();
    nxt = nxt.getNext().getNext();
  }
  size++;
  node = node.getNext();
  while(node != nxt){
    size++;
    node = node.getNext();
  }
  return size;
}
/*
function loop_size(node){
  var turtle = node;
  var rabbit = node;
  
  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  }
  while (turtle != rabbit);
  
  // The turtle and rabbit are now on the same node,
  // but we know that node is in a loop.  So now we
  // keep the turtle motionless and move the rabbit
  // until it finds the turtle again, counting the
  // nodes the rabbit visits in the mean time.
  var count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  }
  while (turtle != rabbit);

  // voila
  return count;
}
//---------------------------------------------------------------
function loop_size(node){
  var nodes = [], n = node;
  
  while (nodes.indexOf(n) === -1) {
    nodes.push(n);
    n = n.getNext();
  }
  
  return nodes.length - nodes.indexOf(n);
}
//---------------------------------------------------------------
function loop_size(node) {
  var list = [node];
  while (list.indexOf(node.getNext()) === -1) {
    node = node.getNext();
    list.push(node);
  }
  return list.length - list.indexOf(node.getNext());
}
*/