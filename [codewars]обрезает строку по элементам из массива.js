
function solution(input, markers){
  /*markers.forEach(item => {    
    input = input.replace(new  RegExp('\\s*' + item + '.*\\n|$', 'g'), '\n');
  });
  return input.slice(0, input.lastIndexOf('\n')-2);
  */
  arr = input.split('\n');
  for(i = 0; i < arr.length; i++){
    for(j = 0; j < markers.length; j++){
      markIdx = arr[i].indexOf(markers[j]);
      if(markIdx != -1) arr[i] = arr[i].slice(0, markIdx).trim();
    }
  }
  
  return arr.join('\n');
}

/*
function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}

function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}
*/

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
alert(result); //"apples, pears\ngrapes\nbananas
