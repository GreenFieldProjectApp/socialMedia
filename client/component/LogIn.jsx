import React, { useState } from "react";

function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="loginn">
      <div>
        <h1>Email:</h1>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        ></input>
        <h1>Password:</h1>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
        <br></br>
        <button
          type="button"
          
        >
          {" "}
          Login
        </button>
      </div>
    </div>
  );
}

export default LogIn;
