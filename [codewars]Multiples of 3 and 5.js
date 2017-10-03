function solution(number){ // multiples 3,5 < number
  var res = {};
  for(var i = 1 ; i < number; i++)
    if(i%3==0 || i%5==0) res[i] = true;
  return Object.keys(res).length == 0 ? 0 : Object.keys(res).reduce((sum,num)=> parseInt(sum)+parseInt(num), 0);
}

/*
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
*/

console.log(solution(4)); // 3+5+6+9+10+12+15 = 60