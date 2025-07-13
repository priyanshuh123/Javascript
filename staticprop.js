class User {
    constructor(username){
        this.username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
        static createId(){
            return `123`
        }
}

const user1 = new User("Paras")
user1.logMe()
// console.log(user1.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const t1 = new Teacher("tina","tina@gmail.com")
t1.logMe()
   