


function collagee(nameOfStreet,collage,foundarName,year) {
    this.completeNameOfStreet = nameOfStreet;
    this.nameOfCollage=collage;
    this.nameOfFounder=foundarName;
    this.yearOfFoundation=year;

    
}

let gPB=new collagee(`Pimpalner Road,Beed`,`Government Polytechnic Collage`,`Anna Hajare`,2000);
//console.log(gPB);

let yCIP=new collagee(`Barshi Road,Beed`,`Yashwantrao Chavan Polytechnic Collage`,`Shubham Khalgute`,2010);
//console.log(yCIP);

let aditya=new collagee(`Telgaon Naka,Beed`,`Aditya Polytechnic Collage`,`Khatod`,2010);
//console.log(aditya);




collagee.prototype.country=`India`;

console.log(gPB);
//console.log(yCIP);
//console.log(aditya);


console.log(`country Of gPB is-${gPB.country}`);





