



var num = 23;
if (num > 20) {
    console.log(`${num}`);
}
console.log(`After The If Block`);




var numm = 29 ;
if (numm%2===0) {
    console.log(` ${numm} is even number`);   
} else {
    console.log(` ${numm} is odd number`);
}



//Nested If Else Statement
function voteEligibility(age , name){
    var ageValue = +age;
    if (age < 0 || isNaN(ageValue) || age>=120) {                   // If For Invalid Scnarios
     console.log(`${name} Your Age  ${age} Is Invalid `);
    }
    else {                                                         //Else For All Valid Scenarios
    if (age >=18) {
     console.log(`${name} You ARe Eligible For Vote`);
        
    } else {
    console.log(`${name} You ARe Not Eligible For Vote`);
        
    }
}
}

voteEligibility(29,'Abhishek')
voteEligibility(150,'Abhishek')


console.log('_______________________');



function gradeCalculation(marks) {
    if (typeof marks !== "number" || isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Please provide the valid marks");
    } 
    else {
        if (marks >= 90) {
            console.log(`Funtastic marks: ${marks}, Your grade is A+`);
        } else {}
        if (marks >= 75) {
            console.log(`Excellent marks: ${marks}, Your grade is A`);
        } else {}
        if (marks >= 50) {
            console.log(`Good marks: ${marks}, Your grade is B`);
        } else{}
         if (marks >= 35) {
            console.log(`Marks is ${marks}, Your grade is C, Need improvement`);
        } else {}
    }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);



