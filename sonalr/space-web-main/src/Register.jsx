import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./colour.css";
function Register() {
    useEffect(() => {
        let auth = localStorage.getItem('token');
        if (auth) {
            navigate("/");
        }
    })
    let navigate = useNavigate();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    async function SubmitForm(e) {
        e.preventDefault();
        if(!name.trim()){
            alert("Name is required field");
            return;
        }
        if(!email.trim()){
            alert("Email is required");
            return;
        }
        if(!password.trim()){
            alert("Password is required");
            return;
        }
        let result = await fetch("http://localhost:3000/singup", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await result.json();
        if (!result.ok) {
            alert(data.message||"Registration Failed");
            return;//stop here if there is any error eill occur
        }
        alert("Registration Successful");
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('token', JSON.stringify(data.auth));
        navigate("/login");

    }

    return (
        <div className="login-container">
            <div className="pollution-overlay"></div>

            <div className="login-box">
                <h2 className="title">PolluSafe</h2>
                <p className="subtitle">Join Us • Save Earth 🌍</p>

                <form>
                    <input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} />

                    <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={SubmitForm}>Register</button>
                </form>

                <p className="footer-text">
                    Together Against Pollution 💚
                </p>
            </div>
        </div>
    );
}

export default Register;
