//easy sudoku solver
function sudoku(puzzle){
  var suggest = [1,2,3,4,5,6,7,8,9],
  layer = puzzle.map(row => {
    return row.map(digit => {
      return digit == 0 ? suggest : digit;
    });
  });
  
  //singletons rows & cols
  for(var i = 0; i < puzzle.length; i++){
    for(var j = 0; j < puzzle[i].length; j++){
      for(var k = 0; k < puzzle[i].length; k++){
        if (puzzle[i][j] == 0)
            layer[i][j] = layer[i][j].filter(s => s!=puzzle[i][k]);         
        if (puzzle[j][i] == 0)
            layer[j][i] = layer[j][i].filter(s => s!=puzzle[k][i]);         
      }
    }
  }
   
  //singletons grids
  var grid = [];
  for(var i = 0; i < layer.length; i+=3){
    for(var j = 0; j < layer[i].length; j+=3){
      for(var y = i; y < 3 + i ; y++){
        for(var x = j; x < 3 + j; x++){          
          if (puzzle[y][x] != 0) grid.push(puzzle[y][x]);          
        }
      }
      for(var y = i; y < 3 + i ; y++){
        for(var x = j; x < 3 + j; x++){          
          if (puzzle[y][x] == 0){
            grid.forEach(g=>{
              layer[y][x] = layer[y][x].filter(s => s!=g);
            });
          }
        }
      }      
      grid=[];
    }
  }
  
  //hidden singletons rows
  for( i = 0; i < layer.length; i++){
    var repeatings = {};
    for( j = 0; j < layer[i].length; j++){      
      if (puzzle[i][j] == 0){
        layer[i][j].forEach(s => {
          repeatings[s] = +repeatings[s] +1 || String(i) + String(j) + 1;
        });
      }      
    }
    //console.log(repeatings);
    for (var key in repeatings){
        if (+String(repeatings[key])[2] == 1)
          layer[+String(repeatings[key])[0] || 0][+String(repeatings[key])[1] || 0] = layer[+String(repeatings[key])[0] || 0][+String(repeatings[key])[1] || 0].filter(s => s == +key);
          //puzzle[+String(repeatings[key])[0] || 0][+String(repeatings[key])[1] || 0] = +key;
    }
    repeatings = {};
  }
  
  //hidden singletons cols
  for( i = 0; i < layer.length; i++){
    var repeats = {};
    for( j = 0; j < layer[i].length; j++){      
      if (puzzle[j][i] == 0){
        layer[j][i].forEach(s => {
          repeats[s] = +repeats[s] +1 || String(j) + String(i) + 1;
        });
      }
      //console.log(repeats);
      // console.log(layer[j][i]);
    }
    for (var key in repeats){
        if (+String(repeats[key])[2] == 1)
          layer[+String(repeats[key])[0] || 0][+String(repeats[key])[1] || 0] = layer[+String(repeats[key])[0] || 0][+String(repeats[key])[1] || 0].filter(s => s == +key);
          //puzzle[+String(repeats[key])[0] || 0][+String(repeats[key])[1] || 0] = +key;
    }
    repeats = {};
  }
      
  //substitution
  for(var i = 0; i < layer.length; i++){
    for(var j = 0; j < layer[i].length; j++){
      if(layer[i][j].length == 1)
        puzzle[i][j] = layer[i][j][0];
      //console.log(layer[j][i]);
    }
  }  
  
  var el=0;
  puzzle.forEach(arr => arr.forEach(elem => el+=elem ));
  if(el==405) return puzzle;
  else {
    //console.log(puzzle);
    return sudoku(puzzle);
  }
   
  return puzzle;
}

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

console.log(sudoku(puzzle));

/*[[5,3,4,6,7,8,9,1,2],
   [6,7,2,1,9,5,3,4,8],
   [1,9,8,3,4,2,5,6,7],
   [8,5,9,7,6,1,4,2,3],
   [4,2,6,8,5,3,7,9,1],
   [7,1,3,9,2,4,8,5,6],
   [9,6,1,5,3,7,2,8,4],
   [2,8,7,4,1,9,6,3,5],
   [3,4,5,2,8,6,1,7,9]]
*/
/*
function sudoku(puzzle) {
  const valid = (x,y) => {
    var v = [];
    for(var i=0; i<3; i++) {
      for(var j=0; j<3; j++) {
        v.push(puzzle[x][i*3+j])
        v.push(puzzle[i*3+j][y])
        v.push(puzzle[3*Math.floor(x/3)+i][3*Math.floor(y/3)+j])
      }
    }
    return [1,2,3,4,5,6,7,8,9].filter(e => v.indexOf(e) == -1)
  }
  const rec = (x,y) => {
    if(y == 9) {
      return puzzle
    } else if (!puzzle[x][y]) {
      const correct = valid(x,y).some(i => {
        puzzle[x][y] = i;
        return rec((x+1)%9,y+(x==9?1:0))
      })
      if (correct)
        return puzzle;
      puzzle[x][y] = 0;
    } else {
      return rec((x+1)%9,y+(x==8?1:0))
    }
  }
  return rec(0,0)
}
//------------------------------------------------------------------------------------
function getp(puzzle, x, y) {
  var hash = {};
  for (var u = 0; u < 9; u++) hash[ puzzle[y][u] ] = 1;
  for (var u = 0; u < 9; u++) hash[ puzzle[u][x] ] = 1;
  for (var u = 0; u < 9; u++) hash[ puzzle[ 3*((y/3)|0) + ((u/3)|0) ][ 3*((x/3)|0) + (u%3) ] ] = 1;
  
  var poss = [];
  for (var i = 1; i <= 9; i++) if (!(i in hash)) poss.push(i);
  return poss;
}

function sudoku(puzzle) {
  var indicies = [], n = 0;
  for (n = 0; n < 9*9; n++) if (puzzle[(n/9)|0][n%9] === 0) indicies.push({ v: n, p: null, i: 0});
  
  n = 0;
  while (n < indicies.length) {
    var c = indicies[n], y = (c.v/9)|0, x = c.v%9;
    c.p = c.p || getp(puzzle, x, y);    
    if (c.i >= c.p.length) {
      puzzle[y][x] = 0;
      c.i = 0;
      c.p = null;
      n--;
    } else {
      puzzle[y][x] = c.p[c.i++];
      n++;
    }
    
  }
  
  return puzzle;
}//------------------------------------------------------------------------------------

function sudoku(pz) {                                                   
  var pr=[...Array(9)].map(x=>[...Array(9)]);                           
  for (var i=0;i<9;i++) for (var j=0;j<9;j++) pr[i][j]=pz[j][i];        
  var n0=pz.reduce((a,b)=>a+b.filter(x=>x==0).length,0);                
  var checkfor=(x,y)=>{                                                 
    var v=pz[x].concat(pr[y]);                                          
    [0,1,2].forEach(z=>v=v.concat(pz[x-x%3+z].slice(y-y%3,y-y%3+3)));
    v=v.filter(n=>typeof n=='number'&&n!=0).reduce((a,b)=>a.indexOf(b)==-1 ? a.concat(b) : a,[]);
    if (v.length==8) {                                                  
      var tmp=45-v.reduce((a,b)=>a+b);
      pz[x][y]=tmp , pr[y][x]=tmp , n0--;
    }
  }
  for (var k=0;k<1000&&n0>0;k++)  for (var i=0;i<9;i++) for (var j=0;j<9;j++) if (isNaN(pz[i][j])||!pz[i][j]) checkfor(i,j);
  return pz;
}
*/