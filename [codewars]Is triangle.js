function isTriangle(a,b,c)
{
   var p = (a+b+c)/2;
  return (p-a)>0 && (p-b)>0 &&(p-c)>0
}

console.log(isTriangle(7,2,2)); // false