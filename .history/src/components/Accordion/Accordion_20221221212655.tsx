import React from "react";

type Props = {
  items: {
    id: string;
    label: string;
    content: string;
  }[];
};

function Accordion({ items }: Props) {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const onLabelClick = (index: number) => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === index) {
        return -1;
      }
      return index;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === activeIndex;

    return (
      <React.Fragment key={item.id}>
        <div
          onClick={() => onLabelClick(index)}
          className='flex items-center justify-between px-3 py-2 bg-gray-100 cursor-pointer'
        >
          <div className='text-gray-700 '>{item.label}</div>
          <div className='text-gray-700'>+</div>
        </div>
        {isExpanded && (
          <div className='px-3 py-2 bg-gray-200'>{item.content}</div>
        )}
      </React.Fragment>
    );
  });

  return <div className='px-10 mt-10'>{renderedItems}</div>;
}

export default Accordion;
