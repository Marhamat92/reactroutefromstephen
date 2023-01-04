import React from "react";

type Props = {
  data: {
    name: string;
    color: string;
    score: number;
  }[];
};

function Table({ data }: Props) {
  return <div>{data.length}</div>;
}

export default Table;
