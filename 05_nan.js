


//NaN--Not A Number

var num1 = 0; 
var num2 = 0;
var result = num1 / num2 ;
console.log(`Result Is- ${result}`);


var num = '200';
console.log(`Before Conversion- ${typeof num}`);
var resultNum = Number(num);                        //Also By Using This Method We Can Convert String Into Number
console.log(`After Conversion Type Of- ${typeof resultNum} And  Result Is-${resultNum}`);



var num3 = '100';
console.log(`Type Of Num3 Is-${typeof num3}`);              //Before Conversion
num3 = + num3                   //+ is used  to convert string value into number
console.log(`Type Of Num3 Is-${typeof num3}`);              //After Conversion



var num4 = 'Anna';
console.log(`Type Of num4 is-${typeof num4}`);              //Before Conversion
num4 = +num4;                                               //+ operator is used to convert string into number
console.log(`Type Of Num4 Is-${typeof num4}`);              //After Conversion
console.log(`result Of is-${num4}`);            //NaN



