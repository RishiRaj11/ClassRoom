import React from "react";

const SignUp = () => {
  return (
    <div className="card">
      <h2>SignUp</h2>
      <form>
        <div className="input_box">
          <label for="text">
            <b>Name</b>
          </label>
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div className="input_box">
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
        </div>
        <div className="input_box">
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>
        <div className="input_box">
          <label for="psw">
            <b>Conform Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <br />
        </div>
        <div className="input_box">
          <label for="psw">
            <b>Phone number</b>
          </label>
          <input type="tel" placeholder="Phone number" name="psw" required />
          <br />
        </div>

        <div className="input_box">
          <label for="cars">
            <b>Choose user type</b>
          </label>
          <select name="">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="button__actions">
          <button type="submit">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
