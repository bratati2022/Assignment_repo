import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom'

const Signup =()=>
{
    
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const[Flag,setFlag]=useState(false);
    // const[Login,setLogin]=useState(true);
    useEffect(()=>{
        const auth=localStorage.getItem('Email');
        if(auth)
        {
            navigate('/')
        }
        
    })

    const handleSignUp =(e)=>{
        e.preventDefault();
        
       console.log("Hello");
        
    }


  return (
    <div className="register py-4">
    <h2 >Register</h2>
     
    <input  className="inputbox"  type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input  className="inputbox"  type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button className="reg-button" onClick={handleSignUp}>
        SignUp
    </button>
</div>
  )
}

export default Signup