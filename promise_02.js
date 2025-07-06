const roomClean = new Promise(function(resolve,reject){
          let roomClean = true;  
       if(roomClean){
        console.log("Room has clean")
        resolve()
       }else
       {
         console.log("Room has dirty")
         reject()
       }
}).then(function(){
          console.log("Success")
}).catch(function(){
     console.log("error")
})