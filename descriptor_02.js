const user = {
  name: "Priyanshu",
  score: undefined
};

Object.defineProperties(user, {
  score: {
    value: 100,
    writable: false
  }
});

console.log(user.score); 
user.score = 200;
console.log(user.score); 

console.log(Object.getOwnPropertyDescriptor(user, "score"));
// console.log(Object.keys(user));