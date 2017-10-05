function persistence(num){ 
  var arr = String(num).split(''), sum = 0;
  while (arr.length != 1){
    sum++;
    num = arr.reduce((mult, d)=>mult*parseInt(d));
    arr = String(num).split('');
  }
  return sum;
}

console.log(persistence(999));
console.log(persistence(4));// 4 because 9*9*9 = 729, 7*2*9 = 126,
                              // 1*2*6 = 12, and finally 1*2 = 2

/*
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}
*/