import React, { useEffect } from "react";
import "./colour.css";
import { Link, Navigate,useNavigate } from "react-router-dom";
import Register from "./Register";
function Login() {
  let navigate=useNavigate();;
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  async function loginSubmit(e) {
    e.preventDefault();
    let result=await fetch("http://localhost:3000/login",{
      method:"POST",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result=await result.json();
    if(!result.ok){
        console.log("Login Failed");
    }
    localStorage.setItem('user',JSON.stringify(result));
    localStorage.setItem('token',JSON.stringify(result.auth));
    navigate("/");
    
  }
  useEffect(()=>{
    let auth=localStorage.getItem('token');
    if(auth){
      navigate("/");
    }
  },[])
  return (
    <div className="login-container">
      <div className="pollution-overlay"></div>

      <div className="login-box">
        <h1>Welcome Back</h1>
        <p className="subtitle">Save Earth • Login Securely</p>

        <form>
          <input type="email" placeholder="Enter Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />

          <input type="password" placeholder="Enter Password" required value={password} onChange={(e) => { setPassword(e.target.value) }} />

          <button type="submit" onClick={loginSubmit}>Login</button>
        </form>
        <span style={{ color: 'pink', fontSize: "12px" }}>Don't have an account ? <Link to="/register"><b style={{ color: 'skyblue' }}>Register here</b></   Link></span>
        <p className="subtitle">PolluSafe • Protecting Our Planet 🌍</p>
      </div>
    </div>
  );
}

export default Login;
