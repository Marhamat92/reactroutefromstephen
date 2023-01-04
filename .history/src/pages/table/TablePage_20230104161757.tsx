import React from "react";
import Table from "../../components/Table/Table";

type Props = {};

function TablePage({}: Props) {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Fruit", render: (fruit: { name: string }) => fruit.name },
    {
      label: "Color",
      render: (fruit: { color: string }) => (
        <div className={`w-5 h-5 rounded-md  ${fruit.color}`}></div>
      ),
    },
    { label: "Score", render: (fruit: { score: number }) => fruit.score },
  ];

  return <Table config={config} data={data} />;
}

export default TablePage;
