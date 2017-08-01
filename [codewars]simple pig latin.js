function pigIt(str){
  return str.split(' ').map(function(item){
    return item.slice(1) + item.charAt(0) + 'ay';
    }).join(' ');
}
/*
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
*/
alert(pigIt('Pig latin is cool'));  //igPay atinlay siay oolcay