





var array=[10,20,30,50,10,80,20];
console.log(array);
console.log(`type of array is:${typeof array}`);

console.log(`total number of elements in array is ${array.length}`);
let element2=array[2];
console.log(`index stored at indes 2 is ${element2}`);

let element0=array[0];
console.log(`index stored at indes 0 is ${element0}`);
let arrayLenght = array.length;
let lastElement = array[arrayLenght-1];
console.log(`last element of array is ${lastElement}`);




array[1]=100;                       //index 1
console.log(array);                 //Updates 20 as 100


let isAvilabe = array.includes(80);
console.log(`is 80 avilabe: ${isAvilabe}`);

let indexOff=array.indexOf(50);
console.log(`index of 50 is ${indexOff}`);


var array=[10,20,30,50,10,80,20];
console.log(`array traversing`);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);   
}

var array=[10,20,30,50,10,80,20];
console.log(`array traverse in reverse order`);
for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    console.log(element);   
}


var array=[10,20,30,50,10,80,20];
console.log(`log even indexed element`);
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element = array[index];                       //logs the elements present on even index
        console.log(element);
                
    }
}


console.log(`inserting element in 0th and last position`);
var array=[10,20,30,50,10,80,20];
array.push(40);                            //adds elements in last
array.push(45,50);                          //we can add multiple elements at a time
array.unshift(1);                           //adds elements at 0th index
array.unshift(5,10);                          
console.log(array);


console.log(`remove the elements in 0th index and last index`);
var array=[10,20,30,50,10,80,20];
array.pop();                            //deleates the element on last index
array.shift();                          //deleates the element on 0th index
console.log(array);


console.log(`getting slice from array`);
var array=[10,20,30,50,10,80,20];
console.log(array.slice(2));                //prints upcoming elements from given index value 
console.log(array.slice(1,5));              //prints elements from starting index till last index given -1


console.log(`Removing the array element using splice()`);
var array=[10,20,30,50,10,80,20,50];
var removed = array.splice(4);                 //elements from fourth index will be removed
console.log(array);
console.log(removed);

var array=[10,20,30,50,10,80,20];
var elementRemoved = array.splice(4,2);                 //Removed two elements from fourth index
console.log(array);
console.log(elementRemoved);



console.log(`Inserting the array element usingh splice`);
var array=[10,20,30,50,10,80,20];
array.splice(3,0,100,200,300);            //adding elements in array without replacing them
console.log(array);

var array=[10,20,30,50,10,80,20];
array.splice(4,2,33,55,66,77);              //replacing two elements and adding four elements
console.log(array);



console.log(`-----Concat-----`);
let array1=[1,2,3,4,5,6,7];
let array2=[8,9,10,11,12,13];
let array3=array1.concat(array2);
console.log(array3);




console.log(`-----Join-----`);
let array4=[7,789,4,96,7,89,94,6,132,54];
let result=array4.join("/");
console.log(result);

console.log(`-----for of loop----`);
for (const element of array1) {
    console.log(element);
}



console.log(`-----array resize-----`);
let array5=[4,8,4,6,1,4,56,7];
array5.length=4;
console.log(array5);

console.log(`-----spread operator-----`);
let array6=[44,56,78,456,56161,456,1261,261];
console.log(array6);
console.log(...array6);


let a =[1,2,3,4,5]
a.splice(3,1,6);
console.log(a);

let numbers = [20, 5, 100, 40];
numbers.sort((a, b) => a - b);
console.log(numbers);  // Output: [5, 20, 40, 100]



console.log(`___________________Reverse The Array_____________`);

let num = [1, 2, 3];
num.reverse();
console.log(num);  // Output: [3, 2, 1]



let words=[`Sham`,`Ram`,`Anna`,`Golu`];
words.reverse();
console.log(words);



let nummm=[1,2,3,4,56,7,8,9,10];
nummm.length=4;
console.log(nummm);


















let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});

fruits.forEach(function(fruit , index){
    console.log(`fruit is ${fruit} index of fruit is ${index}`);
    

});





let nu=[1,2,3,4];
let i=0;
while (i<nu.length) {
    console.log(nu[i]);
    console.log(i);
    
    i++
    }
