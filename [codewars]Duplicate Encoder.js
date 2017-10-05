function duplicateEncode(word){ 
  var obj = word.toLowerCase().split('').reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  return  word.toLowerCase().split('').map(letter=> obj[letter]>1 ? ')' : '(').join('');
}

console.log(duplicateEncode("Receder"));// "))()())"

/*
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}
*/