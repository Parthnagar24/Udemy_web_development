function fetchUserData() {
  return new Promise((resolve, reject) => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ name: "John", age: 30 }); // Success
      } else {
        reject("Failed to fetch user data"); // Failure
      }
    }, 2000);
  });
}

// Using the promise
fetchUserData()
  .then((user) => console.log("Success:", user))
  .catch((error) => console.log("Error:", error));
