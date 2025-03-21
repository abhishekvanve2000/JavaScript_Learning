


let jenny={
    fullname:`jenny`,
    age:27,
    city:`Beed`,
    college:`GPB`,
    marks:{
        math:30,
        Science:40,
        Biology:80
    }
}

let justion=JSON.parse(JSON.stringify(jenny));
justion.marks.Biology = 50;

console.log(`Justion-${justion.marks.Biology}`);
console.log(`jenny-${jenny.marks.Biology}`);
