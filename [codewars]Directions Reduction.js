/*
function dirReduc(directions) {
  var obj = {"NORTH":"SOUTH", "SOUTH":"NORTH",
             "EAST":"WEST", "WEST":"EAST"};
  while(true)
  directions.forEach((dir, i)=> {
    if (directions[i+1] == obj[dir]) directions.splice(i,2);
  });
  return directions;
}
*/
function dirReduc(directions) {
  var obj = {"NORTH":"SOUTH", "SOUTH":"NORTH",
             "EAST":"WEST", "WEST":"EAST"};
  var i = 0;
  while(i < directions.length){
    if (directions[i+1] == obj[directions[i]]){
      directions.splice(i,2);
      i--;
    } else i++;
  }
  return directions;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
//[west]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));

/*
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

function dirReduc(arr){
  var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
  return arr.reduce(function (a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    return a
  }, [])
}

function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}
*/