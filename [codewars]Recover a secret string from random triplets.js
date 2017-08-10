/*
  whatisup
w 2										0   1   2
h 3								0 ['t','u','p'],
a 2								1 ['w','h','i'],
t 4								2 ['t','s','u'],
i 2								3 ['a','t','s'],
s 4								4 ['h','a','p'],
u 2								5 ['t','i','s'],
p 2								6 ['w','h','s']

*/  
//проверка каждого элемента с каждым, здесь - поиск первой буквы в парах
function findNext(couples){
	var next = couples.find(function(couple){
		return couples.every(function(coup){
			return couple[0] !== coup[1];
		});
	});
	return couples.length > 1 ? next[0] : couples[0];
}

var recoverSecret = function(triplets) {
  var couples = [], result = '';

  triplets.forEach(function(triple){
  	var str = triple.join('');
  	var couple1 = str.slice(0, -1);
		var couple2 = str.slice(-2);
  	if (couples.indexOf(couple1) === -1) { couples.push(couple1); } 
    if (couples.indexOf(couple2) === -1) { couples.push(couple2); }
  });
  
  var next = findNext(couples);
  while(next){  	
  	result += next;
  	couples = couples.filter(function(c){  //удаление всех пар с первой найденной буквой
  		return c.indexOf(next) == -1;  		
  	});   	
  	next = findNext(couples);
  }

  return result;
};

alert(recoverSecret([
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
])); // whatisup

/*
var recoverSecret = function(triplets) {
  for(var [first] of triplets)
  {
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}
//------------------------------------------------------------------------
var recoverSecret = function(triplets) {
  var nodes = []
  var graph = {}
  var sortedlist = []

  function visit(node) {
    if (sortedlist.indexOf(node) < 0) {
      (graph[node] || []).forEach(function (node2) { visit(node2) })
      sortedlist.unshift(node)
    }
  }

  triplets.forEach(function (triplet) {
    triplet.forEach(function (node) {
      if (nodes.indexOf(node) < 0) nodes.push(node);
    })
    graph[triplet[0]] = (graph[triplet[0]] || []).concat(triplet[1])
    graph[triplet[1]] = (graph[triplet[1]] || []).concat(triplet[2])
  })

  while (nodes.length) visit(nodes.pop());
  return sortedlist.join('');
}
*/