// 1. premitive data type store stack and used copy value example child
// 2. non-premitive data type store value heap used refrenced

// let parent = "1"

// let child = parent

// child = "2"

// console.log(parent)
// console.log(child)

user_2 = {
    email : "XXXX@.com",
    BatchNo: "4"
}

user_2 = user_2
user_2.email= "yyyy@.com"

console.log(user_2.email)
console.log(user_2.email)