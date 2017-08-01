function num(val){
      val = Math.floor(val);
      return val < 10 ? '0' + val : val;
}

function humanReadable(seconds) {
  var s = seconds % 60;
  var m = Math.floor(seconds / 60) % 60;
  var h = Math.floor(seconds / 3600);

  return  num(h) + ":" + num(m) + ":" + num(s);
}

/*
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}
*/

alert (humanReadable(86399));// '23:59:59'