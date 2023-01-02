import React from "react";
import "./App.css";
import Link from "./components/Link/Link";

function App() {
  return (
    <div className='flex flex-col'>
      <Link to='/dropdown'>Dropdown</Link>
      <Link to='/accordion'>Accordion</Link>
      <Link to='/button'>Button</Link>
    </div>
  );
}

export default App;
