import React from "react";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
};

function DropDown({ options }: Props) {
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className='item'>
        {option.label}
      </div>
    );
  });

  return <div>{renderedOptions}</div>;
}

export default DropDown;
