const user = {};

Object.defineProperty(user, "secret", {
  value: "I am hidden",
  enumerable: false
});

console.log(user.secret);          // I am hidden
console.log(Object.keys(user));    // [] — secret not shown
for (let key in user) {
  console.log(key);                // nothing
}
