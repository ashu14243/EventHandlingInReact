import React, { useState } from "react";

function App() {
  const [bg, setBg] = useState("black");

  function changeColor() {
    setBg("white"); // toggle colors
  }

  function yo() {
    setBg("black"); // toggle colors
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={changeColor}
        onMouseOut={yo}
        style={{ backgroundColor: bg }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
