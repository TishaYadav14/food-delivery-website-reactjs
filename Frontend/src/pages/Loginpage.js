// import React from 'react';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Loginpage.css";
import logo from "../assets/images/logo.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Loginpage() {
  const [isMember, setIsMember] = useState(false);
  const [error, setError] = useState("");

  // const [isLogin, setIsLogin] = useState(true);
  // const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // firstName: "",
    // lastName: "",
    username: "",
    email: "",
    password: "",
    rememberPassword: false,
  });

  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  // const handleToggleLoginSignup = () => {
  //   setIsLogin(!isLogin);
  // };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const registerUser = async (currentUser) => {
    try {
      // const response = await axios.post(`temp-project-pi.vercel.app/api/user/register`, currentUser);
      const response = await axios.post(`food-delivery-app-livid.vercel.app/api/user/register`, currentUser);
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/foods");
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post(
        `food-delivery-app-livid.vercel.app/api/user/login`,
        currentUser
      );
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/foods");
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  // const handleToggleViewPassword = () => {
  //   setShowPassword(!showPassword);
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your validation and registration/login logic here
    // For example, you can check if the required fields are filled and validate email/password
    const { username, email, password } = formData;
    console.log(username);
    const currentUser = { username, email, password};
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };
  
  return (
    <div className="loginpage">
      <div className="loginpage-content">
        <div className="login-box">
        <form onSubmit={handleSubmit}>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          {/* Sign Up */}
          <img src={logo} alt="Logo" />

          {/* <h2>{isLogin ? "Login" : "Sign Up"}</h2> */}

          {!isMember && (
            <>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
                />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            />

          <div className="password-input">
            <input
              // type={showPassword ? "text" : "password"}
              type="password"
              name="password"
              placeholder="Password"
              // value={formData.password}
              onChange={handleInputChange}
              required
              />
          </div>

          {isMember && (
            <label>
              <input
                type="checkbox"
                name="rememberPassword"
                checked={formData.rememberPassword}
                onChange={handleInputChange}
                />
              Remember me
            </label>
          )}

          <button type="submit" className="button" onClick={handleSubmit}>
            {isMember ? "Login" : "Sign Up"}
          </button>

          {isMember && (
            <p className="login-register-text">
              Don't have an account? Please 
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
                >
                Register
              </span>
            </p>
          )}
          {!isMember && (
            <p className="login-register-text">
              Already have an account? Please 
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
                >
                Login
              </span>
            </p>
          )}

          {/* <div className="toggle-link" onClick={handleToggleLoginSignup}>
            {isLogin ? "Not a member? Sign Up" : "Already have an account? Login"}
          </div> */}
          </form>

        </div>
      </div>
    </div>
  );
};
  
  export default Loginpage;
  