function stripUrlParams(url, paramsToStrip){
//  var url = arguments[0];
//  var paramsToStrip = arguments[1];
  var query = url.split('?'), obj={}, str='';
  
  if(!query[1]) return url;  
  query[1].split('&').forEach(pair=>{
    var p = pair.split('=');
    if(!obj[p[0]]) obj[p[0]] = p[1];
  });
  if (paramsToStrip) paramsToStrip.forEach(elem=> delete obj[elem]);
  for(var key in obj) str+= key + '=' + obj[key] + '&';
  return query[0] + '?' + str.slice(0,-1);
}


console.clear();
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']));

/*
function stripUrlParams(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
   });
}
*/