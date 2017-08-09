function coordValidator(coordinates){
	var coords = coordinates.split(', ')
	if (coords[0] >= -90 && coords[0] <= 90 && 
			coords[1] >= -180 && coords[1] <= 180){
	
		regexp = /^-?\d+(\.\d+)?, -?\d+(\.\d+)?$/g;
		return coordinates.search(regexp) != -1;
	}	else return false;
}

alert(coordValidator('0, 1,2"')); // false

/*
function isValidCoordinates(coordinates){
  return /^-?((\d)|([0-8]\d)|(90))(\.\d+)?, ?-?((\d\d?)|(1[0-7]\d)|(180))(\.\d+)?$/.test(coordinates)
}

function isValidCoordinates(coordinates){
  return /^\-?([0-8]\d|90|\d)(\.\d*)?, ?\-?(1[0-7]\d|\d\d?|180)(\.\d*)?$/.test(coordinates); 
}
*/