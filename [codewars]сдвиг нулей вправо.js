var moveZeros = function (arr) {
  zeros = [];
  return arr.filter(function(item){
    if(item === 0){
      zeros.push(item);
    }
    return item !== 0;
  }).concat(zeros);
};

/*
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));
*/

alert(moveZeros([false,1,0,1,2,0,1,3,"a"])); // [false,1,1,2,1,3,"a",0,0]