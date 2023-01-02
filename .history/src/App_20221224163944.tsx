import React from "react";
import "./App.css";
import Link from "./components/Link/Link";
import Route from "./Routes/Route";
import DropdownPage from "./pages/dropdown/DropdownPage";

function App() {
  return (
    <div className='flex flex-col'>
      <Link to='/dropdown'>Dropdown</Link>
      <Link to='/accordion'>Accordion</Link>
      <Link to='/button'>Button</Link>
      <div>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
