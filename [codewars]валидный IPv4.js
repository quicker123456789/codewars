function isValidIP(str) {
  var reg = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/gi;
  return str.search(reg) != -1;
}

/*
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

function isValidIP(str) {
  return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
}

const net = require('net');
const isValidIP = (s) => net.isIP(s);


*/

alert(isValidIP('233.45.67.89'));