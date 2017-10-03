function accum(str){
  return str.replace(/[a-z]/gi,function(letter, offset){
    return letter.toUpperCase()+letter.toLowerCase().repeat(offset) + '-';
  }).slice(0,-1);
}

console.log(accum('RqaEztay'));//"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

/*
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
*/