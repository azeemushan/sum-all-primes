function pf(num){  
  for(let i=num-1; i>1; i--){
    if(num%i==0){
      
      return false;
    }
    }
    return true;
  }

function sumPrimes(num) {
  let x=0;
  for(let i=2; i<=num; i++){
  if(pf(i)){
    x+=i;
  }
  }
  return x;
}

let z=sumPrimes(10);
console.log(z);
