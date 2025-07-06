new Promise(function(resolve){
          resolve(10)
})
.then(function(num){
    console.log("step 1", num)
    return 2*num
})
.then(function(num){ 
               console.log("step 2", num)
               return 3*num
})
.then(function(num){
    console.log("step 3",num)
})