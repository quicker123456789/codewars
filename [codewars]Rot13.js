function rot13(message){
  var big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
    small = 'abcdefghijklmnopqrstuvwxyz';
  return message.replace(/[a-z]/g,(str, idx)=> small[(small.indexOf(str)+13)%26] )
  .replace(/[A-Z]/g,(str, idx)=> big[(big.indexOf(str)+13)%26] );
  
}

console.log(rot13('oO'));//bB

/*
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

function rot13(message){
  return message.replace(/[a-zA-Z]/g, function(c){
    var c13 = c.charCodeAt(0) + 13;
    var endCharCode = ( c > 'Z')? 122 : 90;
    return String.fromCharCode(  endCharCode < c13 ?  c.charCodeAt(0) - 13 : c13 );
  });
}
*/