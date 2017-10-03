 function getMiddle(s){
 	return s.length&1 ?s[Math.floor(s.length/2)] : s[s.length/2-1] + s[s.length/2];
}
 /*
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
 */