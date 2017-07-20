var countBits = function(n) {
  var amount = 0;  
  var nbinary = n.toString(2);
  
  for (var i = 0; i < nbinary.length; i++) {
    if (nbinary.charAt(i) == '1')
      amount++;
  }
  
  return amount;
};

alert(countBits(7));  // выведет 3, т.к. 7 по основанию 2  = 111