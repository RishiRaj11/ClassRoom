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
  };
  return (
    <div >
      <div className="card">
        <h1>Welcome to ClassRoom</h1>
        <h3>Upload Assignment</h3>
        <form onSubmit={submitHandler}>
          <textarea
            placeholder="Type text here"
            onChange={textHandler}
          ></textarea>
          <br /> <br />
          <input type="submit" value="Submit" /><br /><br />
        </form>
      </div><br />
      <div className="card">
      <h2>Student List</h2>
      <table>
      <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
      </tr>
      <br /><br />
      </table>
      </div>
    </div>
  );
};

export default ClassRoom;
