

function ritik(callbackManisa,callbackAmr) {
    console.log(`started cooking food `);
    console.log(`ritik cooked many dilicious food items`);
    console.log(`rirtik also done with cleaning`);
    callbackManisa();
    callbackAmr();        
}


let manisha = function () {
    console.log(`=================manisha=====================`);
    
    console.log(`manish started eating`);
    console.log(`manish fineshed all food`);
    console.log(`manish washed his hands`); 
    
}

let amr = function () {
    console.log(`====================amr==================`);
    
    console.log(`amar started eating`);
    console.log(`amar fineshed all food`);
    console.log(`amar washed his hands`); 
    
}
ritik(manisha,amr)