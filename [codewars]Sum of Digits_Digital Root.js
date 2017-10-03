function digital_root(num) {
  if(String(num).length == 1) return num;
  else return digital_root(String(num).split('').reduce((sum, n)=> sum+parseInt(n), 0));
}
/*
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
*/