let person={
    RollNumbwer:421,
    emName:`Abhishek`,
    state:`Maha`,
    isMarried:false,
    city:`Beed`,
}


console.log(person);
console.log(`Type Of Person is-${typeof person}`);


console.log(`Roll Number Is ${person.RollNumbwer}`);            //Dot Notetion
console.log(`City Of Student is-${person[`city`]}`);            //


person.city="Mumbai";
console.log(person.city);


delete person.city;
//console.table(person);


let bank={
    bankName:"State Bank OF India",
    IFSc:"SBIN00311435",
    accountNumber:1600320143,
    adress:{
        street:"Shivai ROad",
        landmark:"Infront Of SP Offiece",
        city:"Beed",                            //Nestwed Object
        pinCode:431122,
        state:"Maharashtra",
        country:"India",
        getAdress: function(){
            console.log(`Bank Adress ${this.street},${this.landmark},${this.city},${this.state},${this.country},${this.pinCode}`);
            
        }

    },
    empName:["ABhishek","Ritik","Amar","Anna"]
}

//console.table(bank);

console.log(bank.adress.city);

bank.empName.pop();                 //Delet last index element in array
bank.empName.unshift("mark");       //Adds the name at 0th index without deleting the any element

//console.table(bank);


bank.adress.getAdress();





let student={
    rollNumber:143,
    numOfSudents:60,
    class:`10th`
}
let studKeys=Object.keys(student);
console.log(studKeys);

let studValues=Object.values(student);
console.log(studValues);



console.log(`-----Traversing an object-----`);
for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(`Keys :${key} & value:${element}`);
        
    }
}

let isAvilabe=`rollNumber` in student;                  //in peoperty
console.log(isAvilabe);
