import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [Flag, setFlag] = useState(false);
  // const[Login,setLogin]=useState(true);

  const handleSignUp = async (e) => {
    try {
      const payload = {
        firstname: firstname,
        email: email,
        password: password,
      };

      let response = await axios.post(
        "https://car-auction-assignment.herokuapp.com/registerProfile",
        payload
      );
      if (response.status == 201 && response !== null) {
        setEmail("");
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
      <button className="reg-button" onClick={handleSignUp}>
        SignUp
      </button>
    </div>
  );
};

export default Signup;
