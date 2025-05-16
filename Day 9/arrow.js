// const user = {
//     name: "vuashuki",
//     age: "20",

//     login: function(){
                           
//         console.log(`${this.name} and ${this.age} login successfully`)
//         console.log(this)
//     }
// }

// user.login()
// user.name = "vanila"
// user.login()

// console.log(this)

function FBlogin(){
    let name = "Vantika"
    console.log(this.name)
    console.log(this)
}

FBlogin()


// const intaUser = function(){
//     let name = "kanishka"
//     console.log(this.name)
// }


const intaUser = () =>{
    let name = "kanishka"
    console.log(this.name)
    console.log(this)
    
}
intaUser()



// const addNum = (q, w) => {
//     return q + w
// }

// const addNum = (q, w) => q + w 

//  const addNum = (q, w) => (q + w)

 const addNum = (q, w) => ({name : "kanishka"})

console.log(addNum(2, 3))
console.log(addNum(2, 3, 4, 5)) // 5 is ignored in this case
