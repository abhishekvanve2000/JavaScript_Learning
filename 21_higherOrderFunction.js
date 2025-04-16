

function greet(callbackInquire) {
    console.log(`good morning`);
    callbackInquire();

    let inner=function inner() {
        console.log(`thank You Im Fine`);
    }
    return inner
}

function inquire() {
    console.log(`how are you??`);   
}
//greet(inquire);

greet(inquire)();