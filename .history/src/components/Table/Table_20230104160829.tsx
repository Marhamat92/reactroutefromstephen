import React from "react";
import { AiFillSecurityScan } from "react-icons/ai";

type Props = {
  data: {
    name: string;
    color: string;
    score: number;
  }[];
  config: { label: string }[];
};

function Table({ data, config }: Props) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((column) => {
      return <td className=''>{column.render(fruit)}</td>;
    });

    return <tr className='border-b'>{renderedCells}</tr>;
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
