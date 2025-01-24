

function swap(n1,n2){ //n1,n2 Aruguments Or Parameters n1=>Value1,n2=>Value2
    console.log('Inside The Swap FunCtion');
    console.log('Before Swap==>','n1=>',n1,'n2=>',n2);
    var temp = n1;
    n1=n2;
    n2=temp;
    console.log('After Swap==>','n1',n1,'n2',n2);

}

var num1=100;
var num2=200;
swap(num1,num2);  //FUnction Call Or Invocation


var name1='Anushka';
var name2='Ranvir';
swap(name1,name2);

var sweety='sweety';
var cutiie='cutiie';
swap(sweety,cutiie)
console.log('End Of Program');
