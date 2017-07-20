
function inArray(array1,array2){
  var r = [];
  var obj = {};
  
  for(var i = 0; i<array1.length; i++){
    for (var j = 0; j<array2.length; j++){
      if ( ~array2[j].indexOf(array1[i]) ){
         r.push(array1[i]);
      }
    }
  }
// исключает повторения
  for (i = 0; i < r.length; i++) {
    var str = r[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }
// выводит в лексикографическом порядке
  return Object.keys(obj).sort(function(a, b){
    return a.localeCompare(b);
  });
}

/*
function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
*/

a1 = ["xyz", "strong", "live"];
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

alert(inArray(a1, a2)); // ["live", "strong"]
