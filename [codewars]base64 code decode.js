var alphabet64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function fill(char){
  var bitstr = char.charCodeAt(0).toString(2);
  while(bitstr.length < 8) bitstr = '0' + bitstr;
  return bitstr;
}
//console.log(parseInt(fill(' '), 2));

String.prototype.toBase64 = function(){  
  var binary = '', result = '';
  for (var char of this){
    binary += fill(char);
  }
  for(var i = 0; i < binary.length - 5; i+=6){
    parovoz = binary[i]+binary[i+1]+binary[i+2]+binary[i+3]+binary[i+4]+binary[i+5];
    result+=alphabet64[parseInt(parovoz, 2)];    
  }
  return result;
};

String.prototype.fromBase64 = function(){
  var binary = '', result = '';
  for (var char of this){
    bitstr = alphabet64.indexOf(char).toString(2);
    while(bitstr.length < 6) bitstr = '0' + bitstr;
    binary += bitstr;
  }
  for(var i = 0; i < binary.length - 7; i+=8){
    parovoz = binary[i]+binary[i+1]+binary[i+2]+binary[i+3]+binary[i+4]+binary[i+5]+binary[i+6]+binary[i+7];
    result+=String.fromCharCode(parseInt(parovoz, 2));
  }
  return result;
};

//console.log('TWFu'.fromBase64()); //Man
console.log('this is a string!!'.toBase64()); // 'dGhpcyBpcyBhIHN0cmluZyEh'
console.log('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64()); // 'this is a string!!'

/*
String.prototype.toBase64 = function() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var encoded = '';
  
  for(var i=0; i < this.length; i+=3) {
    var c1 = this.charCodeAt(i), 
        c2 = this.charCodeAt(i+1), 
        c3 = this.charCodeAt(i+2);
    encoded += chars[(c1 & 0xFC) >> 2];
    encoded += chars[((c1 & 0x03) << 4) | ((c2 & 0xF0) >> 4)];
    encoded += chars[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)];
    encoded += chars[c3 & 0x3F];
  }
  
  return encoded;
};

String.prototype.fromBase64 = function() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var decoded = '';
  
  for(var i=0; i < this.length; i+=4) {
    var c1 = chars.indexOf(this[i]), 
        c2 = chars.indexOf(this[i+1]), 
        c3 = chars.indexOf(this[i+2]),
        c4 = chars.indexOf(this[i+3]);
    decoded += String.fromCharCode(((c1) << 2) | ((c2 & 0x30) >> 4));
    decoded += String.fromCharCode(((c2 & 0x0F) << 4) | ((c3 & 0xFC) >> 2));
    decoded += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }
  
  return decoded;
};
//------------------------------------------------------------------------
String.prototype.toBase64 = function() {
  return (new Buffer(this.valueOf())).toString('base64')
}

String.prototype.fromBase64 = function() {
  return (new Buffer(this.valueOf(), 'base64')).toString()
}
//------------------------------------------------------------------------
String.prototype.toBase64 = function() {
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return this.split('').map(function(val){
    return ("00000000"+val.charCodeAt(0).toString(2)).slice(-8);
  }).join('').match(/.{1,6}/g).map(function(val) {
    return t[parseInt(val, 2)];
  }).join('');
};

String.prototype.fromBase64 = function() {
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return this.split('').map(function(val) {
    return ("000000"+t.indexOf(val).toString(2)).slice(-6);
  }).join('').match(/.{1,8}/g).map(function(val) {
    return String.fromCharCode(parseInt(val, 2));
  }).join('');
}
//------------------------------------------------------------------------
const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

String.prototype.toBase64 = function() {
  return this.split('')
             .map((e) => {return ("00000000" + e.charCodeAt(0).toString(2)).slice(-8);})
             .reduce((p,c) => {return p + c;})
             .match(/.{1,6}/g)
             .map((e) => {return base64Chars[parseInt(e,2)];})
             .reduce((p,c) => {return p + c;});
};

String.prototype.fromBase64 = function() {
  return this.split('')
             .map((e) => {return ("000000" + base64Chars.indexOf(e).toString(2)).slice(-6);})
             .reduce((p,c) => {return p + c;})
             .match(/.{1,8}/g)
             .map((e) => {return String.fromCharCode(parseInt(e,2))})
             .reduce((p,c) => {return p + c;});
};
*/