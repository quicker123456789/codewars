function iqTest(numbers){ //evenness
  numbers = numbers.split(' ');
  var odd = numbers.filter(elem => parseInt(elem)&1);
  var even = numbers.filter(elem => ~parseInt(elem)&1);
  
  return (odd.length > 1) ? numbers.indexOf(even[0])+1 : numbers.indexOf(odd[0])+1;
}

console.log(iqTest("2 4 7 8 10")); // 3rd element
