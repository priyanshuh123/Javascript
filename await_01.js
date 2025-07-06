async function getUserdata() {
    try{
      const repo =   await fetch ('https://api.github.com/users/priyanshuh123');
         const data = await repo.json();   
        console.log("Name", data.name)
        console.log("Name", followers.name)


    }catch(error){
                        console.error("error fetching user ", error)
    }
}

getUserdata()