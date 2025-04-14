
// rest parameter function assignment

function add(num1, num2, ...num) {
    let addn = 0;
    for (const sum of num) {
      addn += sum;
    }
    console.log("total addition is: ", num1+num2+addn);
  }
  
  add(5, 6);
  
  add(9, 5, 6);
  
  add(78, 90, 51, 68);
  
  add(89, 90, 45, 78, 90, 51, 68);
