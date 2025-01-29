

//function with no argument and no returen value
var diploy=function(){
    console.log(`hey siri!`); 
}

diploy()
console.log(`Type Of-`,typeof diploy);



//we can save one functionin inside variable
var addition = function(num1,num2){
    var result = num1+num2; 
    console.log(`addition is: ${result} `);    
}
addition(40,20);



var wordCoun = function(word){
    // var words= word.split(" "); 
    var wordCount= word.length;
    return wordCount;
}

var result = wordCoun('im abhishek vanve');
console.log(`total number of words is =>    ${result}`);
