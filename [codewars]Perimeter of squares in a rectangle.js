//сумма периметров квадратов со сторонами = числам фибоначчи

var cache = [];
function fib(n){  
  if (n==0 || n==1) return n;  
  return cache[n] ? cache[n] : cache[n] = fib(n-1)+fib(n-2);
}

function perimeter(m){
  return 4*(fib(m+3)-1);
}

/*
function perimeter(n) {
  let arr = [1, 1];
  for(let i = 0; i < n - 1; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return 4 * arr.reduce((sum, num) => sum + num, 0);
}
*/