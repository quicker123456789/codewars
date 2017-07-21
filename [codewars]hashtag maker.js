function generateHashtag (str) {
	if (str.length > 140 || str.length == 0) return false;
	
  return '#' + str.split(' ').map(function(item){
  	item = item.charAt(0).toUpperCase() + item.slice(1);
    return item;
  }).join('');
}


 alert(generateHashtag('there thanks for trying my Kata')); // #ThereThanksForTryingMyKata