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
};

function Table({ data, config }: Props) {
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
      <tr key={rowData.name} className='border-b'>
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
