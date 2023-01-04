import React from "react";
import { AiFillSecurityScan } from "react-icons/ai";

type Props = {
  data: {
    name: string;
    color: string;
    score: number;
  }[];
};

function Table({ data }: Props) {
  const renderedRows = data.map((fruit) => {
    return (
      <tr className='border-b'>
        <td className='p-3'>{fruit.name}</td>
        <td className='p-3'>
          <div className={`w-4 h-4 `}></div>
        </td>
        <td className='p-3'>{fruit.score}</td>
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
