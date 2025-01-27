


//In javascript we can save function as a variables value
var display = function () {
    console.log('im a angular developwe');
}

display()
console.log('Type Of Display=>',typeof display);




var addition = function(val1 , val2){
    var result= val1 + val2;
    console.log(`Addition Is: $  {result}`);
}

addition(25,26)










var wordCount = function(word){
    var words = word.split("");
    var wordCount = words.length;
    console.log(`In Given String - ${word}`);
    return wordCount;  
}

var result = wordCount("Im A Angular Developer");
console.log(`Totalword count is: ${result}`);
