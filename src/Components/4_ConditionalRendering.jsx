import React, { useState } from "react";

function ConditionalRendering() {
  const [isLogged, setIsLogged] = useState(false); // State to track login status

  const handleLogin = () => {
    setIsLogged(true); // Set login status to true
  };

  const handleLogout = () => {
    setIsLogged(false); // Set login status to false
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Log-Out</button>
      <div>
        <h1>{isLogged ? "You are Logged In" : "You are Logged Out"}</h1>
      </div>
    </div>
  );
}

export default ConditionalRendering;
