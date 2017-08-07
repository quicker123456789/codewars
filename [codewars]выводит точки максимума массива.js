
function pickPeaks(arr){
  var obj = {pos: [], peaks: []};
  if (arr.length > 0){
    var position = -1;
    for(var i = 1; i < arr.length; i++){
      if (arr[i] > arr[i-1])
        position = i;
      else if (arr[i] < arr[i-1] && position != -1){
        obj.pos.push(position);
        obj.peaks.push(arr[position]);
        position = -1;
      }
    }
  }
  return obj;  
}

var array = [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3];
var object = pickPeaks(array);
for (var key in object){
  alert (key + ': ' + object[key]);
}

/*
function pickPeaks(arr){
  var pos = arr.map((x,i)=>i > 0 ? Math.sign(x - arr[i-1]) * i : 0)
    .filter(i => i != 0)
    .filter((x,i,a) => i < a.length-1 && (a[i+1] < 0 && x > 0));
  return {pos:pos, peaks:pos.map(i=>arr[i])}
}

function pickPeaks(arr) {
  console.log(arr);
  var peaks = {pos:[],peaks:[]}, posPeak = arr[0], posPos, upward = false;
  arr.forEach(function(v, i, arr) {
    if(v > posPeak) {
      posPos = i;
      upward = true;
    } else if (v < posPeak && upward) {
      peaks.pos.push(posPos);
      peaks.peaks.push(posPeak);
      upward = false;
    }
    posPeak = v;
  });
  return peaks;
}
*/