function solve(map, miner, exit){
  var directions = {'0,1' :'up', // down
                    '-1,0' : 'right', // left
                    '0,-1' : 'down', // up
                    '1,0' : 'left'}; // right
  var result = [];
  var wall = -1, blank = -2;
  var stop, d = 0, x, y, k;
  var dx = [1, 0, -1, 0];   // смещения, соответствующие соседям ячейки
  var dy = [0, 1, 0, -1];   // справа, снизу, слева и сверху
  var px = [], py = [];     // координаты ячеек, входящих в путь
  var len;                  // длина пути
  var grid = map[0].map((col, i) => map.map(row => row[i] ? blank : wall)); //транспонирование
  var mapHeight = grid.length, mapWidth = grid[0].length;
  
  if (grid[miner.y][miner.x] == wall || grid[exit.y][exit.x] == wall) return [];  // начальная или конечная ячейка стена
  
  // распространение волны
  grid[miner.y][miner.x] = 0;
  do{
    stop = true;  // предполагаем, что все свободные клетки уже помечены
    for ( y = 0; y < mapHeight; y++ )
      for ( x = 0; x < mapWidth; x++ )
        if (grid[y][x] == d){
          for ( k = 0; k < 4; k++ ){ // проходим по всем непомеченным соседям          
             var iy = y + dy[k], ix = x + dx[k];            
             if (iy >= 0 && iy < mapHeight && 
                 ix >= 0 && ix < mapWidth &&
                  grid[iy][ix] == blank){
                stop = false;              // найдены непомеченные клетки
                grid[iy][ix] = d + 1;      // распространяем волну
             }
          }
        }      
    d++;
  }while(!stop && grid[exit.y][exit.x] == blank);
  console.log(grid);

  if (grid[exit.y][exit.x] == blank) return [];  // путь не найден
  
  // восстановление пути
  len = grid[exit.y][exit.x]; // длина кратчайшего пути
  x = exit.x;
  y = exit.y;
  d = len;
  while (d > 0)
  {
    px[d] = x;
    py[d] = y;    // записываем ячейку (x, y) в путь
    d--;
    for (k = 0; k < 4; ++k)
    {
       var iiy = y + dy[k], iix = x + dx[k];      
       if (iiy >= 0 && iiy < mapHeight &&
           iix >= 0 && iix < mapWidth &&
            grid[iiy][iix] == d){
        x += dx[k];
        y += dy[k];         // переходим в ячейку, которая на 1 ближе к старту        
        result.push(directions[dx[k]+','+dy[k]]);
        break;        
      }
    }
  }
  px[0] = miner.x;
  py[0] = miner.y;  // теперь px[0..len] и py[0..len] - координаты ячеек пути
  
  console.log(grid, px, py);
  return result.reverse();
}

var map = [[true, true, true],
           [false, false, true],
           [false, false, true]];

console.log(solve(map, {x:0,y:0}, {x:2,y:2}));//['down', 'down', 'right', 'right']

/*
function solve(map, miner, exit) {
  var walked = {};

  var findExit = function (curX, curY, path) {

    if ((curX == exit.x) && (curY == exit.y)) {
      return path;
    }
    
    if (!map[curX] || !map[curX][curY] || walked[curX+'x'+curY]) {
      return;
    }
    
    walked[curX+'x'+curY] = true;

    return findExit(curX + 1, curY, path.concat('right'))
      || findExit(curX, curY + 1, path.concat('down'))
      || findExit(curX - 1, curY, path.concat('left'))
      || findExit(curX, curY - 1, path.concat('up'))
    ;  
  };

  return findExit(miner.x, miner.y, []);
}
//------------------------------------------------------------------------
function solve(map, miner, exit, path=[]) {
  if (!map[miner.x] || !map[miner.x][miner.y]) return false;
  if (miner.x == exit.x && miner.y == exit.y) return path;
  map = map.map(v => v.slice());
  map[miner.x][miner.y] = false;
  return solve(map, {x: miner.x    , y: miner.y - 1}, exit, path.concat('up')) ||
         solve(map, {x: miner.x    , y: miner.y + 1}, exit, path.concat('down')) ||
         solve(map, {x: miner.x - 1, y: miner.y    }, exit, path.concat('left')) ||
         solve(map, {x: miner.x + 1, y: miner.y    }, exit, path.concat('right'));
}

*/