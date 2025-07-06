function coinFlip() {
    return new Promise(function(resolve,reject){
        const result = Math.random()>0.5;
        if(result)   {
            console.log("Tail")
            resolve()
        }   
        else{
            console.log("Head")
            reject()
        }

    });
}

        coinFlip()
    .then(function(){
                console.log("choose bat or Bol")
    }).catch(function(){
        console.log("error")
    })
        
    
