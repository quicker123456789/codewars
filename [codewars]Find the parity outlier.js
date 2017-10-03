function findOutlier(integers){  
  var odd = integers.filter(elem => elem&1);
  var even = integers.filter(elem => ~elem&1);
  
  return (odd.length > 1) ? even[0] : odd[0];
}

console.log(findOutlier([1,2,3])); //2
console.log(findOutlier([1, 1, 1, 0, 1, 1, 1])); //0


/*

*/