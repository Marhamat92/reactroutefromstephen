import React from "react";
import "./App.css";
import Button from "./components/Buttons/Button";

function App() {
  return (
    <div>
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
  );
}

export default App;
