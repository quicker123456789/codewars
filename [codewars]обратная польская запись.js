function operator(a, b, token){
  //обратный порядок, т.к из стека сначала достается b, затем a
  switch(token){
    case '+': return +b + +a;
    case '-': return +b - +a;
    case '*': return +b * +a;
    case '/': return +b / +a;
  }
}

function calc(expr) {
  if (expr.length == 0) return 0;
  var stack = [];
  expr.split(' ').forEach(function(token){
    if (!isFinite(token)){
      stack.push(operator(stack.pop(), stack.pop(), token));
    }else
      stack.push(parseFloat(token));
  });
  return stack.pop();
}

/*
function calc(expr) {  
  var result = [];
  var atoms = expr.split(/\s+/);
  var operators = ['+', '-', '*', '/'];
  for (var i=0; i<atoms.length; i++) {
    switch(atoms[i]) {
      case '+': result.push(result.pop() + result.pop()); break;
      case '-': result.push(-result.pop() + result.pop()); break;
      case '*': result.push(result.pop() * result.pop()); break;
      case '/': result.push(1 /(result.pop() / result.pop())); break;
      default: result.push(parseFloat(atoms[i]));
    }
  }
  return result.pop() || 0;
}

var operands = {
  '+': function (b, a) { return a + b;},
  '-': function (b, a) { return a - b;},
  '*': function (b, a) { return a * b;},
  '/': function (b, a) { return a / b;}
};

function calc(expr) {
  expr = expr || '0';
  return +expr.split(/\s/g).reduce(function (stack, current) {
      stack.push(operands[current] ? operands[current](+stack.pop(), +stack.pop()) : current);
    return stack;
  }, []).pop();
}

function calc(expr)
{
  var stack = [];
  expr.split(" ").forEach(function(e)
  {
    if (e === "+") stack.push(stack.pop() + stack.pop());
    else if (e === "-") stack.push(-stack.pop() + stack.pop());
    else if (e === "*") stack.push(stack.pop() * stack.pop());
    else if (e === "/") stack.push(1 / stack.pop() * stack.pop());
    else stack.push(parseFloat(e));
  });
  return stack[stack.length - 1] || 0;
}
*/

alert(calc('5 1 2 + 4 * + 3.5 -'));// 5 + ((1 + 2) * 4) - 3.5 = 13.5