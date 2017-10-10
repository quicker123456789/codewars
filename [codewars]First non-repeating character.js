function firstNonRepeatingLetter(str) {
  var a = str.toLowerCase().split('');
  return a.map((letter, i)=>a.indexOf(letter)==a.lastIndexOf(letter) ? str[i] : '').join('')[0] || '';
}

console.log(firstNonRepeatingLetter('sTreSS'));//T
/*
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

function firstNonRepeatingLetter(s) {
  var t=s.toLowerCase();
  for (var x=0;x<t.length;x++)
    if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
      return s[x];
  return "";
}
*/