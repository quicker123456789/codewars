function gap(g, m, n){
/*-------------------------------------works slowly-----------------
  var primes=[], div=0;
  label:for(var i=m; i<=n; i++){
     for(var j=1; j<=i; j++){
       if (i%j==0) div++;
       if (div>2) {
	     div=0;
		 continue label;
       }
     }
     if(div==2){
       //primes.push(i);
       if(i-primes.shift() == g) return [i-g, i];
       else primes.push(i);
     }
     div=0;
   }
   
  //var result = primes.filter((item,i)=>primes.find((p,k)=>(p-item==g)&&(k-1==i) ))[0] || undefined;
  //return result ? [result, result+g] : null;
  return null;*/
//-------------------------------------works faster------------------
/*  var d,pr=[];
  for(var i=m; i<=n;i++){
    if(i%10==3 || i%10==9 || i%10==7 || i%10==1){
      d=2;
      while(i%d!=0) d++;
      if(i==d){
        if(i-pr.shift() == g) return [i-g, i];
        else pr.push(i);
      } 
    }
  }
  return null;*/
//-----------------------------------super fast----------------------  
  function isPrime(n) {
    for (var i = 2; i*i < n; i++) {
      if ( n % i === 0) return false;
    }
    return true;
  }  
  var pr=[];
  for(var i=m; i<=n;i++){
    if(isPrime(i)){
      if(i-pr.shift() == g) return [i-g, i];
      else pr.push(i);
    }
  }
  return null;
}

//console.clear();
console.log(gap(4, 130, 200));//[163, 167]
console.log(gap(6,100,110));//null
console.log(gap(8,300,400));//[359, 367]

/*
function gap(g, m, n) {
    var lastPrime = 0;
    var isPrime = function(x) { 
      for (var i=2; i*i<=x; i++) { if (x % i == 0) return false; } return true;
    }
    
    for(var i = m; i <= n; i++)
        if(isPrime(i)) {
            if(i - lastPrime == g) return [lastPrime, i];
            else lastPrime = i;
        }
      
    return null;
}


*/