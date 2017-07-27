
decodeMorse = function(morseCode){
  //var alphabet = {'a': '.-','b': '-...','c': '-.-.','d': '-..','e': '.','f': '..-.','g': '--.','h': '....','i': '..','j': '.---','k': '-.-','l': '.-..','m': '--','n': '-.','o': '---','p': '.--.','q': '--.-','r': '.-.','s': '...','t': '-','u': '..-','v': '...-','w': '.--','x': '-..-','y': '-.--','z': '--..','1': '.----','2': '..---','3': '...--','4': '....-','5': '.....','6': '-....','7': '--...','8': '---..','9': '----.','0': '-----','.': '.-.-.-',',': '--..--','?': '..--..','\'': '.----.','!': '-.-.--','/': '-..-.','(': '-.--.',')': '-.--.-','&': '.-...',':': '---...',';': '-.-.-.','=': '-...-','+': '.-.-.','-': '-....-','_': '..--.-','\"': '.-..-.','$': '...-..-','@': '.--.-.'};
  var alphabet = {'.-': 'a','-...': 'b','-.-.': 'c','-..': 'd','.': 'e','..-.': 'f','--.': 'g','....': 'h','..': 'i','.---': 'j','-.-': 'k','.-..': 'l','--': 'm','-.': 'n','---': 'o','.--.': 'p','--.-': 'q','.-.': 'r','...': 's','-': 't','..-': 'u','...-': 'v','.--': 'w','-..-': 'x','-.--': 'y','--..': 'z','.----.----': '1','..---': '2','...--': '3','....-': '4','.....': '5','-....': '6','--...': '7','---..': '8','----.': '9','-----': '0','.-.-.-':'.','--..--': ',','..--..': '?','-.-.--': '!','...---...':'sos'};
  var arr = morseCode.trim().split(' '), result = '';
  for(var letter of arr){
  	letter ? result += alphabet[letter] : result += ' ';
  } 
  
  return result.replace(/\s\s+/g, ' ').toUpperCase();
};

/*
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

var decodeMorse = function(morseCode){
    var a = morseCode.trim().split("   ").map(function(word){
      x = word.split(" ").map(function(letter){
        return MORSE_CODE[letter]
      }).join("")
      return x
    }).join(" ")
    return a
}

decodeMorse = function(morseCode){
  return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
}
*/

alert(decodeMorse('	...---...   .... . -.--   .--- ..- -.. .	'));//'SOS HEY JUDE'
