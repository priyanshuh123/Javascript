const user = { name: "Priyanshu" };

console.log(user.__proto__);               // 👉 Object.prototype
console.log(user.__proto__.__proto__);     // 👉 null ❌
