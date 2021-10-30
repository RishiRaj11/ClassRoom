import React, { useState } from "react";
import "../App.css";

const ClassRoom = () => {
  const [assign, setAssign] = useState("");

  const textHandler = (e) => {
    setAssign(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(assign);
    localStorage.setItem("Assignment", assign);
  };
  return (
    <div>
      <div className="card">
        <h1>Welcome to ClassRoom</h1>
        <h3>Upload Assignment</h3>
        <form onSubmit={submitHandler}>
          <textarea
            placeholder="Type text here"
            onChange={textHandler}
          ></textarea>
          <br /> <br />
          <input type="submit" value="Submit" />
          <br />
          <br />
        </form>
      </div>
      <br />
      <div className="card">
        <h2> Submitted Student List</h2>
        <table>
          <tr>
            <th>Submitted Answer</th>
          </tr>
          <br />
          <br />

          {localStorage.getItem("submittedAssign") ? (
            <tr>
              <td>{localStorage.getItem("submittedAssign")}</td>
            </tr>
          ) : (
            ""
          )}
        </table>
      </div>
    </div>
  );
};

export default ClassRoom;
