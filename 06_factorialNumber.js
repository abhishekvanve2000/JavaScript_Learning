

let result =1;

for (let index = 1; index <=10; index++) {
         result = result * index;
    
}
console.log(`factorial of 10 is ${result}`);








// using recursion


var fact=1;
function factorial(num) {
        //1*2*3*4*5
    if (num==1) {
        return 1;

    } else {
     fact = num * factorial(num-1) ; //5   
    }
     
}

factorial(5)
console.log(`factorial using recursion in ${fact}`);