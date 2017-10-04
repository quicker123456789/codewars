function array_diff(arr1, arr2){
  return arr1.filter(elem=>{
    return arr2.every(dig=>elem!=dig);
  });
  /*return arr1.filter(elem => arr2.every(dig => elem!=dig));
	return a.filter(function(x) { return b.indexOf(x) == -1; });
	return a.filter(e => !b.includes(e));
	array_diff = require("lodash").difference;
	
  */
}

console.log(array_diff([1,2,2,2,3,4],[2,3])); // [1,4]
