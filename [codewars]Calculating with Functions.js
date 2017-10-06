function zero(){ return arguments.length == 0 ? 0 : solution(0 + arguments[0]);}
function one(){ return arguments.length == 0 ? 1 : solution(1 + arguments[0]);}
function two(){ return arguments.length == 0 ? 2 : solution(2 + arguments[0]);}
function three(){ return arguments.length == 0 ? 3 : solution(3 + arguments[0]);}
function four(){ return arguments.length == 0 ? 4 : solution(4 + arguments[0]);}
function five(){ return arguments.length == 0 ? 5 : solution(5 + arguments[0]);}
function six(){ return arguments.length == 0 ? 6 : solution(6 + arguments[0]);}
function nine(){ return arguments.length == 0 ? 9 : solution(9 + arguments[0]);}
function seven(){ return arguments.length == 0 ? 7 : solution(7 + arguments[0]);}
function eight(){ return arguments.length == 0 ? 8 : solution(8 + arguments[0]);}
function nine(){ return arguments.length == 0 ? 9 : solution(9 + arguments[0]);}

function plus(){ return '+' + arguments[0];}
function minus(){ return '-' + arguments[0];}
function times(){ return '*' + arguments[0];}
function dividedBy(){ return '/' + arguments[0];}

function solution(str){
  switch (str[1]){
    case '+' : return parseInt(str[0]) + parseInt(str[2]);
    case '-' : return parseInt(str[0]) - parseInt(str[2]);
    case '*' : return parseInt(str[0]) * parseInt(str[2]);
    case '/' : return parseInt(str[0]) / parseInt(str[2]);
  }  
}


console.log(six(dividedBy(two()))); //2

/*
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }
-------------------------------------------------------------------------------------
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };
-------------------------------------------------------------------------------------
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }
*/