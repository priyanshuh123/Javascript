class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

      



    get password(){
        return `${this._password}shital`
    }

    set password(value){
        this._password = value
    }
}

const user1 = new User("shtal@gmail.com","123")
console.log(user1.password);