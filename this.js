
class FB{
    constructor(password,username,email){
        this.username = username
        this.email = email
        this.password = password
    }
     
         changePassword(changePassword){
                  console.log(this)
                   this.password = changePassword 
                  return this.password;
                
          }
}

     const user = new  FB(123,"jack","jack@gmail.com");
      console.log(user.changePassword(3445))

