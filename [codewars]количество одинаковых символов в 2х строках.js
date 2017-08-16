
function mix(s1, s2){  
  var arr1 = (s1.split('').sort().join('').replace(/[^a-z]+/g,'').match(/([^ ])\1+/g) || []).map(str => '1:' + str); 
  var arr2 = (s2.split('').sort().join('').replace(/[^a-z]+/g,'').match(/([^ ])\1+/g) || []).map(str => '2:' + str); 
  var multicity = arr1.concat(arr2).sort(function(a,b){return b.length - a.length;});
  
  for(var i = 0; i<multicity.length; i++){    
    for (var j = i+1; j<multicity.length; j++){
      if (multicity[i][2] == multicity[j][2] && multicity[i].length == multicity[j].length){
        multicity[i] = multicity[i].replace(/[12]/g,'=');        
        multicity.splice(j, 1);
      } else if (multicity[i][2] == multicity[j][2]){
        multicity.splice(j, 1);
      }
    }
  }
  
  return multicity.sort(function(a,b){
    return b.length - a.length || a.charCodeAt(0) - b.charCodeAt(0) || a.localeCompare(b);
  }).join('/');
}

s1 = "my&friend&Paul has heavy hats! &";
s2 = "my friend John has many many friends &";
console.log(mix(s1, s2)); // "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
console.log(mix("gamekult", "gamekult")); // ''

/*
function mix(s1, s2) {
  var counter = s => s.replace(/[^a-z]/g,'').split('').sort().reduce((x,y)=> (x[y] = 1 + (x[y]||0), x),{});
  s1 = counter(s1); s2 = counter(s2);
  var res = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
  keys.forEach(key => {
    var c1 = s1[key]||0, c2 = s2[key]||0, count = Math.max(c1, c2);
    if (count>1) {
      var from = [1, '=', 2][Math.sign(c2-c1)+1];
      var str = [...Array(count)].map(_=>key).join('');
      res.push(from+':'+str);
    }
  });
  return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
}
//----------------------------------------------------------------------------------------
function mix(s1, s2) {
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''), arr1 = [], arr2 = [];
  alphabet.map(function(x){
    let char = x, reg = new RegExp(char,'g');
    arr1.push(s1.match(reg) || []);
    arr2.push(s2.match(reg) || []);
  });
  const max1 = [], max2 = [], eql = [];
  arr1.forEach(function(x,ind){
    if(x.length > arr2[ind].length && x.length > 1) max1.push('1:'+x.join(''));
    if(x.length < arr2[ind].length && arr2[ind].length > 1) max2.push('2:'+arr2[ind].join(''));
    if(x.length == arr2[ind].length && x.length > 1) eql.push('=:'+x.join(''))
  });
  let str = max1.concat(max2).concat(eql).sort(function(a,b){
    if(b.length == a.length){
      if(a.charCodeAt(0) == b.charCodeAt(0)) return a.charCodeAt(2) - b.charCodeAt(2);
      else return a.charCodeAt(0) - b.charCodeAt(0)
    }
    else return b.length - a.length
  })
  return str.join('/')
  }
*/