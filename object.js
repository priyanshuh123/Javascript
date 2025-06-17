// singleton 
// object.create

// object literals

const mySym = Symbol("key1")

const JSuser = {
      name : "roma",
      age :  21,
      location : "Romania",
      email : "romaRomania@gmail.com",
        [mySym] : "mykey1"

}

JSuser.email = "Roma@gmail.com"

console.log(JSuser)
console.log(JSuser.email)
console.log(JSuser["name"])
console.log(JSuser[mySym])


JSuser.fun = function(){
    console.log("All Right")
}

JSuser.fun2 = function(){
    console.log(`Js user,${this.name}`)
}

console.log(JSuser.fun())
console.log(JSuser.fun2())
console.log(JSuser.toString()) // [object Object]