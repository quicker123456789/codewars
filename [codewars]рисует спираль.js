function spiralize(size){
  var spiral = [], left = 1, right = size-1, up = 1, down = size-1;
  for (var i = 0; i < size; i++){
    spiral[i] = [];    
    for (var j = 0; j < size; j++){      
      spiral[i][j]=1;      
    }
  }
  
  while(right && down){
    
    for (j = left-1; j < right; j++) spiral[up][j] = 0;
    up+=2;
    for (i = up-1; i < down-1; i++) spiral[i][right-1] = 0;
    right-=2;
    for(j = right+1; j >= left; j--) spiral[down-1][j] = 0;
    down-=2;
    for(i = down+1; i >= up; i--) spiral[i][left] = 0;
    left+=2;        
  }  
  
  return spiral;
}

console.log(makeAspiral(15));
/*
function spiralize(size) {
  if (size == 2) return [ [1,1], [0,1] ];
  if (size == 3) return [ [1,1,1], [0,0,1], [1,1,1] ];
  var base = spiralize(size-2);
  var res = [[],[]];
  for (var i = 0; i < size; i++) (res[0].push(1)) && (res[1].push(0));
  res[1][size-1] = 1;
  for (var i = size-3; i >= 0; i--) {
    res.push(base[i].reverse().concat([0,1]));
  }
  res[size-1][size-2] = 1;
  return res;
}
//-------------------------------------------------------------------------
var spiralize = function(size) {
  var result = [];
  for(var i = 0; i < size; i++){
    result.push(new Array(size));
    for(var j = 0; j < size; j++){
      result[i][j] = 0;
    }
  }

  for(var offset = 0;offset < Math.ceil(size/2);offset++){
    var val = offset % 2 ? 0 : 1;
    for(var i = offset; i < size-offset; i++){
        result[result.length-1-offset][i] = val;
        result[i][result.length-1-offset] = val;
        if(i!=offset+1){
          result[i][offset] = val;
        }else{
          result[i][offset] = val ? 0 : 1;
        }
        result[offset][i] = val;
    }
    if((offset+1) * 2 > size){
      result[offset][offset] = val;
    }
  }
    
  return result;
}
*/
