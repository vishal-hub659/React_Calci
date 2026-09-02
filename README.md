# Ex04 Simple Calculator - React Project
# Date:30-08-2026
# Name : VISHAL S
# Reg No : 212224040365
# AIM
To develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

# ALGORITHM
STEP 1 Create a React App.

STEP 2 Open a terminal and run:

npx create-react-app simple-calculator cd simple-calculator npm start STEP 3 Inside the src/ folder, create a new file Calculator.js and define the basic structure.

STEP 4 Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

STEP 5 Create a new file Calculator.css in src/ and add the styling.

STEP 6 Open src/App.js and modify it.

STEP 7 Start the development server. npm start

STEP 8 Open http://localhost:3000/ in the browser.

STEP 9 Test the calculator by entering numbers and operations.

STEP 10 Fix styling issues and refine content placement.

STEP 11 Deploy the website.

STEP 12 Upload to GitHub Pages for free hosting.

# PROGRAM
App.jsx
```
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
```

App.css
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e2b10f, #d86417, #077cf0);
}

.calculator {
  width: 350px;
  padding: 25px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 20px 50px rgba(70, 40, 100, 0.25);
  backdrop-filter: blur(15px);
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.title span {
  display: block;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #4d2673;
}

.title small {
  display: block;
  margin-top: 5px;
  color: #806b91;
  font-size: 13px;
}

.display {
  height: 85px;
  border-radius: 20px;
  background: #f8f5fc;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 38px;
  font-weight: bold;
  color: #362044;
  overflow: hidden;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

button {
  height: 60px;
  border: none;
  border-radius: 18px;
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
  background: #ffffff;
  color: #44304f;
  box-shadow: 0 5px 12px rgba(70, 40, 100, 0.12);
  transition: 0.2s;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(70, 40, 100, 0.2);
}

button:active {
  transform: scale(0.94);
}

.operator {
  background: #eadbff;
  color: #6b3ca0;
}

.clear {
  background: #ffd9e8;
  color: #b33767;
}

.equal {
  grid-column: span 2;
  background: #7d4bb3;
  color: white;
}

.equal:hover {
  background: #d84633;
}
```

main.jsx

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
index.css
```
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: hsl(17, 100%, 62%);
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #eb732d;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

body {
  margin: 0;
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}

```

# OUTPUT
![alt text](<Screenshot 2026-08-28 144547.png>)

# RESULT
The program for developing a simple calculator in React.js is executed successfully.