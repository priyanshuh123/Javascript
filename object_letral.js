const user = {
    username : "priyanshu",
    loginCount : 8,
    signedIn : true,


     getUserdetails: function(){
        // console.log("get user detail from database")
        console.log(`username ${this.username}`)
        console.log(this)
     }
}

console.log(user.username)
console.log(user.getUserdetails())
console.log(this)
