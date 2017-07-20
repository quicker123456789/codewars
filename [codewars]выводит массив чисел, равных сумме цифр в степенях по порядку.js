
function sumDigPow(a, b) {
  var result = [];
  for (var i = a; i < b; i++){
    if (isEureka(i)){
      result.push(i);
    }
  }  
  return result;
}

function isEureka(num){
  var sum = 0;
  for(var i=0; i<num.toString().length; i++){
   sum += Math.pow(num.toString()[i], i+1);   
  }
  return (sum == num);
}

/*
function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j+1);  
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}

function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}
*/

alert(sumDigPow(50, 150)); // [89, 135]