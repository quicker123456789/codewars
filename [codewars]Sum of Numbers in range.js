function GetSum(a,b){
  var x = Math.min(a,b), y = Math.max(a,b);
  var sum = 0;
  for(var i = x ; i <= y; i++)
    sum += i;
  return sum;
}

console.log(GetSum(0, -1));

/*
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
*/