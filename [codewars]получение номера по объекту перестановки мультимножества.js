//погрешности на очень больших значениях => надо использовать длинную арифметику

function factorial(n){   //рекурсивное вычисление
  if(n<0) return n;
  return n==0||n==1 ? 1 : n*factorial(n-1);
}

function factorialong(n){   
  
}

function toNum(word){
  var obj = {}, arr = word.split('').sort();
  arr.forEach((letter, ind)=>obj[letter] = obj[letter] || obj[arr[ind-1]]+1 || 1);
  return word.split('').map(letter=>{
    return obj[letter];
  });
}
console.log(toNum('bookkeeper'));


function listPosition(word){
  var numbers = toNum(word); // array  
  var result = 1, fact, multifact=1, sum=0;
  
  for (var i = 0; i < numbers.length; i++){    
    var repeats = {}, tmp=[];
    for (var k = i; k < numbers.length; k++){
      tmp.push(numbers[k]);
    }
    tmp.forEach(num=>repeats[num] = repeats[num] + 1 || 1);
    
    for (var j = i; j < numbers.length; j++){      
      var c = numbers[j];
      if (numbers.indexOf(c) != j) continue;
      multifact *= factorial(repeats[c]);
    }
    
    fact = factorial(numbers.length - i)/multifact;
    
    repeats = {}, tmp = [];
    for (k = i+1; k < numbers.length; k++){
      tmp.push(numbers[k]);
    }
    tmp.forEach(num=>repeats[num] = repeats[num] + 1 || 1);
      
      for (k = 1; k < numbers[i]; k++){      
        if (repeats[k]) sum += repeats[k];
      }
   
   // console.log(fact+' '+ multifact +' '+sum);
    
    result += fact * sum / (numbers.length - i);

    multifact = 1;
    sum = 0;    
    repeats = {}, tmp = [];
  }
  
  return result;
}

console.log(listPosition('bookkeeper')); //10743
console.log(listPosition('abab')); //2