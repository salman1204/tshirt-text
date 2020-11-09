import "./App.css";
import { useState } from "react";
import shirt from "./shirt.png";
import Draggable from "react-draggable";

function App() {
  let [enteredName, setEnteredName] = useState("");

  const handleClick = (event) => {
    enteredName = prompt('Input Text');
    setEnteredName(enteredName)
  }

  return (
    <div className="container">
      <img src={shirt} alt="" style={{width:"500px", height:"500px"}}/> <br/> 
      <Draggable><p className="centered">{enteredName}</p></ Draggable>
      <input type="button" value="Input Text" onClick={handleClick}/>
    </div>
  );
}

export default App;
