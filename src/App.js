import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div className="Container">
      <div className="Main">
        <div className="Header">counter</div>
        <div className="Counter">{number}</div>
        <div className="Buttons">
          <button className="button" onClick={() => setNumber(number - 1)}>decrease</button>
          <button className="button" onClick={() => setNumber(0)}>reset</button>
          <button className="button" onClick={() => setNumber(number + 1)}>increase</button>
        </div>
        <div className="timerButtons">
          <button className="timerButton">start</button>
        </div>
      </div>
    </div>
  );
}

export default App;
