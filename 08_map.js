



let array=["abhishek","Maharashtra","5.4 Ft",91];
console.log(array);

let map = new Map();
map.set("Name","Abhishek");
map.set("state","Maharashtra");
map.set("Height","5.4 FT");
map.set("Number Code",91);
map.set("Skills",["HTML","CSS","JavaScript","SQL","Angular"])


console.table(map);


console.log(map.size);      //by this property we can check number of elements present in variable map

let numberCode=map.get(`Number Code`);
console.log(numberCode);                    //by this property we can get value of perticular key

let SkillsKey=map.get(`Skills`);
for (const element of SkillsKey) {
    console.log(element);   
}



let isHeightKeyIsAvilabe=map.has(`Height`);
console.log(isHeightKeyIsAvilabe );



map.delete("Skills");               //By this property we can delate perticular Key
//console.log(map);



console.log(map.keys());
console.log(map.values());



map.set("Name",`Eric`)              //If we reDeclare the key then value inside key gets updated Because keys are always unique
console.table(map);



console.log(`-----Traversing map-----`);
let keym= map.keys();
for (const Key of keym) {
    console.log(`${Key}==>${map.get(Key)}`);
    
}



