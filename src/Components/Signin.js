import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    try {
      const payload = {
        email: email,
        password: password,
      };
      let response = await axios.post(
        "https://car-auction-assignment.herokuapp.com/loginProfile",
        payload
      );
      if (response.status == 200 && response !== null) {
        const token = response.data.token;
        console.log(token);
        setEmail("");
        setPassword("");
        localStorage.setItem("token", token);
        console.log(response.data);
        localStorage.setItem("user", response.data.userDetails.email);
        toast.success("Login Successfully");
        let recEmail = response.data.userDetails.email;
        let check = recEmail.slice(0, 5);
        console.log(check);

        navigate("/submitvehicle");
      } else {
        console.log("Signin error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="register py-4">
      <h1>Signin to Collector Chassis</h1>
      <span>
        {" "}
        No collector Chassis account yet?<Link to="/signup">Signup</Link>
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
