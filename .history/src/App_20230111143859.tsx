import React from "react";
import "./App.css";
import Route from "./Routes/Route";
import DropdownPage from "./pages/dropdown/DropdownPage";
import Accordion from "./components/Accordion/Accordion";
import AccordionPage from "./pages/accordion/AccordionPage";
import ButtonPage from "./pages/buttons/ButtonPage";
import Sidebar from "./components/Sidebar/Sidebar";
import ModalPage from "./pages/modal/ModalPage";
import TablePage from "./pages/table/TablePage";
import CounterPage from "./pages/counter/CounterPage";
import CounterWithReducer from "./pages/counterwithreducer/CounterWithReducer";

function App() {
  return (
    <div className='grid grid-cols-6'>
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
        <Route path='/table'>
          <TablePage />
        </Route>
        <Route path='/counter'>
          <CounterPage initialState={15} />
        </Route>
        <Route path='/counterwithreducer'>
          <CounterWithReducer />
        </Route>
      </div>
    </div>
  );
}

export default App;
