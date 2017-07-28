//----------------Используется алгоритм Барейса, сложность O(n^3)---------
function deter(A)  
{
    var N = A.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i)
     { B[i] = [];
       for (var j = 0; j < N; ++j) B[i][j] = A[i][j];
     }
    for (var i = 0; i < N-1; ++i)
     { var maxN = i, maxValue = Math.abs(B[i][i]);
       for (var j = i+1; j < N; ++j)
        { var value = Math.abs(B[j][i]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { var temp = B[i]; B[i] = B[maxN]; B[maxN] = temp;
          ++exchanges;
        }
       else { if (maxValue === 0) return maxValue; }
       var value1 = B[i][i];
       for (var j = i+1; j < N; ++j)
        { var value2 = B[j][i];
          B[j][i] = 0;
          for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[i][k]*value2)/denom;
        }
       denom = value1;
     }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}
//----------------Рекурсия------------------------------------------------
function determinant(A){  
    var n = A.length, subA = [], detA = 0;
        
    if (n==1) return A[0][0];
    if (n==2) return (A[0][0]*A[1][1]-A[0][1]*A[1][0]);
    if (n==3){
      return ((A[0][0]*A[1][1]*A[2][2]+A[0][1]*A[1][2]*A[2][0]+A[0][2]*A[1][0]*A[2][1])
                 -(A[0][0]*A[1][2]*A[2][1]+A[0][1]*A[1][0]*A[2][2]+A[0][2]*A[1][1]*A[2][0]));
    }

    for (var i=0; i<n; i++){
      for (var h=0; h<n-1; h++) subA[h]=[];
          for (var a=1; a<n; a++){
            for (var b=0; b<n; b++){
              if (b<i) subA[a-1][b] = A[a][b];
              else if (b>i)  subA[a-1][b-1] = A[a][b];
            }
          }
    var sign = (i%2===0) ? 1 : -1;
    detA += sign * A[0][i] * вeterminant(subA);
    }

    return detA;
}

/*
function determinant(m) {
  // 1 x 1 ===> return value
  if ((m.length === 1) && (m[0].length === 1)) {
    return m[0][0];
  }

  // 2 x 2
  if ((m.length === 2) && (m[0].length === 2)) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }

  // n x n
  return m[0].reduce(function(a, b, i) {
    b = (i % 2 === 1) ? -b : b;
    return a + b * (determinant(minor(m, i)));
  }, 0);
};

// returns a new matrix with the 1st row and i-th column removed
function minor(m, index) {
    var arr = [];
    for (var i = 1; i < m.length; i++) {
        var inner = [];
        for (var j = 0; j < m[i].length; j++) {
            // skip the value at the given index
            if (j !== index) {
                inner.push(m[i][j]);
            }
        }
        arr.push(inner);
    }
    return arr;
}
*/
alert(determinant([[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2]]));// 0