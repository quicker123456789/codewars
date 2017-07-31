function sumIntervals(intervals){
  
  intervals.sort(function(a, b){
    return a[0] - b[0];
  });
  
  if (intervals.length > 1){
    for(var i = 1; i < intervals.length; i++){
      if(intervals[i][0] >= intervals[i-1][0] && intervals[i][0] <= intervals[i-1][1]){
       if (intervals[i-1][1] < intervals[i][1]) {
          intervals[i-1][1] = intervals[i][1];
        }
        intervals.splice(i, 1);
        i--;
      }
    }
  }
  return intervals.reduce(function(sum, current){
    return sum + current[1] - current[0]; 
  }, 0); 
}

/*
function sumIntervals(intervals){
  return intervals
    .sort(function(a, b){
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    })
    .reduce(function(acc, interval) {
      if (interval[1] > acc.top) {
        acc.total += interval[1] - Math.max(interval[0], acc.top);
      }
      acc.top = Math.max(interval[1], acc.top);
      return acc;
    }, {total: 0, top: 0})
    .total;
}

function sumIntervals(intervals){
  var numbers = [];
  intervals.forEach( function(interval) {
    for (var i = interval[0] ; i < interval[1] ; i++) {
      if (numbers.indexOf(i) == -1) numbers.push(i);
    }
  });
  return numbers.length;
}

function sumIntervals(intervals){
  var numbers = {};
  intervals.forEach(function(x) {
    for (var i = x[0]; i < x[1]; i++) {
      numbers[i] = i;
    }
  });
  return Object.keys(numbers).length;
}

function sumIntervals(intervals){
  return Object.keys(intervals.reduce(function(hash, interval) {
    for(var i = interval[0]; i < interval[1]; i++) hash[i] = 1;
    return hash;
  }, {})).length;
}
*/

alert(sumIntervals([[1,5],[10, 20],[1, 6],[16, 19],[5, 11]])); //=> returns 19