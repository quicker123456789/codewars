
pascalsTriangle = function(depth){
  var result = [];
  for(i = 0; i < depth; i++){
   // C(n, k) = n! / (k! * (n-k)!)
    var binom = 1;  //C(n, 0) = n! / (0! * n!) = 1.
    result.push(binom);
    for(j = 1; j <= i; j++){
      binom *= (i - j + 1);  //C(n, k) / C(n, k-1) = (n-k+1)/k
      binom = Math.floor(binom / j);
      result.push(binom);
    }
  }
  return result;
};

/*
function fact(n) {
  if(n<2) return 1;
  return n * fact(n - 1);
}

function pascalsTriangle(n) {
 var r = [];
 for(var i = 0; i < n; i++)
   for(var e = 0; e <= i; e++)
     r.push(Math.round(fact(i)/(fact(e)*fact(i - e))));
 return r;
}
-----------------------------------------------------------------------
function pascalsTriangle(n) {
    for (var i = 0, ret = []; i < n; i++) for (var j = 0; j <= i; j++) ret.push(row(i, j));
    return ret;
}
function row(n, k) { return (k == 0 || n == k) ?1 :row(n - 1, k - 1) + row(n - 1, k); }
-----------------------------------------------------------------------
function pascalsTriangle(n) {
  var pascal = [];
  var idx = 0;
  
  for ( var i = 0; i < n; i++ ) {
    idx = pascal.length - i;
    for ( var j = 0; j < i+1; j++ ) {
      if ( j === 0 || j === i ) {
        pascal.push(1);
      } else {
        pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
      }
    }
  }
  
  return pascal;
}
-----------------------------------------------------------------------
function pascalsTriangle(n) {
  if (n === 1) {
    return [1];
  }
  var prev = pascalsTriangle(n - 1), len = prev.length;
  prev.push(1);
  for (var i = len - n + 1; i < len - 1; i ++) {
    prev.push(prev[i] + prev[i + 1]);
  }
  prev.push(1);
  return prev;
}
*/

alert(pascalsTriangle(4)); //[1,1,1,1,2,1,1,3,3,1]