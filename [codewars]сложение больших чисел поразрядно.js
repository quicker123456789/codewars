
function add(arrA, arrB, result, carry, base){  //сложение в столбик по разрядам
  if (arrA.length == 0 && arrB.length == 0 && !carry) return result;
  
  //сложение младших разрядов
  var left = parseInt(arrA.pop() || '0', 10);
  var right = parseInt(arrB.pop() || '0', 10);
  var sum = left + right + (carry || 0);
  
  return add(arrA, arrB, sum % base + (result || ''), Math.floor(sum/base), base);
}

function sumStrings(a,b) { 
  return add(a.toString().split(''), b.toString().split(''), '', '' ,10).replace(/^0+/g,'');
}

/*
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}

function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}

*/

alert(sumStrings('712569312664357328695151392', '8100824045303269669937')); //'712577413488402631964821329'
alert(sumStrings('00001', '00002'));