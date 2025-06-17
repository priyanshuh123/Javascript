// const tinderUser = new object() // singleton object 

 const tinderUser = {}  // non-singleton object 

 tinderUser.name = "John Doe",
 tinderUser.age = 25,
    tinderUser.isSingle = true

    const regularUser = {
        email:"some@gmail.com",
        fullname:{
            userfullname:{
            firstName:"rick",
            lastName:"Doe"
            }
        }
    }

    // console.log(regularUser.fullname.userfullname.firstName) // rick
 
    const user1 = {1: "John Doe", 2: "rick Doe"}
    const user2 = {3: "John Doe", 4: "rick Doe"}
    const user3 = {5: "John Doe", 6: "rick Doe"}
   
    //const user4 = {obj1, obj2, obj3} // object inside an object
    // const user4 = Object.assign({}, user1, user2, user3) // object inside an object

    const user4 = {...user1, ...user2, ...user3} // object inside an object
       console.log(user4) // {1: "John Doe", 2: "rick Doe", 3: "John Doe", 4: "rick Doe", 5: "John Doe", 6: "rick Doe"} 

       const users = [
        {id: 1, name: "John Doe", age: 25, isSingle: true},
        {id: 2, name: "Rick Doe", age: 30, isSingle: false},
        {id: 3, name: "Jane Doe", age: 28, isSingle: true},
        {id: 4, name: "Mary Doe", age: 35, isSingle: false}
       ]

       users[1].name
       console.log(tinderUser);
       console.log(Object.keys(tinderUser)); // [ 'name', 'age', 'isSingle' ]
       console.log(Object.values(tinderUser)); // [ 'John Doe', 25, true ]
         console.log(Object.entries(tinderUser)); // [ [ 'name', 'John Doe' ], [ 'age', 25 ], [ 'isSingle', true ] ]
       console.log(tinderUser.hasOwnProperty("name")); // true


       const cource ={
                        subject: "JavaScript",
                        duration: 3,
                        isFree: true,
                        isPaid: false,
                        topics: ["variables", "functions", "objects"],
                      courceInstructor: "John Doe"
       }

       const {courceInstructor:cI} = cource // destructuring object
        console.log(cI) // John Doe