
function arabToRoman(num){ 
  var arab = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var roman = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var rom = '', size = arab.length - 1;
  
  while(num > 0){
    if(num >= arab[size]){
      rom += roman[size];
      num -= arab[size];
    }else size--;
  }
  
  return rom;
}

/*
function solution(number){
  // convert the number to a roman numeral
var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

var ans = '';
while(number>0){
    for(a in roman){ 
        if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
            
    }
}
return ans;
}
*/

alert(arabToRoman(2008));