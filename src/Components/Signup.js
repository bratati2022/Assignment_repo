import React, { useEffect, useState } from "react";
import { POST } from "../Api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";

const Signup = () => {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (e) => {
    var email = e.target.value;
    setEmail(email);
    if (validator.isEmail(email)) {
      setEmailError("Valid Email");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  // const validatePassword = (e) => {
  //   var password = e.target.value;

  //   setPassword(password);

  //   if (validator.isLength({ password, min: 8, max: 10 })) {
  //     setPasswordError("Password is too short");
  //   } else {
  //     setPasswordError("Password is ok!");
  //   }
  // };

  const handleSignUp = async (e) => {
    try {
      const payload = {
        firstname: firstname,
        email: email,
        password: password,
      };

      let response = await POST("registerProfile", payload);
      if (response.status == 201) {
        setEmail("");
        setPassword("");
        toast.success("Registered Successfully");
        navigate("/");
      } else {
        console.log("Signup error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="register py-4">
      <h2>Register</h2>

      <input
        className="inputbox"
        type="text"
        placeholder="firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        className="inputbox"
        type="text"
        placeholder="email"
        value={email}
        onChange={validateEmail}
      />
      <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {emailError}
      </span>
      <input
        className="inputbox"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {passwordError}
      </span> */}
      <button
        type="button"
        className=" reg-button btn-sm"
        onClick={handleSignUp}
      >
        SignUp
      </button>
    </div>
  );
};

export default Signup;
