import React from "react";
import "./App.css";
import Route from "./Routes/Route";
import DropdownPage from "./pages/dropdown/DropdownPage";
import Accordion from "./components/Accordion/Accordion";
import AccordionPage from "./pages/accordion/AccordionPage";
import ButtonPage from "./pages/buttons/ButtonPage";
import Sidebar from "./components/Sidebar/Sidebar";
import ModalPage from "./pages/modal/ModalPage";

function App() {
  return (
    <div className='grid grid-cols-6 relative'>
      <div className='col-span-1 pl-4 pt-4'>
        <Sidebar />
      </div>
      <div className='col-span-5 pt-4'>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
