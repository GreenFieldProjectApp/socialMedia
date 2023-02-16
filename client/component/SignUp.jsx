
import React, { useState } from "react";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <div className="signup">
      <h3>full name:</h3>
      <input
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        placeholder="full name"
        required
      ></input>
     
      <h3>email:</h3>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      ></input>
      <h3>Password:</h3>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        required
      ></input>
      <br></br>
      <button type="button" onClick={()=>
      onSubmitForm(fullName,email,password)
      }>
        {" "}
        SignUp
      </button>
    </div>
  );
}

export default SignUp;
