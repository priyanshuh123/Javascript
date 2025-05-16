// function myFunction(){
//     var a = 1;
//     var b = 2;
//     var c = a + b;
//     console.log(c);
// }

// myFunction();

// function myFunction(a, b){
//     return a + b;
// }

// console.log(myFunction(1, 2)); // Output: 3

// function userLogin(username){
//     if(username ==null || username == ""){
//         console.log("please enter username")
//     }
//     else{
//         console.log("wellcome" + username)
//     }
// }

userLogin("vuashuki")
userLogin()

function userLogin(username){
    if(!username){ 
        console.log("please enter username")
        return
    }
    else{
        console.log("wellcome" + username)
    }
}

userLogin("vuashuki")
userLogin()

// function calculateCartprice(val1, val2, ...valn){
//     return valn
// }

// console.log(calculateCartprice(1,2,3,4,5,6,7,8,9,10))

const user = {
    name: "vuashuki",
    age: "20"
};

function login(anyobject){
    console.log(anyobject.name, anyobject.age)
    console.log("login successfully")
}

login(user)

function unnamedFunction() {
    
}

