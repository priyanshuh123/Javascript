function UserOne(name) {
  this.name = name;
}

UserOne.prototype.sayHello = function () {
  console.log(`Hello from UserOne, ${this.name}`);
};

function UserTwo(name) {
  this.name = name;
}

UserTwo.prototype = Object.create(UserOne.prototype);
UserTwo.prototype.constructor = UserTwo; // good practice

const u1 = new UserOne("Priyanshu")
const u2 = new UserTwo("Priyanshu");


u2.sayHello();  //error show without using = UserTwo.prototype = Object.create(UserOne.prototype); 
u1.sayHello();

// u2 --> UserTwo.prototype --> UserOne.prototype --> Object.prototype --> null
