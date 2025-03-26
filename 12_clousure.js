let globlevariable =100;
function outer() {
    let outerVariable=200;
    let innerFunction =function () {
        let innerVariable=300;
        console.log(globlevariable);
        console.log(outerVariable);
        console.log(innerVariable);
    }
    return innerFunction;
    
}

//outer()();

let innerFun=outer();
innerFun();