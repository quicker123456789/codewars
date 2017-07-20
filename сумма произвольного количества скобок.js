function add(a){
  var current = a;

  function sum(b){
    current += b;
    return sum;
  }

  sum.toString = function(){
    return current;
  };
   
  return sum;
}

/*
function add(n) {
  var next = add.bind(n += this | 0);
 
  next.valueOf = function() { 
    return n; 
  };

  return next;
}
*/
   
alert (add(2)(3)(-4)); //1