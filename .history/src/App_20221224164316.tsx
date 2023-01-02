import React from "react";
import "./App.css";
import Link from "./components/Link/Link";
import Route from "./Routes/Route";
import DropdownPage from "./pages/dropdown/DropdownPage";
import Accordion from "./components/Accordion/Accordion";
import AccordionPage from "./pages/accordion/AccordionPage";
import ButtonPage from "./pages/buttons/ButtonPage";

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
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
