function identifyPrime(num) {
    // Write code here
    let flag=1;
    for(let i=2; i<=num-1 ;i++){
      if(num%i==0)
      {
          flag=0;
          break;
      }
      else
    {
        flag=1;
    }

    }
    
    
    if(flag==1)
    {
        console.log("Yes")
    }
    else
    {
        console.log("No")
    }
}