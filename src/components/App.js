import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [visiblie, setVisiblie] = useState('hide')
  return (
    <div className="App" id="main">
      <p id='para' className={visiblie}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={()=>{setVisiblie('show')}}>Show</button>
    </div>
  );
}

export default App
