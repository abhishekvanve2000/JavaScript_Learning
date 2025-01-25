
//Function With No Arguments And No Return Value
function show(){
    console.log('My NAme Is ABhishek');
    console.log('Im A Software Engineer');
    console.log('My Tech Skill Is-Javascript+HTML+CSS+SQL');    
}

show();     //  Function  Invocation








//FUnction WIth Arguments And No Return Value 
function checkTypeOf(Value){  //Var Value=100/Gk
    console.log('value is',Value);
    console.log('type is:',typeof Value);
    console.log('______________________________');
}

checkTypeOf(100);    //FUnction Invocation
checkTypeOf('GK');
checkTypeOf(true);
checkTypeOf(undefined);
checkTypeOf(null);
checkTypeOf();




//FUnction with argument and restuen value

function addition(arg1 , arg2 , arg3){
    console.log('values are:', arg1 , arg2 , arg3);
    var result = arg1 + arg2 + arg3;
    return result   
    
}

var res=addition(10,20,50);
console.log('Result is:',res);

var res=addition(-56,239,677);
console.log('Result is:',res);

var res=addition('Abhishek','Beed',88)
console.log('Result is:',res);











function display(){
    return 'learning js';
}

var resDisplay=display();
console.log('Result',resDisplay);
