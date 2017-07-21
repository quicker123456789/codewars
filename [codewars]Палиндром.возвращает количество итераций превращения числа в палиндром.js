function isPalindrome(str) {
 	str = str.replace(' ', '');
 	var begin = 0, end = str.length - 1;
 	while (begin < end)
 		return (str.charAt(begin++) == str.charAt(end--)); 
 	/*
	for (var i = 0; i < str.length; i++) {
	    return str[i] === str[str.length - 1 - i];
	}     
 	*/		
}
function isPalindromic(n) {
  if (n < 0) throw 'isPalindromic only works for positive numbers.';
  if (Math.floor(n / 10) === 0) return true; // Single digit numbers are palindromic.
  if (n % 10 === 0) return false; // n > 0, without leading 0s cannot be palindromic if ending in 0.
  return reverseNum(n) === n;
}

function reverseNum(n) {
  var r = 0;
  while (n) {					//121..12..  1
    r *= 10;					//  0..10..120
    r += n % 10;				//  1..12..121
    n = Math.floor(n / 10);		// 12.. 1..  0
  }
  return r;						//121
}

/*--------------------------------------------------------------------------*/

var palindromeChainLength = function(n) {
 var count = 0;
 var nReverse = +n.toString().split('').reverse().join(''); 
  
 if((n^0) !== n) return; //проверка на целостность
  
  while ( n != nReverse ){
    n += nReverse;
    count++;
    nReverse = +n.toString().split('').reverse().join(''); 
  }
  
  return count;
};

/*
var palindromeChainLength = function(n) {
  var r = 1 * n.toString().split('').reverse().join('');
  return n - r && 1 + palindromeChainLength(r + n);
};
*/

alert (palindromeChainLength(87)); // 4, т.к 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884