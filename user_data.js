function getUserData(username) {
  return new Promise(async function(resolve, reject) {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) {
        reject(`❌ User Not Found: ${username}`);
        return;
      }

      const data = await res.json();  // ✅ now data is defined
      resolve(data);
    } catch (error) {
      reject(`⚠️ Network Error: ${error}`);
    }
  });
}

async function showUserData() {
  try {
    const user = await getUserData("priyanshuh123");  // 👈 use actual username here
    console.log("👤 Username:", user.login);
    console.log("📝 Name:", user.name);
    console.log("👥 Followers:", user.followers);
  } catch (err) {
    console.log(err);
  }
}

showUserData();
