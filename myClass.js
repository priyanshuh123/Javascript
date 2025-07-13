// class user{
//         constructor(username,email,password){
//             this.username = username;
//             this.email = email;
//             this.password = password;
//         }

//         encryptPassword(){
//             return this
//         }
// }

// const user1 = new user("sheetal" , "example@gmail.com","123");
// printData = user1.encryptPassword()
// console.log( user1.encryptPassword())

// behind the scene

function user(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return this
}


const user2 = new user("jerry" , "example@gmail.com","123");
printData = user2.encryptPassword()
console.log( user2.encryptPassword())