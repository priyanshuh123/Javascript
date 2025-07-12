function test() {
  let a = 10;           // Local Scope
  this.num = 5;         // NOT Local depends on `this`
}

test();

console.log(a);         // Error (local)
console.log(num);       // 5 (stored on global object)


// Inside engine:
// this = global
// ⇒ this.num = 5
// ⇒ global.num = 5 (ho gaya set)