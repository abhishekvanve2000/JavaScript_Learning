

let result =1;

for (let index = 1; index <=10; index++) {
         result = result * index;
    
}
//console.log(`factorial of 10 is ${result}`);








// using recursion


let resultt=1;
function factorial(num) {
    
    if (num===1) {
        return 1;

    } else {
      resultt= num * factorial(num-1) ;      //5*(4*(3*(2*(factorial(1)))))   
      return resultt
       
    }
     
}

factorial(10)
console.log(`factorial using recursion in ${resultt}`);