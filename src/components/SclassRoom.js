import React,{useState} from "react";
import "../App.css";
const SclassRoom = () => {
  const [text, setText] = useState("");
  const textHandler = (e) => {
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("You can not submit empty ");
    }
    localStorage.setItem("submittedAssign", text);
  };
  return (
    <div className="card">
      <h1>Welcome to ClassRoom</h1>
      <h2>Assignment</h2>
      {localStorage.getItem("Assignment") ? (
        <div>
          <b>{localStorage.getItem("Assignment")}</b>
          <form onSubmit={submitHandler}>
            <textarea onChange={textHandler}></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <b>No Assignment</b>
      )}
    </div>
  );
};

export default SclassRoom;
