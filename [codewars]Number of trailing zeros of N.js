function zeros(n){
  var count = 0;
  for (var i = 5; n/i>=1; i*=5) count += n/i;
  return Math.floor(count);
}

console.log(zeros(4));//0
/*
function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}

function zeros (n) {
  n = ~~(n/5);
  return  n + (n<5 ? 0 : zeros(n));
}
*/