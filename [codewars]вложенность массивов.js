function makeArrType(arr){    
  var result = [], hasArray = false;
  for(var idx = 0; idx < arr.length; idx++){
    if(!Array.isArray(arr[idx])) result.push(typeof arr[idx]);
    else{
      hasArray = true
      result.push('array');
      result = result.concat(makeArrType(arr[idx]));
    }
  }  
  return hasArray ? result : result.sort();
}

Array.prototype.sameStructureAs = function(other){
  if (other === undefined || typeof other != 'object' || !Array.isArray(other)) return false;
  var array1 = makeArrType(this), array2 = makeArrType(other);  
  if (array1.length != array2.length) return false;
  for (var elem = 0; elem < array1.length && array1.length==array2.length; elem++){
    if (array1[elem] !== array2[elem]) return false;   
  }
  return true;
};

console.log([1,'[',']'].sameStructureAs( ['[',']', 1] )); // true
console.log([1,[1,1]].sameStructureAs( [2,[2,2]] ) ); // true
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ) ); // false

/*
Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every(function(el, i){
      return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
    }) : false;
};

Array.prototype.sameStructureAs = function (other) {
    if (!Array.isArray(other) || this.length != other.length)
      return false;

    for(var i = 0; i < this.length; ++i) {
      if (Array.isArray(this[i])) {
        if (!this[i].sameStructureAs(other[i])) {
          return false;
        }
      } else if (Array.isArray(other[i])) {
        return false;
      }
    }
    
    return true;
};

Array.prototype.sameStructureAs = function (other) {
  return isArray(other) && this.length == other.length && this.every(function (a, i) {
    var b = other[i];
    return isArray(a) ? a.sameStructureAs(b) : isArray(a) == isArray(b);
  });
};

Array.prototype.sameStructureAs = function (other) {
    return isArray(other) && this.every((el,idx) =>
        isArray(el) === isArray(other[idx]) &&
           ( isArray(el) ?
               el.length === other[idx].length &&
               el.sameStructureAs(other[idx])
             : true
           )
      );
};

Array.prototype.sameStructureAs = function (other) {
    return this.length == other.length && this.every((x,i) => isArray(x) == isArray(other[i]) && (!isArray(x) || x.sameStructureAs(other[i])));
};
*/