// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './components/C_B_D_Button';
 // import C_B_D_Button from './components/C_B_D_Button';
// import { d, t } from './d1.js';

//function App() {  
  //return (
    // <div className="App">
    //   <header className="App-header">

    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     {/* <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> */}

    //     <p>Sir today's date is {d}</p>
    //      <p>You have a meeting at {t}</p> 
    //   </header>
    // </div>

    function App() {
      const [num1,setNum1]=useState(0);
      const [num2,setNum2]=useState(0);


     // const num2 = 
     
      return (
        <><input type='number' value={num1} onChange={(e) => setNum1(Number(e.target.value))} /><div style={{ textAlign: "center", marginTop: "50px" }}>
          <input type='number' value={num2} onChange={(e) => setNum2(Number(e.target.value))} /><div style={{ textAlign: "center", marginTop: "70px" }}></div>
          <h1>Arithmetic Operations in JSX</h1>

          <h2>Addition: {num1} + {num2} = {num1 + num2}</h2>
          <h2>Subtraction: {num1} - {num2} = {num1 - num2}</h2>
          <h2>Multiplication: {num1} × {num2} = {num1 * num2}</h2>
          <h2>Division: {num1} ÷ {num2} = {num1 / num2}</h2>

        </div>
        <Button onClick={() => { setNum1(0); setNum2(0); }} text="Reset" />
        </>
      );
    }

 

export default App;
