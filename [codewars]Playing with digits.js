function digPow(n, p) {
  var k = String(n).split('').reduce((sum, d, i) => sum + Math.pow(+d, p+i),0) / n; 
  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(92, 1)); // 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

/*
function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}
*/