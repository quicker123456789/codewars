function productFib(prod){
  var result = [], mult = true;
  
  for(var i = 0; i<Number.MAX_VALUE; i++){
    if (prod == fib(i) * fib(i+1)){
      result.push(fib(i), fib(i+1), mult);
      break;
    } else if (prod < fib(i) * fib(i+1) && prod>fib(i)*fib(i-1)) {
        result.push(fib(i), fib(i+1), !mult);
        break;
    }
  }
  return result;
}

function fib(n){
  var PHI = (1 + Math.sqrt(5)) / 2;
  
  return Math.round(Math.pow(PHI, n) / Math.sqrt(5));
}

/*
function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}
*/

alert(productFib(4895)); // [55, 89, true]
alert(productFib(5895)); // [89, 144, false]