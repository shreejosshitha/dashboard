import React, { useState } from "react";
import { useStore } from "../Store";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LoginPage = () => {
  const { setUser } = useStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "student" && password === "12345") {
      setUser(username);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Student Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
