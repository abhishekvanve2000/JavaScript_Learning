



let mySet = new Set();
mySet.add(4);
mySet.add(5);
mySet.add(6);
mySet.add(7);

console.log(mySet);


mySet.add(4);
console.log(mySet);      //overrides the command and do not add the duplicate value 

let isAvilabe=mySet.has(4);                     //returns values in boolean
console.log(isAvilabe);


let isAvi=mySet.has(9);
console.log(isAvi);



let size=(`size of my set is ${mySet.size}`);     //by this property we can check number of elements present in the set
console.log(size);

mySet.delete(4);                                  //by this property we can delete perticular element present in the set 
console.log(mySet);



for (const element of mySet) {                  //Trasnsverse over the set using for of loop
    console.log(element);  
}



let array=[4,5,6,4,5,7,5,6,8];
let setOfNumbers=new Set();
for (const unique of array) {
    setOfNumbers.add(unique);
}
console.log(array);
console.log(setOfNumbers);

console.log(`removing duplicate elements from array using spread oerator`);
let mix=[4,59,2,2,3,2,45,54,6,8,23,1];
let unique=[...new Set(mix)];
console.log(mix);
console.log(unique);


