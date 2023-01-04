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
    return (
      <tr className='border-b'>
        <td className='p-3'>{fruit.name}</td>
        <td className='p-3'>
          <div className={`w-5 h-5  m-2 ${fruit.color}`}></div>
        </td>
        <td className='p-3'>{fruit.score}</td>
      </tr>
    );
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
