class Vector{
  constructor(array){
    this.array = array;
    this.N = array.length;
  }
  add(vector){
    if(this.N != vector.N) throw new Error('fail');
    return new Vector(this.array.map((digit,i)=>vector.array[i] + digit));
  }
  subtract(vector){
    if(this.N != vector.N) throw new Error('fail');
    return new Vector(this.array.map((digit,i)=>digit-vector.array[i]));
  }
  dot(vector){
    if(this.N != vector.N) throw new Error('fail');
    return this.array.reduce((sum,digit,i)=>sum+digit*vector.array[i],0);
  }
  norm(){
    return Math.sqrt(this.array.reduce((sum,elem)=>sum+elem*elem,0) );
  }
  toString(){
    return '(' + this.array.reduce((str,item)=>str+String(item)+',',0).slice(1,-1) + ')';
  }
  equals(vector){
    return this.array.every((elem,i)=>elem==vector.array[i]);
  }
}

var v1 = new Vector([1,2,3,4]);
var v2 = new Vector([1,2,3,4]);
console.clear();
console.log(v1.toString());
console.log(String(v1.add(v2)));
var a = new Vector([1,2]);
var b = new Vector([3,4]);
console.log( a.add(b).equals(new Vector([4,6])) );

/*
var Vector = function (components) {
  this.items = components;
  this.length = components.length;
};

Vector.prototype = {
  do: function (action, vector) {
    if (vector.length !== this.length) { throw 'Different Length!'; }
    return new Vector(this.items.map(function (v, k) { 
      return eval(v + action + vector.items[k])
    }));
  },
  add: function (v) { return this.do('+', v); },
  subtract: function (v) { return this.do('-', v); },
  sum: function (v) { return eval(v.items.join('+')); },
  dot: function (v) { return this.sum(this.do('*', v)); },
  norm: function () { return Math.sqrt(this.dot(this)); },
  toString: function() { return '(' + this.items + ')'; },
  equals: function (v) { return this.toString() == v.toString(); }  
};


*/
