import React from "react";

type Props = {
  data: {
    name: string;
    color: string;
    score: number;
  }[];
};

function Table({ data }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default Table;
