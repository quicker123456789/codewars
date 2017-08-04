function endS (number) {
        return (number > 1) ? 's' : '';
    }

function formatDuration(seconds) {
  if(seconds > 0){
    var array = [];
    var sec = seconds % 60;
    var min = Math.floor(seconds / 60) % 60;
    var hr = Math.floor(seconds / 3600) % 24;
    var day = Math.floor(seconds / 3600 / 24) % 365;
    var ys = Math.floor(seconds / 3600 / 24 / 365);
    
    s = sec ? sec + ' second' + endS(sec) : '';
    m = min ? min + ' minute' + endS(min) : '';
    h = hr ? hr + ' hour' + endS(hr) : '';
    d = day ? day + ' day' + endS(day) : '';
    y = ys ? ys + ' year' + endS(ys) : '';
    
    array.push(y, d, h, m, s);
    array = array.filter(function(item){
      return item;
    });
    
    return (array.length == 1) ? array[0] : array.slice(0, array.length - 1).join(', ') + ' and ' + array[array.length - 1];
    
  } else return 'now';
}

alert (humanReadable(3001));// '23 hours, 59 minutes and 59 seconds'

/*
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}

function formatDuration (seconds) {
  if (seconds==0) return "now";
  time=[['second', 'minute', 'hour', 'day', 'year'],[60, 60, 24, 365]];
  numres=[];
  for (i in time[1]){
    numres.push(seconds%time[1][i]);
    seconds=Math.floor(seconds/time[1][i]);
  }
  numres.push(seconds%time[1][i]);
  res=[];
  for (i in numres){
    if (numres[i]==1) res=[numres[i]+" "+time[0][i]].concat(res);
    else if (numres[i]>1) res=[numres[i]+" "+time[0][i]+"s"].concat(res);
  }
  if (res.length>1){
      res[res.length-2]+=" and "+res.pop();
  }
  return res.join(", ");
}
*/