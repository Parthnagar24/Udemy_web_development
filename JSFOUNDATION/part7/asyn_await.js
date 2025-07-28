function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chai", url: "https://example.com/chai" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    const userData = await fetchUserData();
    console.log(`User Name: ${userData.name}`);
    console.log(`Profile URL: ${userData.url}`);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
getUserData();
