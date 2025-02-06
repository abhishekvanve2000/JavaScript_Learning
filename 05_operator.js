


console.log('_____Arithmetic_Operator_____');

var num1= 10;
var num2= 3;



console.log('_Addition_');
var result = num1 + num2;
console.log(`Result is- ${result}`);

console.log('_Substratction_');
var result = num1 - num2;
console.log(`Result is- ${result}`);

console.log('_Multiplication_');
var result = num1 * num2;
console.log(`Result is- ${result}`);

console.log('_Exponentiation_');
var result = num1 ** num2;
console.log(`Result is- ${result}`);


console.log('_division_');
var result = num1 / num2;
console.log(`Result is- ${result}`);


console.log('_Modulas_');
var result = num1 % num2;
console.log(`Result is- ${result}`);



console.log('_______________________________________________________________________________');




console.log('_____Arithmetic_Operator_____');
var num3 = 15;


console.log('_Compound Addition_');
    num3 +=5;
console.log(`Result is- ${num3}`);


console.log('_Compound substaraction_');
    num3 -=5;
console.log(`Result is- ${num3}`);


console.log('_Compound Multiplication_');
    num3 *=5;
console.log(`Result is- ${num3}`);


console.log('_Compound Division_');
    num3 /=5;
console.log(`Result is- ${num3}`);


console.log('_Compound Modulas_');
    num3 %=5;
console.log(`Result is- ${num3}`);








console.log('_______________________________________________________________________________');




console.log('_____Comparison_Operator_____');
var num5 = 20;
var num6 = '20';


console.log('_Eqal ==_');
var result = num5 == num6;
console.log(`Result is- ${result}`);            //covernts to same type before conversion


console.log('_Strict Eqal ===_');
var result = num5 === num6;
console.log(`Result is- ${result}`);            //checks if the value of value and is type is same 

console.log('_Not Eqal !=_');
var result = num5 != num6;
console.log(`Result is- ${result}`);

console.log('_Strict Not Eqal !==_');
var result = num5 !== num6;
console.log(`Result is- ${result}`);            // prints true (Diffrent Data Types)


console.log('_Greater Than >_');
var result = num5 > num6;                       //Cheks If left value is greater than right value
console.log(`Result is- ${result}`);            //False

console.log('_Smaler Than <_');
var result = num5 < num6;                       //Cheks If left value is Smaller than right value
console.log(`Result is- ${result}`);            //False

console.log('_Greater Than Equal >=_');
var result = num5 >= num6;                       //Cheks If left value is Grearter than or Equal right value
console.log(`Result is- ${result}`);            //True

console.log('_Smaller Than Equal <=_');
var result = num5 <= num6;                       //Cheks If left value is Smaller than or Equal right value
console.log(`Result is- ${result}`);            //True








console.log('_______________________________________________________________________________');


console.log('_____Logical_Operator_____');
var num5 = 20;
var num6 = '20';



console.log('_AND &&_');                        //Both COnditions Need To Be True In AND Operator
var result = num6 < num5 && num5 == num6;
console.log(`Result is- ${result}`);            //False (First Constion Is False)


console.log('_OR ||_');                        //One  Of Two COnditions Need To Be True In OR Operator
var result = num6 < num5  || num5 == num6;
console.log(`Result is- ${result}`);            //False (First Constion Is False)


console.log('_Not !_');                        //Converts "True" Into "False" And "False" Into "True"
var result = ! num5 == num6;
console.log(`Result is- ${result}`);            //False     COnverts True Into False 






var pin = '4490';
console.log(typeof pin);

var resultp = + pin ; 
console.log(pin   ,typeof resultp);
