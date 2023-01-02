import React from "react";
import { useEffect, useRef } from "react";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  value: any;
  onChange: (option: any) => void;
};

function DropDown({ options, value, onChange }: Props) {
  const [showOptions, setShowOptions] = React.useState(false);
  const divElement = useRef<HTMLDivElement>(null);
  console.log(divElement);

  useEffect(() => {
    const onBodyClick = (event: MouseEvent) => {
      if (
        divElement.current &&
        !divElement.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectOption = (option: any) => {
    console.log(option);
    onChange(option);
    setShowOptions(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleSelectOption(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divElement} className='w-48 relative'>
      <div
        className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full'
        onClick={handleShowOptions}
      >
        {value?.label || "...select"}
      </div>
      {showOptions && (
        <div className='absolute  border rounded p-3 shadow bg-white w-full top-full'>
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default DropDown;
