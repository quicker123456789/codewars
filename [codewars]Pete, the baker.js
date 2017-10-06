function cakes(recipe, ingredients){
  var amount = [], common = [];
  for (var ing in recipe) amount.push(Math.floor(ingredients[ing]/recipe[ing]));
  return Math.min(...amount) || 0;
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
//2
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
//0

/*
function cakes(recipe, available) {
  var numCakes = [];
  
  for(var key in recipe){
    if(recipe.hasOwnProperty(key)){
      if(key in available){
        numCakes.push(Math.floor(available[key] / recipe[key]));
      }else{
        return 0;
      }
    }
  }
  
  return Math.min.apply(null, numCakes); 
  
}

const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)
*/