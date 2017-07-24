function maskify(cc) {
	var array = cc.split('');
  
  if (cc.length<4) return cc;
  else{
    for(var i = 0; i < array.length-4; i++){
    	array.splice(i,1,'#');
    }
  }
  return array.join('');
}

/*
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  //return cc.replace(/.(?=....)/g, '#');
  //return cc.replace(/.(?=.{4})/g, "#");
}
*/

alert (maskify('4556364607935616')); //############5616