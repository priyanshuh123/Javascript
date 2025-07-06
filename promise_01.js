const mypromise = new Promise(function(resolve,reject){
    let mypromise = false;

    if(mypromise){
        console.log("I Give 50k Money I'am Happy You Are Hard Work Also Sharp Mind");
         resolve();
    }
    else{
            console.log("You Loss Money Because You Are Lazzy");
            reject();
    }
});
mypromise.then(function(){
    console.log("Resolve")
}).catch(function(){
    console.log("Error")
})