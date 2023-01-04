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
        <div className={`w-6 h-6 m-2 rounded-md  ${fruit.color}`}></div>
      ),
    },
    { label: "Score", render: (fruit: { score: number }) => fruit.score },
  ];

  const fnKey = (fruit: { name: string }) => fruit.name;

  return <Table config={config} data={data} fnKey={fnKey} />;
}

export default TablePage;
