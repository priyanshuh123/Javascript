// function user(){
//     if(true){
//         let =1;
//         const b=2;
//         var c=3;
//     }
//     // console.log(a) // ReferenceError: a is not defined
//     // console.log(b) // ReferenceError: b is not defined
// //    console.log(c) // 3
//  }

// user()

// const c = 100;
// if(true){
//     var a = 1;
//     let b = 2;
//     const c = 3;
// }
// // console.log(a) // 1
// console.log(b) // ReferenceError: b is not defined
// console.log(c) // 100
// console.log(this.c) // 3

function outerFunction(){
    const a = 1;
    const b = 2;
    const c = a + b;
    console.log(c);

    function innerFunction(){
        const d = 4;
        const e = 5;
        const f = d + e;
        console.log(a);

    }
    innerFunction()
}
outerFunction()