function score(dice){ 
	var obj = {}, result = 0;
  dice.forEach(dig=> obj[dig] = obj[dig]+1 || 1);
  for(var key in obj){
  	switch(key){
    	case '1': result += obj[key]>2 ? 1000+(obj[key]-3)*100 : obj[key]*100;
     					  break;
			case '2': result += obj[key]>2 ? 200 : 0;
     					  break;
      case '3': result += obj[key]>2 ? 300 : 0;
     					  break;
      case '4': result += obj[key]>2 ? 400 : 0;
     					  break;
      case '5': result += obj[key]>2 ? 500+(obj[key]-3)*50 : obj[key]*50;
  					    break;
      case '6': result += obj[key]>2 ? 600 : 0;
  					    break;
    }	
  }
  return result;
}
/*
function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}

function score(dice) {
  var retval = 0;
  
  for(let i = 1; i <= 6; i++) {
    let d = dice.filter((v) => { return v == i; }).length;
    if(!d) continue;

    if(i == 1) retval += (d / 3 | 0) * 1000 + (100 * (d % 3));
    else retval += (d / 3 | 0) * 100 * i;
    
    if(i == 5) retval += (d % 3) * 50;
  }

  return retval;
}
*/