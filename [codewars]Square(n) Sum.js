function squareSum(numbers){
  return numbers.map(n => Math.pow(n,2)).reduce((sum, n)=> sum + n);
}

/*
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
*/