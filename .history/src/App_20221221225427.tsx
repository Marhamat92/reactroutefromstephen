import React from "react";
import "./App.css";
import DropDown from "./components/Dropdowns/DropDown";

function App() {
  const [selected, setSelected] = React.useState(null);

  const handleSelect = (option: any) => {
    setSelected(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <DropDown value={selected} onChange={handleSelect} options={options} />
    </div>
  );
}

export default App;
