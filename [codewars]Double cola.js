function whoIsNext(queue, n){ 
  /*var tmp, i=0;
	//if (n<=queue.length) return queue[n-1];
  while (i<n){
    tmp = queue.shift();
  	queue.push(tmp,tmp);
    i++;
  }
  return queue;//[queue.length-1];*/
  var base = queue.length;  
  while(n>=base){
  	n -= base;
    base*=2;
  }
  return queue[(Math.ceil(queue.length * n / base) - 1)];//не работает, если < 0
}

/*
function whoIsNext(names, r){
  var numOfGeeks = names.length;
  var loga = Math.log((r/numOfGeeks)+1) / Math.log(2);
  var completeCycles = Math.floor(loga)
  var fullCycleColas = (Math.pow(2,completeCycles)-1) * numOfGeeks;
  var currCycleSize  =  Math.pow(2,completeCycles)    * numOfGeeks;
  var geekCode = Math.ceil((r - fullCycleColas)/currCycleSize * numOfGeeks);
  
  return names[geekCode-1]
}

function whoIsNext(names, n){
  x=names.length;
  i=1;  
  while (n > x){
    n -= x;
    x *= 2;
    i *= 2;
  }
  return (names[parseInt((n - 1)/i)]);   
}

function whoIsNext(names, r){
  var i = 0;
  function findPos(r, i) {
    i = i || names.length;
    if (r < i){return Math.floor(r * names.length / i);}
    return findPos(r - i, 2 * i);
  }
  return names[findPos(r - 1)];
}
*/