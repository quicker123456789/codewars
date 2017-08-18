function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  var obj = {};
  this.words.forEach(item => {
    obj[levenshteinDistance(item, term)] = item;    
  });
  return obj[Math.min(...Object.keys(obj))];
};

function levenshteinDistance(string1, string2){
  var diff, m = [];
  for (var i = 0; i <= string1.length; i++){
    m[i] = [];
    for (var j = 0; j <= string2.length; j++){
      m[i][0]=i;
      m[0][j]=j; 
    }
  }  
  for (i = 1; i <= string1.length; i++){
    for (j = 1; j <= string2.length; j++){
      diff = string1[i-1] == string2[j-1] ? 0 : 1;
      m[i][j] = Math.min(Math.min(m[i][j-1] + 1, m[i-1][j] + 1), m[i-1][j-1] + diff);
    }
  }
  return m[string1.length][string2.length];
}

fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
console.log(fruits.findMostSimilar('strawbery')); // must return "strawberry"
console.log(fruits.findMostSimilar('berry')); // must return "cherry"
/*
function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  var levenshtein = function(word) {
    if (word === term) {return 0}
    if (term.length === 0) {return word.length}
    if (word.length === 0) {return term.length}
    var v0 = new Array(term.length + 1);
    var v1 = new Array(term.length + 1);
    for (var i=0; i<v0.length; i++) { v0[i] = i; }
    for (var i=0; i<word.length; i++) {
      v1[0] = i+1;
      for (var j=0; j<term.length; j++) {
        var cost = word.charAt(i) === term.charAt(j) ? 0 : 1;
        v1[j+1] = Math.min(v1[j]+1, v0[j+1]+1, v0[j]+cost);
      }
      var tmp = v0;
      v0 = v1;
      v1 = tmp;
    }
    return v0[term.length];
  }
  return this.words.sort(function(a,b){return levenshtein(a)-levenshtein(b)})[0];
}
//----------------------------------------------------------------------------
function Dictionary (words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
  var mem = {}, levenshtein = function (term1, term2) {
    var key = term1 + ',' + term2, l1 = term1.length, l2 = term2.length, cost;
    if (l1 === 0) return l2;
    else if (l2 === 0) return l1;
    else if (mem.hasOwnProperty(key)) return mem[key];
    else {
      cost = term1.charAt(l1 - 1) === term2.charAt(l2 - 1) ? 0 : 1;
      mem[key] = Math.min(
        levenshtein(term1.slice(0, -1), term2) + 1,
        levenshtein(term1, term2.slice(0, -1)) + 1,
        levenshtein(term1.slice(0, -1), term2.slice(0, -1)) + cost
      );
      return mem[key];
    }
  };
  
  return this.words.map(function(word) {
    return [word, levenshtein(term, word)];
  }).sort(function (a, b) {
    return a[1] - b[1];
  })[0][0];
};
*/