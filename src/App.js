import "./calculator.css";
import { useState } from "react";

function App() {
  const [value,setValue] = useState("0");
  const [operator , setOperator] = useState("");
  const [value1,setValue1] = useState("");
  const [value2,setValue2] = useState("");
   
const numbers = [0,1,2,3,4,5,6,7,8,9];
const opt = ["+","-","/","*"];

  function OnkeyPress(input){
    if(numbers.indexOf(input) >= 0 || input === "."){
   
      if (operator.length > 0) {
        let ans = value2 + input;
        setValue2(value2 + input);
        setValue(ans);
      }
      else
      {
        let ans = value1 + input;
        setValue1(value1 + input);
        setValue(ans);
      }
    }
    else if(opt.indexOf(input) >= 0 ){
      setOperator(input);
    }
  }


  function Result()
   {
     if (operator.indexOf("+") >= 0) {
      setValue(parseFloat(value1) + parseFloat(value2));
      setValue1(parseFloat(value1) + parseFloat(value2));
      setValue2("");
     }
     else if (operator.indexOf("-") >= 0) {
      setValue(parseFloat(value1) - parseFloat(value2));
      setValue1(parseFloat(value1) - parseFloat(value2));
      setValue2("");
     }
     else if (operator.indexOf("*") >= 0) {
      setValue(parseFloat(value1) * parseFloat(value2));
      setValue1(parseFloat(value1) * parseFloat(value2));
      setValue2("");
     }
     else if (operator.indexOf("/") >= 0) {
      setValue(parseFloat(value1) / parseFloat(value2));
      setValue1(parseFloat(value1) / parseFloat(value2));
      setValue2("");
     }
   }
 
   function clear()
   {
     setValue("0");
     setValue1("");
     setValue2("");
     setOperator("");
   }
  return (
    <div className="main-container">
      <div className="result">{value}</div>

      <div>
        <button onClick={() => {clear()}}>AC</button>
        <button  onClick={() => {OnkeyPress("-")}}>+/-</button>
        <button  onClick={() => {setValue(value*0.01)}}>%</button>
        <button className="spl-btn" onClick = {() => OnkeyPress("/")}>÷</button>
      </div>

      <div>
        <button onClick = {() => OnkeyPress(7)}>7</button>
        <button onClick = {() => OnkeyPress(8)}>8</button>
        <button onClick = {() => OnkeyPress(9)}>9</button>
        <button className="spl-btn" onClick = {() => OnkeyPress("*")}>x</button>
      </div>

      <div>
        <button onClick = {() => OnkeyPress(4)}>4</button>
        <button onClick = {() => OnkeyPress(5)}>5</button>
        <button onClick = {() => OnkeyPress(6)}>6</button>
        <button className="spl-btn" onClick = {() => OnkeyPress("-")}>-</button>
      </div>

      <div>
        <button  onClick = {() => OnkeyPress(1)}>1</button>
        <button  onClick = {() => OnkeyPress(2)}>2</button>
        <button  onClick = {() => OnkeyPress(3)}>3</button>
        <button className="spl-btn" onClick = {() => OnkeyPress("+")}>+</button>
      </div>

      <div>
        <button style={{ width: "50%" }} onClick = {() => OnkeyPress(0)}>0</button>
        <button  onClick = {() => OnkeyPress(".")}>.</button>
        <button className="spl-btn" onClick = {() => Result()}>=</button>
      </div>
    </div>
  );
}

export default App;
