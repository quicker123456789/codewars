function validBraces(braces){
  var stack = [];
  for(var i = 0; i<braces.length; i++){
    var char = braces[i];
    if(char=='(' || char=='[' || char=='{'){
      stack.push(char);
    }else if((char==')' && stack[stack.length-1]=='(') || 
             (char==']' && stack[stack.length-1]=='[') ||
             (char=='}' && stack[stack.length-1]=='{'))
      stack.pop();
    else 
      return false;   //проверили все
  }
  return stack.length === 0;
}

/*
function validBraces(braces){
 while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
 return !braces.length;
}

function validBraces(braces){
  while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length == 0;
}
*/

alert(validBraces( "([{}])" )); //true
alert(validBraces( "([){]}" )); //false