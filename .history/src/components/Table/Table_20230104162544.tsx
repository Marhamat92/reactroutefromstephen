import React from "react";
import { AiFillSecurityScan } from "react-icons/ai";

type Props = {
  data: {
    name: string;
    color: string;
    score: number;
  }[];
  config: {
    label: string;
    render: (fruit: {
      name: string;
      color: string;
      score: number;
    }) => string | number | JSX.Element;
  }[];
  fnKey: (fruit: { name: string }) => string;
};

function Table({ data, config, fnKey }: Props) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className='p-2'>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={fnKey(rowData)} className='border-b'>
        {renderedCells}
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
