
function largest(digits){
  if (String(digits).length < 6) return digits;
  
  var max = 0, str = String(digits), parovoz;
  
  for(var i = 0; i < str.length - 4; i++){
    parovoz = +(str[i]+str[i+1]+str[i+2]+str[i+3]+str[i+4]);
    if(parovoz > max) max = parovoz;
  }
  return max;
}

/*
function solution(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}

function solution(digits){
  var r = 0;
  for (i = 0; i < digits.length - 4; i++) {
    r = Math.max(r, parseInt(digits.substr(i,5),10));
  }
  return r;
}
*/

alert(largest(1236549879874645)); //98798

/*
parovoz = это .match(/.{1,5}/g) или substr(0, 5)
*/
