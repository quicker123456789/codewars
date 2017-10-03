String.prototype.toJadenCase = function () {
  return this.split(' ').map(word=>word[0].toUpperCase() + word.slice(1)).join(' ');  
};

/*
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
*/