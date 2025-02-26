



//Α  Ε  Ι  Ο  U 
function vowelCount(str){ 
    let count = 0; 
        for (let index = 0; index < str.length; index++) { 
            let char = str.charAt(index); 
                if (char == 'a' || char == 'e' || char == 'A' || char == 'E' || char == 'i' || char == 'o' ||
                     char == 'I' || char == '0' || char == 'u' || char == 'U'){ 
                    console.log(char); 
                    count = count + 1; 
                } 
        } 
    console.log(`Total number of vowels is: ${count}`); 
} 
vowelCount("I am very good UI Developer");




//WAP to get the sum of numbers from 0 to 20 
let sum = function(){ 
    let totalSum = 0; 
        for (let index = 1; index <=20; index++) { 
        totalSum = totalSum + index; 
        } 
        console.log(`Sum of first 20 numbers is ${totalSum}`);
        
}    
sum();






