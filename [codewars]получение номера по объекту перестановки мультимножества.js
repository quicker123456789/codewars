//погрешности на очень больших значениях

function multiply(a, b) {  //умножение в столбик
    if (parseInt(a) == 0 || parseInt(b) == 0) {
      return '0';
    }

    a = String(a).split('').reverse();
    b = String(b).split('').reverse();
    var result = [];

    for (var i = 0; a[i] >= 0; i++) {
        for (var j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    }

    for (var i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
}

//console.log(multiply(1234567890123,1234567890123), 1234567890123*1234567890123);

function factorial(n){ 
  //if(n<0) return n;
  //return n==0||n==1 ? 1 : n * factorial(n-1);
  var arr25 = ['1', '1', '2', '6', '24', '120', '720', '5040', '40320', '362880', '3628800', '39916800', '479001600', '6227020800', '87178291200', '1307674368000', '20922789888000', '355687428096000', '6402373705728000', '121645100408832000', '2432902008176640000', '51090942171709440000', '1124000727777607680000', '25852016738884976640000', '620448401733239439360000', '15511210043330985984000000'];
  return arr25[n];
}

function toNum(word){
  var obj = {}, arr = word.split('').sort();
  arr.forEach((letter, ind)=>obj[letter] = obj[letter] || obj[arr[ind-1]]+1 || 1);
  return word.split('').map(letter=>{
    return obj[letter];
  });
}
console.log(toNum('bookkeeper'));


function listPosition(word){
  var numbers = toNum(word); // array  
  var result = 1, fact, multifact=1, sum=0;
  
  for (var i = 0; i < numbers.length; i++){    
    var repeats = {}, tmp=[];
    for (var k = i; k < numbers.length; k++){
      tmp.push(numbers[k]);
    }
    tmp.forEach(num=>repeats[num] = repeats[num] + 1 || 1);
    
    for (var j = i; j < numbers.length; j++){      
      var c = numbers[j];
      if (numbers.indexOf(c) != j) continue;
      multifact *= factorial(repeats[c]);
    }
    
    fact = factorial(numbers.length - i - 1) / multifact;
    
    repeats = {}, tmp = [];
    for (k = i+1; k < numbers.length; k++){
      tmp.push(numbers[k]);
    }
    tmp.forEach(num=>repeats[num] = repeats[num] + 1 || 1);
      
      for (k = 1; k < numbers[i]; k++){      
        if (repeats[k]) sum += repeats[k];
      }
   
   // console.log(fact+' '+ multifact +' '+sum);
    
    result += +multiply(fact, sum);//fact * sum / (numbers.length - i);

    multifact = 1;
    sum = 0;    
    repeats = {}, tmp = [];
  }
  
  return result;
}

console.log(listPosition('bookkeeper')); //10743
console.log(listPosition('abab')); //2

/*
class Anagram {
  constructor(word) {
    this.word = word;
  }
  
  get uniqChars() {
    var chars = this.word.split('').filter((letter, index) => this.word.indexOf(letter,index+1) === -1);
    chars.sort();
    return chars;
  }

  get countByChars() {
    return this.uniqChars.map((letter) => {
      return this.word.replace(new RegExp(`[^${letter}]`, 'g'), '').length;
    });
  }
  
  static factorial(n) {
    if(n <= 1) {
      return 1;
    }
    return n * Anagram.factorial(n - 1);
  }
  
  get nbDiffWords() {
    var numberOfWords = Anagram.factorial(this.word.length);
    var dividers = this.countByChars.map((count) => Anagram.factorial(count));
    dividers.forEach((divider) => { numberOfWords /= divider});
    return numberOfWords;
  }

  getSliceIndexes(letter) {
    var fromIndex = 0;
    var letterIndex = this.uniqChars.indexOf(letter);
    for(var currentLetterIndex = 0; currentLetterIndex < letterIndex; currentLetterIndex++) {
      var currentLetter = this.uniqChars[currentLetterIndex];
      fromIndex += this.getSliceSize(currentLetter);
    }
    var toIndex = fromIndex + this.getSliceSize(letter) - 1;
    return {from: fromIndex, to: toIndex};
  }

  getSliceSize(letter) {
    return (new Anagram(this.word.replace(letter, ''))).nbDiffWords;
  }
  
  get listPosition() {
    var curWord = this.word;
    var slice = this.getSliceIndexes(this.word[0]);
    while(slice.from !== slice.to) {
      curWord = curWord.replace(curWord[0], '');
      var curWordAnagram = new Anagram(curWord);
      var newWordSlice = curWordAnagram.getSliceIndexes(curWord[0]);
      slice.from += newWordSlice.from;
      slice.to = slice.from + newWordSlice.to;
    }
    return slice.from + 1;
  }
}

var listPosition = (word) => (new Anagram(word)).listPosition;
//---------------------------------------------------------------------------------
function listPosition(word) {
    var indexer = {}; // D:3 B:1 A:0 C:2
    var counts = []; // 2 1 1 1

    var lettersCount = 0;
    word.split("").sort().forEach(function(x){
        if ( indexer[x] == undefined ) {
            indexer[x] = lettersCount;
            counts[lettersCount] = 0;
            lettersCount ++;
        }
    });

    var term = 1;
    var sum = term;
    word.split("").reverse().forEach(function(x, i){
        var step = i + 1, idx = indexer[x];
        counts[idx] ++;
        term /= counts[idx];
        for (var j = 0; j < idx; ++j) 
            if (counts[j] != 0) 
                sum += term * counts[j];
        term *= step;
    });
    return sum;
}
//---------------------------------------------------------------------------------
var fact = [1];
while(fact.length<=25) fact.push(fact.length*fact[fact.length-1]);

function listPosition(word) {
  if (word.length==1) return 1;
  var w = word.split('').sort();
  var abc = Array.from(new Set(w));
  var equals = abc.map(x => w.filter(y => x==y).length).reduce((res,i) => res*fact[i], 1);
  return fact[word.length-1] / equals * w.indexOf(word[0]) + listPosition(word.slice(1));
}
//---------------------------------------------------------------------------------
function listPosition(word) {
  var alphabet = {};
  Array.prototype.forEach.call(word, function(letter) {
    alphabet[letter] = 1 + ~~alphabet[letter];
  });
  var position = 0;
  while (word) {
    for (var letter in alphabet) {
      if (alphabet[letter] && letter < word[0]) {
        --alphabet[letter];
        var add = bang(word.length-1);
        for (var l in alphabet)
          add /= bang(alphabet[l]);
        ++alphabet[letter];
        position += add;
      }
    }
    --alphabet[word[0]];
    word = word.slice(1);
  }
  return position + 1;

  function bang(n) {
    return n ? n * bang(n-1) : 1;
  }
}
*/
