function findOdd(A) {
  var res = {};
  A.forEach(elem => res[elem] = res[elem] + 1 || 1);
  for(var key in res) if(res[key]&1) return +key;
}

/*
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
*/