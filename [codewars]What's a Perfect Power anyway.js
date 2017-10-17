function isPP(num){  
  var i=2, powers=[], p=0, res=num, digit=1;
  
  var nod = (a,b)=> b==0 ? a : nod(b, a%b);
  
  while(i<=num){
    if(num%i==0){      
      p++;      
      num/=i;
      
    }
    else {
      if(p!=0) powers.push(p);
      i++;
      p=0;
    }    
  }powers.push(p);
  
  var power = powers.reduce((result, item)=>result = nod(result, item), 0);
  
  return power==1 ? null : [Math.round(Math.pow(res, 1/power)), power];
}

console.clear();
console.log(isPP(976562500000));
console.log(isPP(14520));
console.log(isPP(343));
console.log(isPP(144));

/*
var isPP = function(n){
  for (var i = 2; i <= n/2; i++) {
    for (var j = 2; j <= n/2; j++) {
      var current = Math.pow(i,j);
      if (current == n)
        return [i, j];
      if (current > n)
        break;
    }
  }
  return null;
}

function isPP(n) {
  for (var m = 2; m * m <= n; ++ m)
    for (var k = 2; Math.pow(m, k) <= n; ++ k)
      if (Math.pow(m, k) == n) return [m, k];
  return null;
}
*/