import React from "react";
import "./App.css";
import Route from "./Routes/Route";
import DropdownPage from "./pages/dropdown/DropdownPage";
import Accordion from "./components/Accordion/Accordion";
import AccordionPage from "./pages/accordion/AccordionPage";
import ButtonPage from "./pages/buttons/ButtonPage";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className='grid grid-cols-6'>
      <div className='col-span-1 pl-4'>
        <Sidebar />
      </div>
      <div className='col-span-5'>
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
