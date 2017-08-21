var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target){    
  //source -> 10
  var ten = 0, scc = source.length, tcc = target.length, result='';
  for(var i = 0; i < input.length; i++){
    ten += (source.indexOf(input.substr(input.length-1-i,1)))*Math.pow(scc, i);    
  }  
  //10 -> target
  if(ten === 0) return target[0];
  while(ten > 0){    
    result += target[ten%tcc];
    ten = Math.floor(ten/tcc);
  }
  return result.split("").reverse().join("");
}

console.log(convert("0", Alphabet.DECIMAL, Alphabet.ALPHA)); //a
//BD(26) -> (10) = 3*26^0 + 1*26^1 = 29
//30(10) -> (26) = (30%26 + 30%(30/26)).reverse() = BE

/*
function convert(input, source, target) {
  var inBase = source.length, len = input.length;
  var value = input.split('')
    .reduce(function(p,v,i){return p+source.indexOf(v)*Math.pow(inBase,len-i-1)},0);
  return toBase(value,target);
}

function toBase(value, target){
  var base = target.length;
  if(value<base) return ''+target.charAt(value);
  return toBase(Math.floor(value/base),target) + target.charAt(value%base);
}
//------------------------------------------------------------
function convert(input, source, target) {
  let s=0;  let str='';
  for (let i=0; i<input.length; i++) {
    s=s*source.length+source.indexOf(input[i]);
  }
  while (s>0) {
    str=target[s%target.length]+str;
    s=Math.floor(s/target.length);
  }  
  return str ? str : target[0];
}
//------------------------------------------------------------
function convert(input, source, target) {
  var t = '', n = input.split('').reduce((n,v)=>n * source.length + source.indexOf(v), 0);
  do { t = target[n % target.length] + t;
       n = Math.floor(n / target.length); 
     } while (n > 0)
  return t;
}
*/