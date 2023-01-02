import React from "react";
import "./App.css";
import Button from "./components/Buttons/Button";

function App() {
  return (
    <div className='grid grid-cols-3 container'>
      <div className='col-span-3'>
        <Button large rounded success>
          Click Me
        </Button>
      </div>
    </div>
  );
}

export default App;
