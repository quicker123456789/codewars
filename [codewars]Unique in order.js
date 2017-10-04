var uniqueInOrder=function(sequence){
  switch (typeof sequence){
    case 'string': return sequence.replace(/(.)\1+/g,'$1').split('');
    case 'object': return sequence.filter((elem,i,arr)=>elem!=arr[i+1]);
  }
};

console.log(uniqueInOrder([1,2,2,3,3,1,1])); 

/*
var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}
*/