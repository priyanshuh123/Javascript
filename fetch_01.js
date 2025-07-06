fetch("https://api.github.com/users/priyanshu123")
  .then(res => res.json())
  .then(data => console.log(data.name, data.followers))
  .catch(err => console.log("Network Error", err));
