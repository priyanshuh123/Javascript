
    function user(username, password, userId) {
        this.username = username;
        this.password = password;
        this.userId = userId;
        // return this

        this.newfunction = function(){
            console.log(`user name ${username}`)
        }
    }
            
    // const userOne = user("priyanshu",123,true)
    // console.log(userOne)

    // const userTwo = user("jackly",123,true)
    // console.log(userTwo)

    const userOne = new user("priyanshu",123,true)        // if create new then reate object is called intance 
    console.log(userOne)

    const userTwo =  new user("jackly",123,true)
    console.log(userTwo)

    console.log(userTwo.constructor);