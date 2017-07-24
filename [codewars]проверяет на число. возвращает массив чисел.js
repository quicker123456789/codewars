function isNumeric(n){
  return !isNaN(parseInt(n)) && (+n === n);
}

function filter_list(l) {
 return l.filter(function(num){
 	return !isNaN(parseInt(num)) && (+num === num);
 });
}

/*
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
*/

alert (filter_list([1,2,'aasf','1','123',123]));