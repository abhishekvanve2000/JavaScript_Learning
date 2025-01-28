



var greet = "good morning";
var lenghthOfString = greet.length;
console.log( greet ,'Length of string is:', lenghthOfString);






//String Function
function string(val1){
    console.log('Before Conversion','Value is-',val1,'typeOf Value is-',typeof val1);
    var alpha =(val1).toString();
    return alpha;  
}
var res = string(55);
console.log(' After Conversion','Value is-',res,'typeOf Value is-',typeof res);




//toString() Function
var random =(522).toString();
console.log(random,typeof random);

console.log(random.charAt(0));





//concat()
var firstName='Abhishek';
var lastName='Vanve';
console.log(firstName.concat(lastName));
console.log(firstName+" "+lastName);        //Another Type Of COncatinaiton
console.log(firstName+lastName);            //Another Type Of COncatination Using + Operator 




//  indexOf()
var naman ="Lests Find Where Occurs!";
console.log(naman.indexOf("!"));
console.log(naman.indexOf("foo"));   //If Searched string is not found then -1 is returned.




//Last Index Of
var english='Hello- World';
console.log(english.lastIndexOf('o'));
console.log(english.lastIndexOf('z'));      //If Searched string is not found then -1 is returned.




//Replace()
var comName='abhishek vanev';
console.log(comName.replace('abhishek','abhijeet'));




//toUpperCase()    (string prototype to upper case)
var completeName='abhishek vanev';
console.log(completeName.toUpperCase());





//valueOf()
var comNamee =  new String('abhishek');        //Creating a String object using new keyword is allowed, but is not recommended as it behaves like Objects
console.log(typeof comNamee);
console.log(typeof comNamee.valueOf());
console.log('_____________End Of Code_______________');

var objectString = new String("Yes, I am a String object");
console.log(typeof objectString);
console.log(objectString.valueOf());
console.log(typeof objectString.valueOf());

var ObjectofSring =  new String('my name is khan');
console.log(typeof ObjectofSring);
console.log(ObjectofSring.valueOf());
console.log(typeof ObjectofSring.valueOf());





//trim()        used to trim whitespace from edge of the trim
var trimex = '             my name is abhishek     '.trim();
console.log(trimex);




//includes()  
// This is better than indexOf() if you simply need to test for existence of a substring
var stringg = 'my tech stack';
console.log(stringg.includes('my'));            // prints true
console.log(stringg.includes('myy'));           // prints false 


// search()
var str='hello world';
console.log(str.search(' '));

//slice()
var cut = 'abhi vanve';
console.log(cut.slice(0,4));




//substr()
//suntax(start value,length)
var s = 'Angular Dev';
console.log(s.substr(8,3));


//match()
var ss= 'looper looper looper looper looper';
console.log(ss.match(/per/g));


//split()
//Used to split the string
var spl ='1,2,3,4,5,6';
console.log(spl.split(','));

//toLowercase()
//used to convert string into lower case
 var sentance ='IM ABHISHEK VANVE';
 console.log(sentance.toLowerCase());       //prints 'im abhishek vanve'
 


 //creating strings using `` backtiks
var message = 'Hello dear-"Sachin"';
console.log(message);

//variable substitution
var firstName='abhishek';
var lastName='vanve';
console.log(`firstName is: ${firstName} lastName is: ${lastName}`);  //use of backticks is mandetory for varibale substitution

