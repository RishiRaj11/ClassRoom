import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [userType, setUserType] = useState("student");
  const [submitStatus, setSubmitStatus] = useState(false);
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const cpasswordHandler = (e) => {
    setCpassword(e.target.value);
  };

  const userTypeHandler = (e) => {
    setUserType(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is mandatory");
    } else if (password === "") {
      alert("password is mandatory");
    } else if (password.length < 6) {
      alert("password length atlest of 6 digits");
    } else if (password !== cpassword) {
      alert("password and conform password are not matching");
    } else if (userType === "") {
      alert("please select user type");
    }
    const userData = {
      email: email,
      password: password,
      cpassword: cpassword,
      userType: userType,
    };
   setSubmitStatus(true)
    console.log(userData);
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div className="input_box">
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={emailHandler}
            required
          />
        </div>
        <div className="input_box">
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={passwordHandler}
            required
          />
        </div>
        <div className="input_box">
          <label>
            <b>Conform Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={cpassword}
            onChange={cpasswordHandler}
            required
          />
          <br />
        </div>
        <div className="input_box">
          <label>
            <b>Choose user type</b>
          </label>
          <select value={userType} onChange={userTypeHandler}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="button__actions">
          {submitStatus ? (<Link to="/class"><button type="submit">Login</button></Link>):<button type="submit">Login</button>}
          
        </div>
      </form>
    </div>
  );
};

export default Login;
