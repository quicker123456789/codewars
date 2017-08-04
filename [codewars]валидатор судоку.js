
function validSudoku(board){
  var rowCheck = function(bd){
     for(var i = 0; i < bd.length; i++){
       for( var j = 0; j < bd[i].length; j++){
         for( var k = j+1; k < bd[i].length; k++){
           if (bd[i][j] != 0){
             if(bd[i][j] == bd[i][k]) return false;
           }else 
            return false;
         }
       }
     } return true;
  };
  
  var colCheck = function(bd){
     for(var i = 0; i < bd.length; i++){
       for( var j = 0; j < bd[i].length; j++){
         for( var k = j+1; k < bd[i].length; k++){
           if(bd[j][i] == bd[k][i]) return false;
         }
       }
     } return true;
  }; 
  
  var gridCheck = function(bd){
    var grid = [];
    for(var i = 0; i < bd.length; i+=3){
       for(var j = 0; j < bd[i].length; ){
         grid.push(bd[i].splice(j,3).concat(bd[i+1].splice(j,3)).concat(bd[i+2].splice(j,3)));
         if (!rowCheck(grid) ) return false;
         else grid = [];
       }
    }
    return true;
  };
  
  return rowCheck(board) && colCheck(board) && gridCheck(board);
}

//true
alert(validSudoku([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                   [6, 7, 2, 1, 9, 5, 3, 4, 8],
                   [1, 9, 8, 3, 4, 2, 5, 6, 7],
                   [8, 5, 9, 7, 6, 1, 4, 2, 3], 
                   [4, 2, 6, 8, 5, 3, 7, 9, 1], 
                   [7, 1, 3, 9, 2, 4, 8, 5, 6],
                   [9, 6, 1, 5, 3, 7, 2, 8, 4], 
                   [2, 8, 7, 4, 1, 9, 6, 3, 5], 
                   [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
//false
alert(validSudoku([[1, 2, 3, 4, 5, 6, 7, 8, 9],
                   [2, 3, 1, 5, 6, 4, 8, 9, 7],
                   [3, 1, 2, 6, 4, 5, 9, 7, 8],
                   [4, 5, 6, 7, 8, 9, 1, 2, 3], 
                   [5, 6, 4, 8, 9, 7, 2, 3, 1], 
                   [6, 4, 5, 9, 7, 8, 3, 1, 2],
                   [7, 8, 9, 1, 2, 3, 4, 5, 6], 
                   [8, 9, 7, 2, 3, 1, 5, 6, 4], 
                   [9, 7, 8, 3, 1, 2, 6, 4, 5]]));
/*
function validSolution(board){
  var validSet = s => s.size == 9 && !s.has(0);
  var rowSet = i => board[i].reduce((s,v) => s.add(v), new Set());
  var columnSet = i => board.reduce((s,v) => s.add(v[i]), new Set());
  var boxSet = ([r,c]) => board.slice(r,r+3).reduce((s,v) => v.slice(c,c+3).reduce((s,v) => s.add(v), s), new Set());
  var boxCorner = i => [Math.floor(i / 3) * 3,(i % 3) * 3];
  for (var i = 0; i < 9; i++)
    if ( !validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i))) )
      return false;
  return true;
}
---------------------------------------------------------------------
function equals45(n){
  return n == 45;
}

function validSolution(board){
  var sumh = [0,0,0,0,0,0,0,0,0];
  var sumv = [0,0,0,0,0,0,0,0,0];
  osums = [[0,0,0],[0,0,0],[0,0,0]];
  for (var i=0;i<9;i++){
    for (var j=0;j<9;j++){
      sumh[i] += board[i][j];
      sumv[j] += board[i][j];
      osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
    }
  }
  for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
  return (sumh.every(equals45) && sumv.every(equals45));
}
--------------------------------------------------------------------
function validSudoku(data) {
    var valid = true, 
        temp = [], 
        data,
        side,
        slot;


    // Check wrong size
    if (data[0].length !== data.length) valid = false;

    // slot*slot
    slot = Math.sqrt(data.length);

    // Verifiy horizontal
    data.forEach(function(arr) {
        valid = valid && arr.every(function(val, i) { return arr.indexOf(i + 1) > -1; });
    });

    // Verifiy vertical lines
    data.forEach(function(arr, i) {
        temp  = data.map(function(val) { return val[i]; });
        valid = valid && arr.every(function(val, i) { return temp.indexOf(i + 1) > -1; });
    });

    // Verifiy boxes
    for (var i = 0; i < slot; i++) {

        data.forEach(function(val, e) {
            side  = val.slice(slot * i, slot * i + slot);
            temp  = temp.concat(side);

            if ((e+1) % slot == 0 && e > 0) {
                for (var j = 1; j <= data.length; j++)
                    if (temp.indexOf(j) < 0) valid = false;                 
                temp = [];
            }

        });

    }
    return valid;
}
*/