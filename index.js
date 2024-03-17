function isPrime(n){
  if(n<=1){
    return false;
  }
  for(var i=2;i<n;i++){
    if(n%i==0){
        return false;
    }
  }
  return true;
}

var k = isPrime(3);
console.log(k);