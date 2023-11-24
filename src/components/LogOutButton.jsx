import React from "react";
import { auth } from "../firebase/FirebaseConfig"; // Adjust the path as needed

function LogOutButton() {
  const handleLogout = () => {
    // Sign out the user
    auth
      .signOut()
      .then(() => {
        // Redirect to the login page after successful logout
        window.location.href = "/"; // Adjust the path as needed
      })
      .catch((error) => {
        // Handle any errors that occur during the sign-out process
        console.error("Error during sign out: ", error);
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default LogOutButton;
