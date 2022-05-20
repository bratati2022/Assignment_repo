import { useState, useEffect } from "react";
import React from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Hi");
  };
  return (
    <section className="register py-4">
      <h1>Signin to Collector Chassis</h1>
      <span>
        {" "}
        No collector Chassis account yet?<a href="/signup"> Sign Up</a>
      </span>

      <input
        className="inputbox"
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputbox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h6>Forgot your password?</h6>
      <button className="reg-button" onClick={handleSignIn}>
        SignIn
      </button>
    </section>
  );
};

export default Signin;
