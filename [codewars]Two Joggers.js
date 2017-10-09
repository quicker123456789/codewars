var nbrOfLaps = function (x, y) {
    var nod = (a,b)=> b==0 ? a : nod(b, a%b);
  return [y/nod(x,y), x/nod(x,y)];
}

/*
var nbrOfLaps = function(x, y) {
  var lcm = x;
  while(lcm % y != 0) {lcm += x;}
  return [lcm / x, lcm / y];
}

var nbrOfLaps = function (x, y) {
  for(i=1;x*i%y > 0;i++){}
  return([i,x*i/y]);
}
*/