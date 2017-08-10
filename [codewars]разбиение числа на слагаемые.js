'use strict';

function multiple(arr){
  var result = 1;
  arr.forEach(function(item){
    result *= item;
  });
  return result;
}
/*----------------------------------------------------------------------
// медленно работает для больших чисел из-за рекурсии

var array = {}, subarr = [];

function partitions(n){
  if (n == 0) array[multiple(subarr)] = true;// array[subarr] = true;   // [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]]
  else {
    for (var i = n; i > 0; i--) {
      if (subarr.length == 0 || subarr[subarr.length - 1] >= i) {
          subarr.push(i);
          partitions(n-i);
          subarr.pop(subarr.length - 1);
      }
    }
  }
  return Object.keys(array);
}*/

function makeArray(arr, l){
  var result = [];
  for(var j = 0; j < l; j++)
    result.push(arr[j]);
  return result;  
}

function next(arr, l){  // поиск следующей цифры, т.е 5и0 4и1 3и2 3и1и1...
  var i = l-1;
  var sum=0;
 
  do {
    sum += arr[i--];
  } while(i>0 && arr[i-1] <= arr[i]);

  arr[i]++;
  l=i+sum;
  
  for (var k=i+1; k<l; k++)
    arr[k] = 1;

  return l;
}

function partitions(n){  //создание массивов [5,0], [4,1], [3,2], [3,1,1]
  var array = {}, subarr = [], arr = [], l = n;
  for(var ind = 0; ind < n; ind++) arr[ind] = 1;
  
  subarr = makeArray(arr, n);
  array[multiple(subarr)] = true;
  
  do {
    l = next(arr, l);
    subarr = makeArray(arr, l);
    array[multiple(subarr)] = true;
  } while (l>1);
  
  
  return Object.keys(array);
}

//alert(partitions(5)); // [1,2,3,4,5,6]

function part(n) {
  var prod = [], range = 0, average = 0, median = 0;
  if (n >= 1 && n <= 50) prod = partitions(n);
  
  range = prod[prod.length - 1] - prod[0];
  for (var j = 0; j < prod.length; j++)
    average += +prod[j];
  
  average /= prod.length;
  if ((prod.length)%2 == 0) median = (+prod[prod.length/2] + +prod[prod.length/2-1])/2 ;
  else  median = +prod[Math.floor(prod.length/2)];
  
  return "Range: "+ range +" Average: "+ average.toFixed(2) +" Median: "+ median.toFixed(2);
}

/*
function part(n) {
  let r = [1], a = new Array(n).fill(1)
  while(a[0] != n) {
    let m = a.slice(0, -1).reduce((m,n,i)=>(a[m]>n ? i:m), 0)
    ++a[m]; --a[a.length-1]
    a = a.concat(new Array(a.splice(m+1).reduce((s,n)=>s+n, 0)).fill(1))
    r.push(a.reduce((p,n)=>p*n, 1))
  }
  r.sort((a,b)=>(a-b))
  let l
  r = r.filter(n => { let r=(n!=l); l=n; return r })
  return "Range: " + (r[r.length-1]-r[0]) + " Average: " + (r.reduce((s,n)=>s+n, 0)/r.length).toFixed(2)
    + " Median: " + (r.length%2 ? r[(r.length-1)/2] : (r[r.length/2-1]+r[r.length/2])/2).toFixed(2)
}
*/

alert (part(5));  // "Range: 5 Average: 3.50 Median: 3.50"
