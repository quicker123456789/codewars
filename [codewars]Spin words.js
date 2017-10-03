function spinWords(str){
  return str.split(' ').map(word=> word.length>=5 ? word.split('').reverse().join('') : word).join(' ');
}

console.log(spinWords("Hey fellow warriors")); // Hey wollef sroirraw"
