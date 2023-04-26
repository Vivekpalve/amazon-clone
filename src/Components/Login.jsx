import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login

    auth 
        .signInWithEmailAndPassword(email,password)
        .then(auth =>{
          navigate('/');
        })
        .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it sucessfully created new user with email and password
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    //do some fancy firebase register login
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            //e.target.value is get value from input fill that user type it setEmail then it set i email in [email,setemail]
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By Signing-in you agree to Amazon's Conditions of Use & Sale.Please
          see our Privacy Notice ,out Cookies Notice and our Interest Based Ads
        </p>
      </div>
      <div className="a-divider a-divider-break">
        <h5 aria-level="5">New to Amazon?</h5>
      </div>
      <button onClick={register} className="login__registerbutton">
        Create your Amazon acount
      </button>
    </div>
  );
};

export default Login;
