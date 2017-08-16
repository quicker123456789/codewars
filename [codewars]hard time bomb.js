var wireCode = Object.keys(global).find(function(key){
  return typeof global[key] == 'number';
}); // Find the wire.
Bomb.CutTheWire(global[wireCode]);

/*
for (var name in this) {
  if (typeof this[name] === 'number') {
    Bomb.CutTheWire(this[name]);
  }
}

Object
  .keys(this)
  .filter(function(key) {
    return /boom\d+/.test(key);
  })
  .forEach(function(key) {
    Bomb.CutTheWire(this[key])
  });

for (var i in global) if (i.indexOf('boom') === 0) Bomb.CutTheWire(global[i]);  
*/