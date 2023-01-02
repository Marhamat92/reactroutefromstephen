import React from "react";
import "./App.css";
import Button from "./components/Buttons/Button";

function App() {
  return (
    <div>
      <div className='grid grid-cols-5'>
        <div className='lg:col-span-1'>
          <Button rounded success>
            Click Me
          </Button>
          <Button rounded danger>
            Click Me
          </Button>
          <Button rounded primary>
            Click Me
          </Button>
          <Button rounded warning>
            Click Me
          </Button>
          <Button rounded secondary>
            Click Me
          </Button>
        </div>
        <div className='lg:col-span-1'>
          <Button outline rounded success>
            Click Me
          </Button>
          <Button outline rounded danger>
            Click Me
          </Button>
          <Button outline rounded primary>
            Click Me
          </Button>
          <Button outline rounded warning>
            Click Me
          </Button>
          <Button outline rounded secondary>
            Click Me
          </Button>
        </div>
        <div className='lg:col-span-1'>
          <Button medium outline rounded success>
            Click Me
          </Button>
          <Button medium outline rounded danger>
            Click Me
          </Button>
          <Button medium outline rounded primary>
            Click Me
          </Button>
          <Button medium outline rounded warning>
            Click Me
          </Button>
          <Button medium outline rounded secondary>
            Click Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
