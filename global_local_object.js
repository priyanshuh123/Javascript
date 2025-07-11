// function Multiples(num) {
//   this.num = num;
//   console.log("this (without new):", this);
//   return num * 5;
// }

// Multiples(5);  
//  //  global object


function Multiples(num) {
  this.num = num;
  console.log("this (with new):", this);
  return num * 5;
}

const result = new Multiples(5);
// new object 