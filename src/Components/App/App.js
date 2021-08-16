import React, { useState } from "react";
import Button from "../Button/Button";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const calc = (op, x, y) => {
    if (op === "+") {
      return x + y;
    } else if (op === "−") {
      return x - y;
    } else if (op === "×") {
      return x * y;
    } else if (op === "÷") {
      return x / y;
    } else {
      return new Error("Wrong operator");
    }
  };

  const handleButtonClick = (event, content) => {
    const number = parseFloat(value);

    switch (content) {
      // Function buttons
      case "AC":
        setValue("0");
        setMemory(null);
        setOperator(null);
        return;
      case "±":
        setValue((number * -1).toString());
        return;
      case "%":
        setValue((number / 100).toString());
        setMemory(null);
        setOperator(null);
        return;
      // Operator buttons
      case "+":
        if (operator !== null) {
          setMemory(calc(operator, memory, number));
        } else {
          setMemory(number);
        }
        setValue("0");
        setOperator("+");
        return;
      case "−":
        if (operator !== null) {
          setMemory(calc(operator, memory, number));
        } else {
          setMemory(number);
        }
        setValue("0");
        setOperator("−");
        return;
      case "×":
        if (operator !== null) {
          setMemory(calc(operator, memory, number));
        } else {
          setMemory(number);
        }
        setValue("0");
        setOperator("×");
        return;
      case "÷":
        if (operator !== null) {
          setMemory(calc(operator, memory, number));
        } else {
          setMemory(number);
        }
        setValue("0");
        setOperator("÷");
        return;
      case "=":
        if (!operator) return;

        setValue(calc(operator, memory, number).toString());
        setMemory(null);
        setOperator(null);
        return;
      case ".":
        if (value.includes(".")) return;
        setValue(value + ".");
        return;
      default:
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(number + content).toString());
    }
  };
  return (
    <div className="app">
      <div className="display">{value}</div>
      <div className="buttons">
        <Button
          handleButtonClick={handleButtonClick}
          content="AC"
          type="function"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="±"
          type="function"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="%"
          type="function"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="÷"
          type="operator"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="7"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="8"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="9"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="×"
          type="operator"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="4"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="5"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="6"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="−"
          type="operator"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="1"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="2"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="3"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="+"
          type="operator"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="0"
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="."
          type="default"
        />
        <Button
          handleButtonClick={handleButtonClick}
          content="="
          type="operator"
        />
      </div>
    </div>
  );
};

export default App;
