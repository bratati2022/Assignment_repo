import { useState, useEffect } from "react";
import React from "react";
import { POST } from "../Api/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
    var email = e.target.value;
    setEmail(email);
    if (validator.isEmail) {
      setEmailError("Valid Email");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const handleSignIn = async (e) => {
    try {
      const payload = {
        email: email,
        password: password,
      };
      let response = await POST("loginProfile", payload);
      console.log(response);

      if (response.status == 200 && response !== null) {
        const token = response.data.token;
        let isAdmin = response.data.userDetails.userType == 0 ? true : false;
        setEmail("");
        setPassword("");
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response.data.userDetails));
        localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
        // localStorage.setItem("user", response.data.userDetails.email);
        toast.success("Login Successfully");
        navigate("/collections");
      } else {
        toast.error(response.data.message);
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
        onChange={validateEmail}
      />
      <input
        className="inputbox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h6>Forgot your password?</h6>
      <button
        type="button"
        className=" reg-button btn-sm"
        onClick={handleSignIn}
      >
        SignIn
      </button>
    </section>
  );
};

export default Signin;
