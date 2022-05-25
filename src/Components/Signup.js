import React, { useEffect, useState } from "react";
import { POST } from "../Api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "bootstrap";

const Signup = () => {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputbox"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        className=" reg-button btn-sm"
        onClick={handleSignUp}
      >
        SignUp
      </button>
      {/* <Button className="reg-button" onClick={handleSignUp}>
        SignUp
      </Button> */}
    </div>
  );
};

export default Signup;
