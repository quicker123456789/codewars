function orderWeight(string){
  
  function toSum(num){
    return num.split('').reduce((sum, d)=> sum + parseInt(d),0);
  }
  
  return string.split(' ').sort((a,b)=> toSum(a)-toSum(b)==0 ? a.localeCompare(b) : toSum(a)-toSum(b) ).join(' ');  
}

console.log(orderWeight("2000 10003 22 123"));
//"11 11 2000 10003 22 123 1234000 44444444 9999"
