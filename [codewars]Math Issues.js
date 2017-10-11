Math.round = function(number) {
  return number%1 >= 0.5 ? Math.ceil(number) : Math.floor(number);
};

Math.ceil = function(number) {
  return number%1 ? ~~number+1 : number;
};

Math.floor = function(number) {
  return ~~number;
};
/*
Math.round = function(number) {
  return Math.floor(number + 0.5);
};

Math.ceil = function(number) {
  return (number | 0) + (number % 1 !== 0 ? 1 : 0);
};

Math.floor = function(number) {
  return number | 0;
};
*/