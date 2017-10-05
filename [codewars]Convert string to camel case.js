function toCamelCase(str) {
  if (str.length == 0) return '';
  var result = str.split(/[-_]/g).map((word)=>word[0].toUpperCase()+word.slice(1)).join('');
  return str[0] + result.slice(1);
}

console.log(toCamelCase("the-stealth-warrior"));

/*
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

function toCamelCase(str){
  return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}
*/