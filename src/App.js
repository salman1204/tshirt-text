import "./App.css";
import { useState } from "react";
import shirt from "./shirt.png";

function App() {
  let [enteredName, setEnteredName] = useState("");

  const handleClick = (event) => {
    enteredName = prompt('Input Text');
    setEnteredName(enteredName)
  }

  return (
    <div>
      <img src={shirt} alt="" style={{width:"500px", height:"500px"}}/> <br/> 
      <p>{enteredName}</p>
      <input type="button" value="Input Text" onClick={handleClick}/>
    </div>
  );
}

export default App;
