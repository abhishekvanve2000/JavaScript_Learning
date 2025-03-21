
// if we use assignment operator for deep clonning of primitye type variables then the assignment operator deep clone the variable
let num1=100;
let num2=num1;
num2=num2-10;
//console.log(num1);
//console.log(num2);

let str1 =`virat`;
let str2 =str1+`anushka`;
//console.log(str1);
//console.log(str2);

//if we have a object in order to perform clone we shall not use assignment operator becaus it creates the shallow clone 

let hdfcBank={
    bankName:"HDFC Bank OF India",
    IFSc:"SBIN00311435",
    accountNumber:1600320143, 
}

let sbiBank=hdfcBank;           //shallow clone
sbiBank.bankName=`state BAnk Of India`;
//console.log(hdfcBank.bankName);
//console.log(sbiBank.bankName);

let studentElon={
    fullname:`Elon MUsk`,
    age:27,
    city:`Beed`,
    college:`GPB`
}


let studentAnna=Object.assign({},studentElon);
studentAnna.fullname=`Anna Hajare`;

//console.log(`Anna Hjare-${studentAnna.fullname}`);
//console.log(`Elon Musk-${studentElon.fullname}`);


let studentRitik={...studentElon};
studentRitik.fullname=`Ritik Dahima`;

//console.log(`Ritik Dahima-${studentRitik.fullname}`);
//console.log(`Elon Musk-${studentElon.fullname}`);

