function duplicateCount(text){
  var txt = text.toLowerCase();
  var counter = 0;
  var found = false;
  var obj = {};
  
  for(var i = 0; i<txt.length; i++){
    for (var j = i+1; j<txt.length; j++){
      if (txt.charCodeAt(i) == txt.charCodeAt(j) && !found){
        found = true;
        obj[txt.charAt(i)] = true;  // значение не важно, важен ключ, который всегда уникален
      }
    }
    found = false;
  }
  
  for (var key in obj)
    counter++;
  
  return counter;
}

/*
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
*/

alert(duplicateCount("abababababacde"));  //2