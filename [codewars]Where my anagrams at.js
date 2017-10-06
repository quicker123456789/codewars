function anagrams(word, array){
  word = word.split('').sort().join('');
  return array.filter(w=>{
    if (w.split('').sort().join('') == word) return w;
  });  
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));//['aabb', 'bbaa']

