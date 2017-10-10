function scramble(str1,str2){
  /*
  str1 = str1.split('').sort('').join('');//.replace(/(\w)\1+/g,'$1');
  str2 = str2.split('').sort('').join('');//.replace(/(\w)\1+/g,'$1');
  
  var regexp = new RegExp('['+str2+']+', 'g');
  var result = str1.match(regexp);
  return result ? !result.join('').localeCompare(str2) : false;*/
  
  /* if(result) str1 = result.join('').split('').sort('').join('').replace(/(\w)\1+/g,'$1');
   else return false;
  return !str1.localeCompare(str2);*/
  
  //str2 = str2.split('').sort('').join('');
  var regexp = new RegExp('['+str2+']+', 'g');
  str1 = str1.match(regexp).join('');
  
  var obj1 = str1.split('').reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  
  var obj2 = str2.split('').reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  
  for (var key in obj2) if(obj1[key] < obj2[key] || !obj1[key])  return false;
  
  return true;
}

console.log(scramble('katas', 'steak'));//false
console.log(scramble('aabbcamaomsccdd','commas'));//true
console.log(scramble('aabbcamaosccdd','commas'));//false

/*
function scramble(str1, str2) {
  var map={};
  for(var i in str1) {
    map[str1[i]] ? map[str1[i]]++ : map[str1[i]]=1;
  }
  for(var i in str2) {
    if(!map[str2[i]]) return false;
    map[str2[i]]--;
  }
  return true;
}

function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}


*/