/*function sum_pairs(arr, res){
  var pairs = [], indices = [], array=arr.slice();
  array.forEach((elem, i)=>{
    array.forEach((dig, j)=>{
       if(elem+dig==res && i!=j ){
         pairs.push(array.slice(i, i+1).concat(array.slice(j, j+1)));
         indices.push([arr.indexOf(elem), arr.lastIndexOf(dig)]);
         array.splice(i, 1);
       }
    })
  });
  indices = indices.sort((a,b)=>(a[0]-b[0])&&(a[1]-b[1]))[0];
  return indices?[arr[indices[0]],arr[indices[1]]]:indices;  
}*/

var sum_pairs = function(values, target) {
  var limit = values.length,
      result = undefined;
  for(var i = 0 ; i < limit ; i++) {
    for(var j = i+1 ; j < limit ; j++) {
      if(values[i] + values[j] == target) {        
        limit = j;
        result = [values[i], values[j]];
        break;
      }
    }
  }
  return result;
};
//---------------------------------------------------------------------
var sum_pairs=function(ints, s){  
  let intSet = new Set()
  intSet.add(ints[0]);
  for (let i=1; i < ints.length; ++i){
    let needed = s-ints[i];
    if (intSet.has(needed)){
      return [needed,ints[i]];
    }
    intSet.add(ints[i]);
  }
  return undefined;
}

console.clear();
console.log(sum_pairs([10, 5, 2, 3, 7, 5, 0], -5));
console.log(sum_pairs([1,4,8,7,3,15], 8));

/*
var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}

let sum_pairs= (a, s) => {
  let mem = {};
  for(x of a) 
    if(mem[s - x])
      return [s - x, x];
    else 
      mem[x] = 1;
}
*/