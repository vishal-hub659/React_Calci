import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "⌫") {
      setDisplay(display.slice(0, -1));
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "C", "⌫", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "−",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="app">

      <div className="calculator">

        <div className="title">
          <span>CALCULATOR</span>
          <small>Simple & Smart</small>
        </div>

        <div className="display">
          {display || "0"}
        </div>

        <div className="buttons">

          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleClick(button)}
              className={
                button === "="
                  ? "equal"
                  : ["+", "−", "×", "÷", "%"].includes(button)
                  ? "operator"
                  : button === "C"
                  ? "clear"
                  : ""
              }
            >
              {button}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}

export default App;