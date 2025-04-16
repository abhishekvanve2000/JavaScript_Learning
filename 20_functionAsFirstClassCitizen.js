

// 1)function Expression 
// 2)callback
// 3)function can eturn another function



// function show() {
//     console.log(`inside Show function`);
//     let innerFun=function () {
//         console.log(`inside inner function`);           //function Expression
//     }                                                                   
//     return innerFun
// } 

// let inner = show();
// console.log(inner);              // first way to call inner function
                   


// show()();                       //Another way to call inner function




//function can be passesd as an argument to another function
function show() {
    console.log(`learning JS`);
    
}

function SayHello(show) {
    console.log(`hello`);
    
    show()
}

SayHello(show);


//a function can return another function 
function message () {
    console.log(`hey ritik`);
    return function () {
        console.log(`iam learning javaScript`);
        
    }   
}

message()();