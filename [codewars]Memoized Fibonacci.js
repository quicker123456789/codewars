var fibonacci = function(n) {
var cache = {0:0, 1:1};
  return (n in cache)? cache[n] : cache[n] = fibonacci(n-1) + fibonacci(n-2);
}

/*
var cache = []
var fibonacci = function(n) {
    if(n==0 || n == 1)
        return n;
    if (cache[n]) return cache[n];
    return cache[n] = fibonacci(n-1) + fibonacci(n-2);
}
*/