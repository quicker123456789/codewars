//m=1000 d=500 c=100 l=50 x=10 v=5 i=1

function romanToInt(romanNum){
	var arr = romanNum.split('');
  arr = arr.map(function(digit){
  	switch(digit.toLowerCase()){
      case 'm': return 1000;
      case 'd': return 500;
      case 'c': return 100;
      case 'l': return 50;
      case 'x': return 10;
      case 'v': return 5;
      case 'i': return 1;    
     }
  });
  
  var amount = arr[arr.length-1];
  // 1000 100 500 50 10 5 1
  // 1 5
	for(var i = arr.length-1; i > 0; i--){  	
  	if (arr[i] <= arr[i-1])
    	amount += arr[i-1];
    else
    	amount -= arr[i-1];
	}
  return amount;
}

/*
function solution(roman){
    var rom ={ "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    return roman.split('').reverse().reduce(
        function(dec,c,i,rr){ 
            c=rom[c];
            i=rom[rr[i-1]]||0; 
            return dec + (i<=c? c: -c) }
        ,0
    )
}


*/

alert(romanToInt('MMVIII')); // 1466 