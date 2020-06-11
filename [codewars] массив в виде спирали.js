// обратная спираль (из центра), в центр: 
// value = size; ++value

let spiralize = (size) => {
  let spiral = [];
  let value = size**2;
  let left = 0, up = 0, right = size, down = size;
  let i = 0, j = 0;
  
  while (size) {
    spiral[--size] = [];
  }
  
   while(value > 0){
    for (j = left; j < right; j++) {
      spiral[up][j] = value--;
    }
    up++;
    
    for (i = up; i < down-1; i++) {
      spiral[i][right-1] = value--;
    }
    right--;
    
    for(j = right; j > left; j--) {
      spiral[down-1][j] = value--;
    }
    down--;
    
    for(i = down; i >= up; i--) {
      spiral[i][left] = value--;
    }
    left++;        
  } 
  
  return spiral;
}

spiralize(6).forEach(x => console.log(x));

