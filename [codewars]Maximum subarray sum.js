function maxSequence(array){
  if (array.every(dig=>dig<0)) return 0;
  var sum = 0;
  for (var i=0; i<array.length; i++){
    var maxSum = 0;
    for(var j=i; j<array.length; j++){
      maxSum+=array[j];
      sum = Math.max(sum,maxSum);
    }
  }
  return sum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6: [4, -1, 2, 1]

/*
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

var maxSequence = function(arr){
  var max = 0;
  var cur = 0;
  arr.forEach(function(i){
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
}
*/