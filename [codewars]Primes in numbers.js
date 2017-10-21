function primeFactors(num){
  var primes={},i=2,s="";
  while(i<=num){
    if(num%i==0){
      primes[i] = primes[i]+1 || 1;
      num/=i;
    }else i++;
  }
  for(key in primes){    
    s += '('+ key+'**'+primes[key]+')';
  }
  return s.replace(/\*\*1/g, '');
}

console.log(primeFactors(86240));

/*
function primeFactors(n){
  for (var i=2, res="", f; i <= n; i++) {
    f=0;
    while (n%i == 0) { f++; n/=i }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}

function primeFactors(n){
    for(var s = '', d = 2;n>1;d++) {
        for (var k = 0;n%d == 0;k++, n/=d);
        s += k ? (k==1 ? `(${d})` : `(${d}**${k})`) : '';
    }
return s
}
*/
