var str = '0000001100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011000';
//str = str.replace(/1{3,6}/g, '-').replace(/0{3,6}/g, ' ').replace(/1{1,2}/g, '.').replace(/0{1,2}/g, '');


function decodeBits(bits){
  var result = bits.slice(bits.indexOf('1'), bits.lastIndexOf('1')+1);  // удаляет '0' в начале и в конце
  
  //timeUnit - единица времени, т.к ввод автоматизирован она одинакова в течении всего ввода
   if (result.indexOf("0") % 3 === 0 && (result.slice(result.indexOf("0")).slice(result.indexOf("0")).indexOf("0") > 0))
    timeUnit = result.slice(result.indexOf("0")).slice(result.indexOf("0")).indexOf("0");
  else if (result.indexOf("0") % 3 === 0) timeUnit = result.slice(result.indexOf("0")).indexOf("1");
  else if (result.indexOf('0') >= 0) timeUnit = result.indexOf('0');
  else timeUnit = result.length; //все биты - единицы
  
  
  return result.split("0000000".repeat(timeUnit)).map(function(word){
      return word.split("000".repeat(timeUnit)).map(function(char){
        return char.split("0".repeat(timeUnit)).map(function(bit){
          return (bit.length/timeUnit === 1 ? '.' : '-');
        }).join("");
      }).join(" ");
    }).join("  ");
}

decodeMorse = function(morseCode){
  //var MORSE_CODE = {'a': '.-','b': '-...','c': '-.-.','d': '-..','e': '.','f': '..-.','g': '--.','h': '....','i': '..','j': '.---','k': '-.-','l': '.-..','m': '--','n': '-.','o': '---','p': '.--.','q': '--.-','r': '.-.','s': '...','t': '-','u': '..-','v': '...-','w': '.--','x': '-..-','y': '-.--','z': '--..','1': '.----','2': '..---','3': '...--','4': '....-','5': '.....','6': '-....','7': '--...','8': '---..','9': '----.','0': '-----','.': '.-.-.-',',': '--..--','?': '..--..','\'': '.----.','!': '-.-.--','/': '-..-.','(': '-.--.',')': '-.--.-','&': '.-...',':': '---...',';': '-.-.-.','=': '-...-','+': '.-.-.','-': '-....-','_': '..--.-','\"': '.-..-.','$': '...-..-','@': '.--.-.'};
  var alphabet = {'.-': 'a','-...': 'b','-.-.': 'c','-..': 'd','.': 'e','..-.': 'f','--.': 'g','....': 'h','..': 'i','.---': 'j','-.-': 'k','.-..': 'l','--': 'm','-.': 'n','---': 'o','.--.': 'p','--.-': 'q','.-.': 'r','...': 's','-': 't','..-': 'u','...-': 'v','.--': 'w','-..-': 'x','-.--': 'y','--..': 'z','.----.----': '1','..---': '2','...--': '3','....-': '4','.....': '5','-....': '6','--...': '7','---..': '8','----.': '9','-----': '0','.-.-.-':'.','--..--': ',','..--..': '?','-.-.--': '!','...---...':'sos'};
  var arr = morseCode.trim().split(' '), result = '';
  for(var letter of arr){
  	letter ? result += alphabet[letter] : result += ' ';
  } 
  
  return result.replace(/\s+/g, ' ').toUpperCase();
};

/*
function decodeBits(bits) {
  // Trim zeros
  bits = bits.replace(/(^0+|0+$)/g, '')
  
  // Find transmission rate
  var rate = Math.min.apply(null, bits.match(/0+|1+/g).map(function(b) { return b.length }))
  
  // Convert to morse code
  bits = bits
    .replace(new RegExp('(?:111){' + rate + '}(?:0{' + rate + '}|$)', 'g'), '-')
    .replace(new RegExp('1{' + rate + '}(?:0{' + rate + '}|$)', 'g'), '.')
    .replace(new RegExp('(?:000000){' + rate + '}', 'g'), '   ')
    .replace(new RegExp('(?:00){' + rate + '}', 'g'), ' ')
  
  return bits
}

function decodeMorse(message) {
  return message
    .replace(/   /g, ' _ ')
    .split(' ')
    .map(function(letter) { return letter === '_' ? ' ' : MORSE_CODE[letter] })
    .join('')
}
s---------------------------------------------------------------------------------------------------
var decodeBits = function (bits) {
  var bits_ = bits.replace(/^0+|0+$/g, '');
  var unit = bits_.match(/0+|1+/g).sort(function (a, b) { return a.length - b.length; })[0].length;
  var regex = new RegExp('(?:1{3}|1{1}|0{7}|0{3}|0{1})'.replace(/\{(\d)\}/g, function (_, n) {
    return '{' + parseInt(n, 10) * unit + '}';
  }), 'g');
  return bits_.replace(regex, function (m) { return {
    '111': '-',
    '1': '.',
    '0000000': '   ',
    '000': ' ',
    '0': ''
  }[m.substr(0, m.length / unit)]; });
};

var decodeMorse = function (morseCode) {
  return morseCode.trim().split(/\s{3}/).map(function (word) {
    return word.split(/\s/).map(function (char) { return MORSE_CODE[char]; }).join('');
  }).join(' ');
};
*/

alert(decodeMorse(decodeBits(str))); // HEY JUDE
//alert(decodeMorse('	...---...   .... . -.--   .--- ..- -.. .	'));//'SOS HEY JUDE'
alert(decodeBits(str));