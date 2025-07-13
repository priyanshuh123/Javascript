class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,password){
        super(username)
        this.password = password
    }

      addCourse(){
        console.log(`USERNAME is ${this.username}`)
      }
}

const User1 = new Teacher("Sheetal",123)
const User2 = new user("Permidan")
User1.addCourse()
User2.logMe()

console.log(User1 instanceof Teacher)
console.log(User1 instanceof user)
