function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(sheep => sheep === true).length;
}

/*
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
*/