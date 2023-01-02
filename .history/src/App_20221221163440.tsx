import React from "react";
import "./App.css";
import Button from "./components/Buttons/Button";
import { AiFillPlayCircle } from "react-icons/ai";

function App() {
  const buttonClick = () => {
    console.log("hellooooooooo");
  };

  return (
    <div>
      <div className='grid grid-cols-5'>
        <div className='lg:col-span-1'>
          <Button onClick={buttonClick} rounded success>
            <AiFillPlayCircle className='text-3xl ' />
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
        <div className='lg:col-span-1'>
          <Button medium rounded success>
            Click Me
          </Button>
          <Button medium rounded danger>
            Click Me
          </Button>
          <Button medium rounded primary>
            Click Me
          </Button>
          <Button medium rounded warning>
            Click Me
          </Button>
          <Button medium rounded secondary>
            Click Me
          </Button>
        </div>
        <div className='lg:col-span-1'>
          <Button large rounded success>
            Click Me
          </Button>
          <Button large rounded danger>
            Click Me
          </Button>
          <Button large rounded primary>
            Click Me
          </Button>
          <Button large rounded warning>
            Click Me
          </Button>
          <Button large rounded secondary>
            Click Me
          </Button>
        </div>
        <div className='lg:col-span-1'>
          <Button large rounded success outline>
            Click Me
          </Button>
          <Button large rounded danger outline>
            Click Me
          </Button>
          <Button large rounded primary outline>
            Click Me
          </Button>
          <Button large rounded warning outline>
            Click Me
          </Button>
          <Button large rounded secondary outline>
            Click Me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
