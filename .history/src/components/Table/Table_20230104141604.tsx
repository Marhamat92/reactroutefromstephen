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
      <tr>
        <td>{fruit.name}</td>
        <td>{fruit.color}</td>
        <td>{fruit.score}</td>
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border border-b-2'>
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
