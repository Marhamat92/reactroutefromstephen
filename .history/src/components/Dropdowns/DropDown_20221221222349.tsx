import React from "react";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
};

function DropDown({ options }: Props) {
  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div>{"...select"}</div>
      <div>{renderedOptions}</div>
    </div>
  );
}

export default DropDown;
