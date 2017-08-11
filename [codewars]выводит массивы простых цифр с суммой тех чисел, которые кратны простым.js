function getPrimeFactors(num){
  num < 0 ? num *= -1 : num = num;
  var primeFactors = [];
  var i = 2;
  do {
     if (num % i === 0) {
       if (primeFactors.indexOf(i) == -1) primeFactors.push(i);
       num = num/i;
     }else i++; 
  } while (i <= num); 
  return primeFactors;
}

function sumOfDivided(lst){
  var primeFactors = []; 
  lst.forEach(function(num){
    getPrimeFactors(num).forEach(function(factor){
      if (primeFactors.indexOf(factor) == -1) primeFactors.push(factor);
    });    
  });
   console.log(primeFactors);
  return primeFactors.sort((a,b)=>a-b).map(function(digit){
    sum = 0;
    lst.forEach(n => {      
      n % digit === 0 ? sum += n : sum += 0;
    });    
    return [digit, sum];
  });
}

//console.log(sumOfDivided([12, 15])); //[[2, 12], [3, 27], [5, 15]] 
//console.log(sumOfDivided([15,21,24,30,45])); //[[2, 54], [3, 135], [5, 90], [7, 21]]
//console.log(getPrimeFactors(-29804));

/*
 45  3 5
 30  2 3 5
 24  2 3
 21  3 7
 15  3 5
*/

//------------------------------------------------------------------------------
function sumOfDivided(lst) {
  var max = Math.max(...lst.map(x => Math.abs(x))),
      isPrime = x => {
        for(var i = 2; i*i<=x; i++) if (x%i === 0) return false;
        return true;
      };
  var sums = {};
  for (var i = 2; i<=max; i++) if (isPrime(i)) {
    lst.forEach(x => {
      if (x%i === 0) sums[i] = x + (sums[i]||0);
    });
  }
  return Object.keys(sums).map(i => [+i, sums[i]]);
}
//------------------------------------------------------------------------------ 
function sumOfDivided(lst) {
    if(lst.length == 0) { return []; }
    var m = Math.max.apply(null, lst.map(Math.abs)),
        primes = [],
        marked = Array(m+1);

    for(var i = 2; i <= m; ++i) {
        if(marked[i]) continue;

        var sum = 0, isMul = false;
        lst.forEach(function(n) { if(n % i == 0) { sum += n; isMul = true; } });
        if(isMul) primes.push([i, sum]);

        for(var j = 2*i; j <= m; j += i) {
            marked[j] = true;
        }
    }

    return primes;
}