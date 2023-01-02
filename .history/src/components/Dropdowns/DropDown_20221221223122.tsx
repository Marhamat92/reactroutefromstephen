import React from "react";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
};

function DropDown({ options }: Props) {
  const [showOptions, setShowOptions] = React.useState(false);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={handleShowOptions}
      >
        {"...select"}
      </div>
      {showOptions && <div>{renderedOptions}</div>}
    </div>
  );
}

export default DropDown;
