/* очень долго работает, если число большое
function permutations(string) {
  if (string.length < 2) return string; // This is our break condition

  var permuts = []; // This array will hold our permutations

  for (var i=0; i<string.length; i++) {
      var char = string[i];

      // Cause we don't want any duplicates:
      if (string.indexOf(char) != i) // if char was used already
          continue;           // skip it this time

      var remainingString = string.slice(0,i) + string.slice(i+1,string.length);

      for (var subPermutation of permutations(remainingString))
          permuts.push(char + subPermutation); // i-буква + остальные перемешанные

  }
  return permuts;
}

function nextBigger(num) {
	for (var next of permutations(num.toString()).sort())
  	if (+next > num){
    	return +next;    
    }
  return -1;
}*/

function nextBigger(n) {
  var digits = String(n).split('');
  var pivot = -1;
  
  for (var j = digits.length - 1; j > 0; j--) {
    if (+digits[j] > +digits[j-1]){
      pivot = j-1;
      break;
     }   
  }
  if (pivot == -1) return -1;
  
  var right = digits.splice(pivot);
  var pivotValue = right.splice(0,1)[0];
  var tmp, tmpIndex;
  
  for (var i = 0; i < right.length; i++){ 
    if(right[i] > pivotValue){        
      if (!tmp || tmp > right[i]){
        tmp = right[i];    // the smallest of the greatest than pivotValue
        tmpIndex = i;
      }
    }
  }
//  if (!tmpIndex) return -1;
  
  right.splice(tmpIndex, 1);
  right.push(pivotValue);
  right = right.sort();
  
  var result = +digits.concat(tmp).concat(right).join('');
  if (result < n) return -1;
  
  return result;
}
/*
function nextBigger(n){
  var arr = n.toString().split("").reverse();
  var i = arr.findIndex((d, _i) => d < arr[_i-1]);
  if (i === -1) { return -1; }
  var subarr = arr.slice(0, i);
  var j = subarr.findIndex((d) => d > arr[i]);
  subarr.splice(j, 1, arr[i]);
  return parseInt(arr.slice(i+1).reverse().concat(arr[j]).concat(subarr).join(""));
}

function nextBigger(n){
  console.log(n);
  var chars = n.toString().split('');
  var i = chars.length-1;
  while(i > 0) {
    if (chars[i]>chars[i-1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length-1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length-1] = suf[i]
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(''));
  console.log("->" +num);
  return num;
}
*/

alert(nextBigger(123456789));//123 |5|7621  ->  123 6 1257