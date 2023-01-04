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
    <table>
      <thead>
        <tr>
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
