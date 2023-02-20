import { useState } from "react";
import React from "react";

const MainFunc = () => {
  const [state, setState] = useState({ name: "", message: "", key: "" });

  const handleClick = () => {
    setState({ message: "Welcome" });
  };
  const handleMouseMove = () => {
    setState({ message: "mouse is moving" });
  };
  const handleKeyPress = (e) => {
    setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    });
  };
  const handleBlur = () => {
    setState({ message: "Input field has been blurred" });
  };
  const handleChange = (e) => {
    setState({
      firstName: e.target.value,
      message: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(e.target);
    console.log(e);
    console.log(e.target);
  };
  const handleCopy = () => {
    setState({
      message: "Using 30 Days Of React for commercial purpose is not allowed",
    });
  };

  return (
    <div>
      <h1>Welcome to the World of Events</h1>

      <button onClick={handleClick}>Click Me</button>
      <button onMouseMove={handleMouseMove}>Move mouse on me</button>
      <p onCopy={handleCopy}>
        Check copy right permission by copying this text
      </p>
      <p>{state.message}</p>
      <label htmlFor=""> Test for onKeyPress Event: </label>
      <input type="text" onKeyPress={handleKeyPress} />
      <br />

      <label htmlFor=""> Test for onBlur Event: </label>
      <input type="text" onBlur={handleBlur} />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input onChange={handleChange} name="firstName" value={state.value} />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default MainFunc;
