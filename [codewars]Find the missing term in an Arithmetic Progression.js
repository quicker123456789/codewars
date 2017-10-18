var findMissing = function (progression) {  
  var sum = (progression.length+1)*(progression[0] + progression[progression.length-1])/2;
  return sum-progression.reduce((s,elem)=>s+elem);
}

/*
var findMissing = function (list) {
  var step = (list[list.length - 1] - list[0]) / (list.length);
  return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
}

var findMissing = function (l) {  
  return ((l[0]+l[l.length-1])*(l.length+1))/2-(l.reduce((a,b)=>a+b))
}
*/