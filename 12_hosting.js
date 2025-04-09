console.log(Captian);
//console.log(gender);                  //variale declared with let and const can not be hosted       
//console.log(age);

var Captian=`Virat`;
let gender=`Male`;      
const age=28;

sum();          //named function can be hosted
function sum() {
    console.log(`inside sum function`);
    
}



//unnamed();            //unnamed function can not be hosted
var unnamed=function() {
    console.log(`inside unnamed function`);
    
}