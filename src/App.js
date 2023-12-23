// index.js
import React, { useState } from 'react';
import Profile from "./Components/Profile";
import "./App.css";

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showProfile, setShowProfile] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save user object in local storage
                localStorage.setItem('user', JSON.stringify(data));
                // Show the Profile component
                setShowProfile(true);
            } else {
                // Display error message
                alert(data.error);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div>
            <div className="signup-form">
                <div>
                    Welcome back! 👋
                </div>
                <div>Sign up to your account</div>
                <div className="form-row">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>CONTINUE</button>
            </div>
            <div style={{display:"flex" , alignItems:"center" ,justifyContent:"center" , marginTop:"12px"}}>Don't have an account? <span style={{color:'#625BF7',paddingLeft:'12px'}}> Sign up</span></div>
            {showProfile && <Profile />}
        </div>
    );
};

export default App;
