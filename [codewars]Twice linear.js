function dblLinear(n){ 
  /*var u = [1], i=0;
  while(i<n){
    u.push(2*u[i]+1, 3*u[i]+1);
    u = u.sort((a,b)=>a-b).filter((n,idx)=>n!=u[idx+1]);
    i++;
  }
  return u[n];*/
  var u = [1];
  for(var i = 0; i < n * 5; i++){
      u.push(u[i] * 2 + 1, u[i] * 3 + 1);      
  }
  return u.sort((a,b)=>a-b).filter((num,idx)=>num!=u[idx+1])[n];
}

console.log(dblLinear(100));//447
/*
function dblLinear(n) {
  var ai = 0, bi = 0, eq = 0;
  var sequence = [1];
  while (ai + bi < n + eq) {
    var y = 2 * sequence[ai] + 1;
    var z = 3 * sequence[bi] + 1;
    if (y < z) { sequence.push(y); ai++; }
    else if (y > z) { sequence.push(z); bi++; }
    else { sequence.push(y); ai++; bi++; eq++; }
  }
  return sequence.pop();
}


*/