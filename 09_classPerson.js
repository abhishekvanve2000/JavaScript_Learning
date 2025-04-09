

class Student {
    nameOfstudent
    rollBumber
    collageName
    departmenrt
    compleateAdress
    PinCode
    constructor(compleateName,roll,Collage,Dept,Adress,Pin) {
        this.nameOfstudent=compleateName;
        this.rollBumber=roll;
        this.collageName=Collage;
        this.departmenrt=Dept;
        this.compleateAdressdress=Adress;
        this.PinCode=Pin;
    }
    show(){
        console.log(`Inside Show Detils`);
        
        console.log(`Name Of STudent-${this.nameOfstudent} Roll Number Of student-${this.rollBumber} Name Of Collage-${this.collageName} Depeartment is -${this.departmenrt} Complete Adress Of STudent Is-${this.compleateAdress} Pincode-${this.PinCode}`);
               
    }

}

let studentRitik=new Student(`Ritik Dayma`,51,`Governmenrt Polytechnnic Beed `,`CS`,`Pimpalner,Beed`,431122);
//console.log(studentRitik);
//studentRitik.show();

let studentAmar =   new Student(`Amar`,52,`Governmenrt Polytechnnic ,ch.SAmbhajinagar `,`EATC`,`Georai,Beed`,432244);
//console.log(studentRitik);
//studentRitik.show();

let studentManish = new Student(`Manish Kshirsagar`,53,`Governmenrt Polytechnnic Beed `,`Electrionics And Telecommunication`,`Beed`,431122);
//console.log(studentRitik);
//studentRitik.show();

let studentVarad=new Student(`Varad Joshi`,54,`Governmenrt Polytechnnic,loni `,`Civil`,`Bhakti Consruction,Beed`,431122);
//console.log(studentRitik);
//studentRitik.show();

let studentPrabhu=new Student(`Prabuddha Wagyhmare`,51,`Governmenrt Polytechnnic Beed `,`Civil`,`Bhakti COnstruction,Beed`,431122);
//console.log(studentRitik);
//studentRitik.show();



let array=[studentAmar,studentManish,studentPrabhu,studentRitik,studentVarad];


console.log(`/////Traversing Over Array Of Object Using For...Of Loop/////`);
for (const element of array) {
    //element.show();
        
}



//usring for each loop to traverse over class

let array1=[studentAmar,studentManish,studentPrabhu,studentRitik,studentVarad];
array1.forEach((student,index,array1) => {
    console.log(student.nameOfstudent,student.collageName);
    
});