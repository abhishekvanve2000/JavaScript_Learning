// 1. Object Destructuring

let student = {
    rollNumber: 2233,
  
    state: "MH",
  
    city: "Pune",
  
    college: "COEP Pune",
    ismarried:true
  };
  
  // let state = student.state;
  
  // let college = student.college;
  
  // let city = student.city;
  
  const { state, college, city, pin = 431175 } = student;
  
  console.log(state, city, college, pin);
  
  // 2. Array Destructuring
  
  let array = [4, 5, 6, 77, 88, 99];
  
  let [num1, num2, num3, num4 = 0] = array;
  
  console.log(num1, num2, num3, num4);

  //Array Destructuring With Default parameter
  let fruits=["Mango","Banana","Apple"];
  let[frui1,frui2,frui3="Cherry",frui4="Papaya"]=fruits;
  console.log(frui1,frui2,frui3,frui4);
  