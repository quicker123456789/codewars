var brackets = {
  ']' : '[',
  ')' : '(',
  '}' : '{'
};

function parseMolecule(formula){
  var obj = {};
  if (~formula.search(/\]|\)|\}/)) {
    long = makeLong(braces(formula));
  }else long = makeLong(formula);
    
  /*подсчет количества атомов*/
  long.split(/([A-Z][a-z]*)/g).forEach(function(elem){
    obj[elem] = obj[elem] + 1 || 1;
  });
  delete obj[''];
  return obj;
}

function makeLong(molecule){
  var reg = /([A-Z][a-z]*)(\d*)/g, atom, longMolec = '';
  while (atom = reg.exec(molecule)){
    atom.shift();   
    longMolec+=atom[0].repeat(+atom[1] || 1);
  }
  return longMolec;
}

function braces(str){
  var result = str.split('');
  var closePos = str.search(/\]|\)|\}/);
  if(~closePos){
    digit = +str[closePos+1]; //за скобками цифра(не число) или нет
    //console.log(digit);
    //var closePos = str.search(/\]|\)|\}/);
    var openPos;
    for(var i = str.length-1; i>=0; i--){      
      if(str[i]==brackets[str[closePos]]){
        openPos = i;        
      }
    }
    inBraces = str.slice(openPos+1, closePos);
    long = str.slice(openPos+1, closePos).repeat(digit || 1);
   // console.log(long);
    result.splice(openPos, digit? inBraces.length+3 : inBraces.length+2, long);//2 - длина со скобками, 3 - с цифрой и скобками
    
  return braces(result.join(''));
  } 
  else return str;  
}
//console.log(braces('(C5H5)Fe'));


var formula = parseMolecule('(C5H5)Fe(CO)2CH3');
for(var at in formula)
 console.log(at + ': ' + formula[at]); // return {H: 2, O: 1}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

/*
FeK4[ON(SO3)2]2 = FeK4[ONSO3SO3]2 = FeK4ONSO3SO3ONSO3SO3 = FeKKKKONSOOOSOOOONSOOOSOOO
= FeKKKKON(SO3)2ON(SO3)2 = Fe1 K4 O14 N2 S4

FeK4 - left; [ON(SO3)2]2 - right
ON - left; (SO3)2 - right
*/

/*
//------------------------------------------------------------
function parseMolecule(formula) {
  var group, tokens, tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g, stack = [[]];
  while (tokens = tokenExp.exec(formula)) {
    tokens[2] = tokens[2] || 1;
    if (/^[A-Z]/.test(tokens[1])) {
      while (tokens[2]--) stack.push(stack.pop().concat([tokens[1]]));
    } else if (/[{\(\[]/.test(tokens[1])) {
      stack.push([]);
    } else {
      group = stack.pop();
      while (tokens[2]--) stack.push(stack.pop().concat(group))
    }
  }
  return stack[0].reduce(function (count, x) {
    count[x] = (count[x] || 0) + 1;
    return count;
  }, {});
}
//------------------------------------------------------------
function parseMolecule(s) {
  var o = {}
  while (s != (s = s.replace(/[\[\(\{]([a-z0-9]+)[\]\)\}]([0-9]+)/gi, (f,e,n) => repeat(e,n))));
  s.replace(/([A-Z][a-z]?)([0-9]+)?/g, (f,e,n) => (o[e] = (o[e] || 0) + +(n || 1)));
  return o;
}

function repeat(s, n) {
  for (var r = ""; n--; r += s);
  return r;
}
//------------------------------------------------------------
*/