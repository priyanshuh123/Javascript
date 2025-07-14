const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);




// console.log(Math.PI);
// Maths.PI = 5
// console.log(Math.PI);

const User = {
    name : 'Priyanshu',
    Price : 100,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(User,"name"))

Object.defineProperty(User,"name",{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptors(User,"name"))