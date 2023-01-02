import React from "react";

type Props = {
  items: {
    id: string;
    label: string;
    content: string;
  }[];
};

function Accordion({ items }: Props) {
  const renderedItems = items.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className='flex items-center justify-between px-3 py-2 bg-gray-100'>
          <div className='text-gray-700'>{item.label}</div>
          <div className='text-gray-700'>+</div>
        </div>
        <div className='px-3 py-2 bg-gray-200'>{item.content}</div>
      </React.Fragment>
    );
  });

  return <div className='px-10'>{renderedItems}</div>;
}

export default Accordion;
