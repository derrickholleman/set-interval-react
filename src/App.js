import "./styles.css";
import Display from "./Display";
import { useState, useEffect } from "react";

export default function App() {
  let inputs = [["This", "is", "an", "array"], false, "Hello"];
  const [input, setInput] = useState();

  let counter = "hi";
  let countHolder = [];

  useEffect(() => {
    const inputTimer = setInterval(() => {
      countHolder.push(counter);

      if (countHolder.length > 2) {
        countHolder.length = 0;
      }
      setInput(inputs[countHolder.length]);
    }, 3000);

    return () => clearInterval(inputTimer);
  }, []);

  return (
    <div className="App">
      <h1>Ramp Front-end Engineer Challenge</h1>

      <Display input={input} />
    </div>
  );
}
