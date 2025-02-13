
//Variable Assignment

var myFullname;                                         //Variable decleration
myFullname='abhishek vanve';                            //value initilization
console.log('before update=>',myFullname);              //logging value on console
myFullname='Abhishek Babanraw Vanve';                   //updating varibale
console.log('After Updating Full Name=>',myFullname);   // logging value after updation    

var mylogve='i love javascript';
console.log(mylogve);


var firstName='abhishek', lastName='vanve',age='24',address='Beed',pincode='431122',gender='male',isMarried='false';
console.log('first name=',firstName,'last NAme=',lastName,'Age=',age,'Adreass=',address,'Picode=',pincode,'gendar=',gender,'Married=',isMarried);








//Variable Basic Assignment

var namea = 'Abhisehk vanve';   //string
console.log('Name=>',namea,'Type Of Datatype',typeof namea);


var ange =24;           //Number
console.log("Age=>",ange,"Type Of Age=>",typeof ange);


var isStuding= true;        //boolean
console.log('is Studying=>',isStuding,'Type Of Is Studying=>', typeof isStuding);








// Swap Variable Assignment

var num1 = 'sweety' ;
var num2 = 'cutiee' ;
console.log('Before Swap--','number 1=>',num1,'Number 2=>',num2);        //Before Swap
var temp = num1;
num1 = num2;
num2 = temp;
console.log('After Swap--','number 1=>',num1,'Number 2=>',num2);        //After Swap



var val1 = 100 ;
var val2 = 200;
var val3 = 300;
console.log('Before Swap--','Value 1=>',val1,'Value 2=>',val2,'Value 3=>',val3);        // Before Swap
var hold = val1 ;
val1 = val2 ;
val2 = val3 ;
val3 = hold ;
console.log('Afṭer Swap--','Value 1=>',val1,'Value 2=>',val2,'Value 3=>',val3);         // After Swap









//Function Expresison Assignment


var square = function(num){
    result= num * num;
    console.log(`area of sqare is = ${result}`);
    
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);
console.log(typeof square);








//TYpe Of Assignment
var bankName;
console.log('Bank NAme',bankName,'Type Of Bank Name',typeof bankName);          //before initilization
bankName='SBI Bank'; 
console.log('Bank Name ',bankName,'type Of Bank Name ',typeof bankName);        // After initilization


var marks = '90%';
console.log('marks=>',marks,'Type Of Marks',typeof marks);



var isWorking;
console.log('is Working=>',isWorking,'TYpe Of Is Working=>',typeof isWorking);
isWorking=true;
console.log('is Working=>',isWorking,'Type Of Is Working=>',typeof isWorking);


var totalCount='Hundread And Seaven';
console.log('Total Count=>',totalCount,'Type Of Total Count',typeof totalCount);
var totalCount=107;
console.log('Total count=>',totalCount,'type Of TotalCount',typeof totalCount);






//If Else Assignment 

function res(docheck){

    if (docheck %2=== 0 ) {
        console.log(`The Given Number  is Even `);
    } else {
        console.log(`The Given Number   is Odd `);
    }

}

res(12);
res(2);
res(4);
res(6);
res(8);
res(514);
res(15);

