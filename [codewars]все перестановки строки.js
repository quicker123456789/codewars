
function permutations(string) {
  if (string.length < 2) return string; // This is our break condition

  var permuts = []; // This array will hold our permutations

  for (var i=0; i<string.length; i++) {
      var char = string[i];

      // Cause we don't want any duplicates:
      if (string.indexOf(char) != i) // if char was used already
          continue;           // skip it this time

      var remainingString = string.slice(0,i) + string.slice(i+1,string.length);

      for (var subPermutation of permutations(remainingString))
          permuts.push(char + subPermutation); // i-буква + остальные перемешанные

  }
  return permuts;
}

/*
function permutations(str) {
 return (str.length <= 1) ? [str] :
         Array.from(new Set(
           str.split('')
              .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
              .reduce((r, x) => r.concat(x), [])
         ));
}

function permutations (string) {
  if (string.length === 1) { return [string]; }

  var split = string.split("")
    , perms = []
    , i, l;

  for(i = 0, l = split.length; i < l; i++) {
    var remainder = split.slice(0)
      , firstChar = remainder.splice(i, 1)[0]
      , remainderPerms = permutations(remainder.join(""));

    remainderPerms.forEach(function (perm) {
      perm = firstChar + perm;
      if (perms.indexOf(perm) === -1) { perms.push(perm) };
    });
  }

  return perms;
}
*/


alert(permutations('a')); // ['a']
alert(permutations('ab')); // ['ab', 'ba']
alert(permutations('aabb').sort()); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

