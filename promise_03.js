const setTimeoutpromise = new Promise(function(resolve,reject){
     
    setTimeout(function(){
              console.log("After 3 second")
              resolve()
    },3000)
}).then(function(){
     console.log("Success")
}).catch(function(){
    console.log("Faill:error code")
})

