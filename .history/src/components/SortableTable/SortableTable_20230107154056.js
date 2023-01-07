import React from "react";
import Table from "../Table/Table";

type Props = {
  props: {
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
};

function SortableTable({ props }: Props) {
  return <Table {...props} />;
}

export default SortableTable;
