function getPINs(observed){
  var result = {};
  /*var keyboard = [['1', '2', '3'],
                  ['4', '5', '6'],
                  ['7', '8', '9'],
                  ['', '0','']];
  */
  var code = observed.toString().split('');
  var adjacent = {'1' : ['2', '4'],
                  '2' : ['1', '5', '3'],
                  '3' : ['2', '6'],
                  '4' : ['1', '5', '7'],
                  '5' : ['2', '4', '6', '8'],
                  '6' : ['3', '5', '9'],
                  '7' : ['4', '8'],
                  '8' : ['5', '7', '9', '0'],
                  '9' : ['6', '8'],
                  '0' : ['8']};
/*---рекурсия------------------------------------------------
  getCombo(code, code.length-1, '');
  return Object.keys(result);

  function getCombo(digits, index, combo){
    var digit = digits[index];
    var candidates = adjacent[digit];
    candidates.push(digit);

    candidates.forEach(index === 0 ? reached : deeper);

    function reached(candidate){
      result[candidate + combo] = true;
    }
    function deeper(candidate){
      getCombo(digits, index - 1, candidate + combo);
    }
  }
*/
  var digit, tmp = [], candidates = [];
   
  for (var i = code.length - 1; i >= 0; i--){
    digit = code[i];
    candidates = adjacent[digit];
    candidates.push(digit);
    
    tmp = candidates.map(function(candidate){       
      if (tmp.length > 0){
        return tmp.map(function(item){
          return candidate + item;
        });
      } else return candidate;
    }).join(',').split(',');  //костыль, нужен, чтобы кандидат прибавлялся не в начале массива, а в начале строки
    
  }

  tmp.forEach(item => {result[item] = true});

  return Object.keys(result); //tmp;
}

alert(getPINs(8));//['8', '5', '7', '9', '0']
alert(getPINs(11));//["11", "22", "44", "12", "21", "14", "41", "24", "42"]
alert(getPINs(369));


/*
function getPINs(observed) {
  var adjacent = [
     [0, 8],          //0
     [1, 2, 4],       //1
     [1, 2, 3, 5],    //2
     [2, 3, 6],       //3
     [1, 4, 5, 7],    //4
     [2, 4, 5, 6, 8], //5
     [3, 5, 6, 9],    //6
     [4, 7, 8],       //7
     [5, 7, 8, 9, 0], //8
     [6, 8, 9]        //9
  ];
  
  return observed
    .split('')
    .map(function(d) { return adjacent[d|0]; })
    .reduce(function(pa, da) {
      return da.reduce(function(pv, d) {
        return pv.concat(pa.map(function(p) {
          return '' + p + d;
        }));
      }, []);
    }, ['']);
}
//----------------------------------------------------------------------------------
function getPINs(observed) {
  return observed.split('')
  .map( t => ({
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}
//----------------------------------------------------------------------------------
function mixNMatch(add, addTo) {
  var out = [];
  add.forEach(function(v, i) {addTo.forEach(function(w, j) {out.push(v + w);});});
  return out;
}

function getPINs(observed) {
  var map = {1:['1','2','4'], 2:['1','2','3','5'], 3:['2','3','6'], 4:['1','4','5','7'], 5:['2','4','5','6','8'],
             6:['3','5','6','9'], 7:['4','7','8'], 8:['5','7','8','9','0'], 9:['6','8','9'], 0:['8','0']};
  return observed.length == 1 ? map[observed[0]] : mixNMatch(map[observed[0]], getPINs(observed.slice(1)));
}
*/
