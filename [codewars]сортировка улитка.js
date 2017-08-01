// Code goes here
 
snail = function(array){
  var result = [];
  var row = array.length, col = array.length;
  
  if(array.length == 1) return array[0];
 
  while (col > 1){
    for(i = 0; i < col; i++)
      result.push(array[0][i]);
    
    array.splice(0,1);
    col--;
    
    for(i = 0; i < col; i++){
      result.push(array[i][col]);
      array[i].splice(col);
    }
    row--;
    
    for(i = row-1; i>=0; i--)
      result.push(array[col-1][i]);
    
    array.splice(col-1);
    row--;
    
    for(i = col-1; i > 0; i--){
      result.push(array[i-1][0]);
      array[i-1].splice(0,1);
    }
    col--;
    
    if(col==1 && row==1)
      result.push(array[0][0]);
  }
  
  return result;
};

/*
snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}

function snail(array) {  
  var results = [];  
  while(array.length > 0) {
    results = results.concat(array.shift());    
    array.forEach(function (current) {
      results.push(current.pop());
    });    
    array.forEach(function (current) {
      current.reverse();
    });    
    array.reverse();
  }  
  return results;
}
*/

var array=[[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12],
           [13,14,15,16]];
       
alert(snail(array));