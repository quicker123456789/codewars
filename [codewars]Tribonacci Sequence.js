function tribonacci(signature,n){ 
  return n==0 ? [] : n==1  ? signature.slice(0,1) : (function (){
    while (signature.length < n){
      var f = signature.slice(-3).reduce((sum, el)=> sum+el);
      signature.push(f);
    }
    return signature;
  })();
}

console.log(tribonacci([1,1,1],1)); // [1,1,1,3,5,9,17,31,57,105]
/*
function tribonacci(s,n){
  var arr = [];
  for(var i=0; i<n; i++) {
    arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
  }
  return arr;
}
*/