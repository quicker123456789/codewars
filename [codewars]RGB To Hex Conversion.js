function rgb(r, g, b){
  function convert(c){
    if (c < 0) return '00';
    if (c > 255) return 'FF';
    return c.toString(16).replace(/.+/g, str => str.length > 1 ? str : '0'+str).replace(/([a-z])/g, str => str.toUpperCase());
  }
  
  return convert(r) + convert(g) + convert(b);
}

console.log(rgb(148, 0, 211)); // returns 9400D3

/*
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
*/