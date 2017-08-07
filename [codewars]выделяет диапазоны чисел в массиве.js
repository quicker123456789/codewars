
function ranges(list){
  var range = [], result = '';
  for (var i = 0; i < list.length; i++){
    if (list[i] == list[i+1] - 1){
      range.push(list[i]);
    }else {
      var r = range.length > 1 ? range.slice(0, 1) + '-' :  range[0] ? range[0] + ',' : '';
      result += r + list[i] + ',';
      range = [];
    }
  }
  return result.slice(0, -1);
}

alert(ranges([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));//"-6,-3-1,3-5,7-11,14,15,17-20"
//alert(ranges([-3,-2,-1,2,10,15,16,18,19,20]));//"-3--1,2,10,15,16,18-20"

/*
function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}

function solution(list){
    var s = '';
    var l = list.length;
    for(var i=0; i<l; i++){
      if(list[i] == list[i+2]-2) {
        s += list[i] + '-';
        for(i; i<l; i++){
          if(list[i] != list[i+2]-2) break;
        }
      } else {
        s += list[i];
        if(i != l-1) s += ',';
      }
    }
    return s;
  }

function solution(list) {
  for (var a = [], i = 0; i < list.length;) {
    for (var j = 1; i + j < list.length && list[i+j] == list[i] + j; j++);
    if (j >= 3) { a.push( `${list[i]}-${list[i+j-1]}` ); i += j; } 
    else a.push(list[i++]);
  }
  return a.join(',');
}

function solution(list){
 // TODO: complete solution 
  var res = list.slice();

  for(var i = 0; i < list.length; ++i) {
      if(i === 0 || i === list.length - 1) continue;
      if(res[i] - 1 === list[i - 1] && res[i] + 1 === list[i + 1]) {
        res[i] = null;
      }
  }

  return res.toString().replace(/,{2,}/g, '-');
}
*/